import { useGameState } from '../hooks/useGameState';
import { useTimer } from '../hooks/useTimer';
import { IntroScreen } from './screens/IntroScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { CampaignCompleteScreen } from './screens/CampaignCompleteScreen';

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
    TOTAL_TIME_SECONDS
  } = useGameState();

  // Custom hook de timer (solo activo durante el test)
  const { timeLeft, resetTimer, formatTime } = useTimer(
    TOTAL_TIME_SECONDS,
    gameState === 'test',
    finishAssessment
  );

  // Calcular estadísticas actuales
  const stats = getStats();

  // Handler para iniciar assessment
  const handleStart = () => {
    startAssessment();
    resetTimer(TOTAL_TIME_SECONDS);
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
        />
      );

    case 'review':
      return (
        <ReviewScreen
          stats={stats}
          answers={answers}
          activeQuestions={activeQuestions}
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
