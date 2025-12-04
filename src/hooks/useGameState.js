import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getQuestions } from '../data/getQuestions';

/**
 * Hook personalizado para manejar todo el estado del juego
 * @returns {Object} - Estado y funciones del juego
 */
export const useGameState = () => {
  // Persistencia de campaña en localStorage
  const [burnedQuestionIds, setBurnedQuestionIds] = useLocalStorage('pd_burned_questions', []);

  // Estados del juego
  const [gameState, setGameState] = useState('intro'); // intro | test | round_transition | review | campaign_complete
  const [round, setRound] = useState(1);
  const [roundBatches, setRoundBatches] = useState({}); // { 1: [], 2: [], 3: [] }
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);

  const ROUND_TIME_SECONDS = 5 * 60; // 5 minutos por ronda

  // Iniciar nueva sesión de assessment (3 rondas)
  const startAssessment = useCallback(() => {
    // 1. Obtener todas las preguntas disponibles (no quemadas)
    const fullPool = getQuestions({
      shuffleOptions: true,
      shuffleQuestions: true
    });

    const availableQuestions = fullPool.filter(q => !burnedQuestionIds.includes(q.id));

    // Si no hay suficientes preguntas para al menos 1 ronda, campaña completa
    if (availableQuestions.length === 0) {
      setGameState('campaign_complete');
      return;
    }

    // 2. Dividir en 3 lotes (Batches)
    // Intentamos hacer 3 rondas equitativas. Si hay pocas preguntas, se ajusta.
    const totalAvailable = availableQuestions.length;
    const batchSize = Math.ceil(totalAvailable / 3);

    const batches = {
      1: availableQuestions.slice(0, batchSize),
      2: availableQuestions.slice(batchSize, batchSize * 2),
      3: availableQuestions.slice(batchSize * 2, batchSize * 3)
    };

    // Filtrar batches vacíos (por si quedan menos de 3 rondas)
    const validBatches = {};
    let validRoundCount = 0;
    if (batches[1].length > 0) { validBatches[1] = batches[1]; validRoundCount++; }
    if (batches[2].length > 0) { validBatches[2] = batches[2]; validRoundCount++; }
    if (batches[3].length > 0) { validBatches[3] = batches[3]; validRoundCount++; }

    setRoundBatches(validBatches);
    setRound(1);
    setActiveQuestions(validBatches[1]);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTotalScore(0);
    setMaxPossibleScore(0);
    setGameState('test');
  }, [burnedQuestionIds]);

  // Avanzar a la siguiente ronda
  const nextRound = useCallback(() => {
    const nextRoundNum = round + 1;
    if (roundBatches[nextRoundNum] && roundBatches[nextRoundNum].length > 0) {
      setRound(nextRoundNum);
      setActiveQuestions(roundBatches[nextRoundNum]);
      setCurrentQuestionIndex(0);
      setGameState('test');
    } else {
      finishAssessment();
    }
  }, [round, roundBatches]);

  // Responder pregunta y avanzar
  const handleAnswer = useCallback((selectedOption) => {
    const currentQ = activeQuestions[currentQuestionIndex];

    // Guardar respuesta
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: {
        selectedId: selectedOption?.id,
        selectedText: selectedOption?.text,
        selectedType: selectedOption?.type,
        score: selectedOption?.score,
        bestOption: currentQ.options.find(o => o.score === 5)
      }
    }));

    // Actualizar score
    setTotalScore(prev => prev + (selectedOption?.score || 0));
    setMaxPossibleScore(prev => prev + 5);

    // Lógica de avance
    if (currentQuestionIndex < activeQuestions.length - 1) {
      // Siguiente pregunta en la misma ronda
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Fin de la ronda actual
      // Verificamos si hay más rondas
      const nextRoundNum = round + 1;
      if (roundBatches[nextRoundNum] && roundBatches[nextRoundNum].length > 0) {
        setGameState('round_transition');
      } else {
        finishAssessment();
      }
    }
  }, [activeQuestions, currentQuestionIndex, round, roundBatches]);

  // Finalizar assessment
  const finishAssessment = useCallback(() => {
    setAnswers(currentAnswers => {
      const answeredQuestionIds = Object.keys(currentAnswers);
      setBurnedQuestionIds(prev => [...prev, ...answeredQuestionIds]);
      setGameState('review');
      return currentAnswers;
    });
  }, [setBurnedQuestionIds]);

  // Reiniciar campaña
  const resetCampaign = useCallback(() => {
    setBurnedQuestionIds([]);
    setGameState('intro');
  }, [setBurnedQuestionIds]);

  // Stats
  const getStats = useCallback(() => {
    // Total de preguntas en ESTA sesión (sumando todos los batches)
    let sessionTotalQuestions = 0;
    Object.values(roundBatches).forEach(batch => sessionTotalQuestions += batch.length);

    // Preguntas respondidas en esta sesión
    const answeredCount = Object.keys(answers).length;

    // Total de preguntas en toda la campaña (burned + disponibles)
    const fullPool = getQuestions({ shuffleOptions: false, shuffleQuestions: false });
    const totalCampaignQuestions = fullPool.length;
    const remainingQuestions = totalCampaignQuestions - burnedQuestionIds.length;
    const progressPercent = totalCampaignQuestions > 0
      ? Math.round((burnedQuestionIds.length / totalCampaignQuestions) * 100)
      : 0;

    const scorePercentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

    return {
      totalQuestions: totalCampaignQuestions,
      remainingQuestions,
      progressPercent,
      questionsAnswered: answeredCount,
      scorePercentage,
      totalScore,
      maxPossibleScore,
      currentRound: round,
      totalRounds: Object.keys(roundBatches).length
    };
  }, [roundBatches, answers, totalScore, maxPossibleScore, round, burnedQuestionIds]);

  // URL Sync
  useEffect(() => {
    if (gameState === 'test' && activeQuestions[currentQuestionIndex]) {
      const currentQ = activeQuestions[currentQuestionIndex];
      const url = new URL(window.location);
      url.searchParams.set('q', currentQ.displayId);
      window.history.replaceState({}, '', url);
    }
  }, [gameState, currentQuestionIndex, activeQuestions]);

  return {
    gameState,
    activeQuestions,
    currentQuestionIndex,
    answers,
    totalScore,
    maxPossibleScore,
    round,
    roundBatches,
    startAssessment,
    handleAnswer,
    nextRound,
    finishAssessment,
    resetCampaign,
    getStats,
    // Constantes
    ROUND_TIME_SECONDS,

    // Helpers
    allPlayedQuestions: Object.values(roundBatches).flat()
  };
};
