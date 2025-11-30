import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getQuestions } from '../data/getQuestions';

const TOTAL_TIME_SECONDS = 12 * 60; // 12 minutos BRUTAL MODE 🔥

/**
 * Hook personalizado para manejar todo el estado del juego
 * @returns {Object} - Estado y funciones del juego
 */
export const useGameState = () => {
  // Persistencia de campaña en localStorage
  const [burnedQuestionIds, setBurnedQuestionIds] = useLocalStorage('toku_burned_questions', []);

  // Estados del juego
  const [gameState, setGameState] = useState('intro'); // intro | test | review | campaign_complete
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0);

  // Iniciar nueva sesión de assessment
  const startAssessment = useCallback(() => {
    // TIER 1.1: getQuestions ya incluye shuffle de opciones por defecto
    const fullPool = getQuestions({
      shuffleOptions: true,    // Rompe el patrón de "B siempre correcta"
      shuffleQuestions: true   // También mezcla el orden de preguntas
    });

    const availableQuestions = fullPool.filter(q => !burnedQuestionIds.includes(q.id));

    // Si no hay preguntas disponibles, campaña completa
    if (availableQuestions.length === 0) {
      setGameState('campaign_complete');
      return;
    }

    // Ya no necesitamos shuffle manual - getQuestions lo hace
    setActiveQuestions(availableQuestions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTotalScore(0);
    setMaxPossibleScore(0); // Se calculará dinámicamente según preguntas respondidas
    setGameState('test');
  }, [burnedQuestionIds]);

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

    // Actualizar score y maxPossibleScore dinámicamente
    setTotalScore(prev => prev + selectedOption?.score);
    setMaxPossibleScore(prev => prev + 5); // Cada pregunta vale máximo 5 puntos

    // Avanzar o finalizar
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishAssessment();
    }
  }, [activeQuestions, currentQuestionIndex]);

  // Finalizar assessment (por tiempo o por completar)
  const finishAssessment = useCallback(() => {
    // Marcar solo las preguntas RESPONDIDAS como "quemadas"
    setAnswers(currentAnswers => {
      const answeredQuestionIds = Object.keys(currentAnswers);
      setBurnedQuestionIds(prev => [...prev, ...answeredQuestionIds]);
      setGameState('review');
      return currentAnswers;
    });
  }, [setBurnedQuestionIds]);

  // Reiniciar toda la campaña
  const resetCampaign = useCallback(() => {
    setBurnedQuestionIds([]);
    setGameState('intro');
  }, [setBurnedQuestionIds]);

  // Calcular estadísticas
  const getStats = useCallback(() => {
    const fullPool = getQuestions({ shuffleOptions: false }); // Sin shuffle para contar
    const totalQuestions = fullPool.length;
    const remainingQuestions = totalQuestions - burnedQuestionIds.length;
    const progressPercent = ((totalQuestions - remainingQuestions) / totalQuestions) * 100;
    const scorePercentage = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

    return {
      totalQuestions,
      remainingQuestions,
      progressPercent,
      scorePercentage,
      totalScore,
      maxPossibleScore
    };
  }, [burnedQuestionIds, totalScore, maxPossibleScore]);

  // URL Sync: Update URL when question changes
  useEffect(() => {
    if (gameState === 'test' && activeQuestions[currentQuestionIndex]) {
      const currentQ = activeQuestions[currentQuestionIndex];
      const url = new URL(window.location);
      url.searchParams.set('q', currentQ.displayId);
      window.history.replaceState({}, '', url);
    }
  }, [gameState, currentQuestionIndex, activeQuestions]);

  // URL Init: Check for ?q=ID on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const questionId = params.get('q');

    if (questionId && gameState === 'intro') {
      const fullPool = getQuestions({
        shuffleOptions: true,
        shuffleQuestions: true
      });

      const targetIndex = fullPool.findIndex(q => q.displayId.toLowerCase() === questionId.toLowerCase());

      if (targetIndex !== -1) {
        setActiveQuestions(fullPool);
        setCurrentQuestionIndex(targetIndex);
        setAnswers({});
        setTotalScore(0);
        setMaxPossibleScore(0);
        setGameState('test');
      }
    }
  }, []); // Run once on mount

  return {
    // Estado
    gameState,
    activeQuestions,
    currentQuestionIndex,
    answers,
    totalScore,
    maxPossibleScore,
    burnedQuestionIds,

    // Funciones
    startAssessment,
    handleAnswer,
    finishAssessment,
    resetCampaign,
    getStats,

    // Constantes
    TOTAL_TIME_SECONDS
  };
};
