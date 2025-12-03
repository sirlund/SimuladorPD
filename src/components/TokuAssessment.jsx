import { useGameState } from '../hooks/useGameState';
import { useTimer } from '../hooks/useTimer';
import { IntroScreen } from './screens/IntroScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { CampaignCompleteScreen } from './screens/CampaignCompleteScreen';
import { RoundTransitionScreen } from './screens/RoundTransitionScreen';

/**
 * Componente principal del Assessment
 * Orquesta toda la lógica del juego usando hooks personalizados
 */
const TokuAssessment = () => {
  // Custom hook de gestión de estado del juego
  const {
    gameState,
    activeQuestions,
    currentQuestionIndex,
    answers,
    startAssessment,
    handleAnswer,
    finishAssessment,
    resetCampaign,
    getStats,
    round,
    nextRound,
    ROUND_TIME_SECONDS,
    allPlayedQuestions
  } = useGameState();

  // Custom hook de timer (solo activo durante el test)
  const { timeLeft, resetTimer, formatTime } = useTimer(
    ROUND_TIME_SECONDS,
    gameState === 'test',
    finishAssessment // Si se acaba el tiempo, ¿termina el assessment o la ronda?
    // TODO: Si se acaba el tiempo de la ronda, debería pasar a la siguiente ronda o terminar si es la última.
    // Por ahora dejémoslo en finishAssessment, pero idealmente debería ser handleRoundTimeout
  );

  // Calcular estadísticas actuales
  const stats = getStats();

  // Handler para iniciar assessment
  const handleStart = () => {
    startAssessment();
    resetTimer(ROUND_TIME_SECONDS);
  };

  // Handler para siguiente ronda
  const handleNextRound = () => {
    nextRound();
    resetTimer(ROUND_TIME_SECONDS);
  };

  // Renderizar la pantalla correspondiente según el estado
  switch (gameState) {
    case 'intro':
      return (
        <IntroScreen
          stats={stats}
          onStart={handleStart}
          onReset={resetCampaign}
        />
      );

    case 'test':
      const currentQuestion = activeQuestions[currentQuestionIndex];
      return (
        <QuestionScreen
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={activeQuestions.length}
          timeLeft={timeLeft}
          formatTime={formatTime}
          onAnswer={handleAnswer}
          round={round}
          totalRounds={3}
        />
      );

    case 'round_transition':
      return (
        <RoundTransitionScreen
          round={round}
          totalRounds={3}
          onNextRound={handleNextRound}
        />
      );

    case 'review':
      return (
        <ReviewScreen
          stats={stats}
          answers={answers}
          activeQuestions={allPlayedQuestions}
          onContinue={handleStart}
        />
      );

    case 'campaign_complete':
      return (
        <CampaignCompleteScreen
          onReset={resetCampaign}
        />
      );

    default:
      return null;
  }
};

export default TokuAssessment;
