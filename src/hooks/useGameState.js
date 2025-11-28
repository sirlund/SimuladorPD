import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { getQuestionPool } from '../data/questionPool';

const QUESTIONS_PER_SESSION = 24; // TODAS las preguntas en una sola tirada
const TOTAL_TIME_SECONDS = 5 * 60; // 5 minutos BRUTAL MODE 🔥

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
    const fullPool = getQuestionPool();
    const availableQuestions = fullPool.filter(q => !burnedQuestionIds.includes(q.id));

    // Si no hay suficientes preguntas disponibles, campaña completa
    if (availableQuestions.length < QUESTIONS_PER_SESSION) {
      setGameState('campaign_complete');
      return;
    }

    // Seleccionar y mezclar preguntas
    const shuffledAvailable = [...availableQuestions].sort(() => 0.5 - Math.random());
    const selectedSession = shuffledAvailable.slice(0, QUESTIONS_PER_SESSION);

    // Marcar preguntas como "quemadas" para esta campaña
    const newBurnedIds = selectedSession.map(q => q.id);
    setBurnedQuestionIds(prev => [...prev, ...newBurnedIds]);

    // Mezclar opciones de cada pregunta
    const finalQuestions = selectedSession.map(q => ({
      ...q,
      options: [...q.options].sort(() => 0.5 - Math.random())
    }));

    // Resetear estado del juego
    setActiveQuestions(finalQuestions);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setTotalScore(0);
    setMaxPossibleScore(finalQuestions.length * 5);
    setGameState('test');
  }, [burnedQuestionIds, setBurnedQuestionIds]);

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
    setTotalScore(prev => prev + selectedOption?.score);

    // Avanzar o finalizar
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishAssessment();
    }
  }, [activeQuestions, currentQuestionIndex]);

  // Finalizar assessment (por tiempo o por completar)
  const finishAssessment = useCallback(() => {
    setGameState('review');
  }, []);

  // Reiniciar toda la campaña
  const resetCampaign = useCallback(() => {
    setBurnedQuestionIds([]);
    setGameState('intro');
  }, [setBurnedQuestionIds]);

  // Calcular estadísticas
  const getStats = useCallback(() => {
    const fullPool = getQuestionPool();
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
