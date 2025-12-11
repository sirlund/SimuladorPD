import { useGameState } from '../hooks/useGameState';
import { useTimer } from '../hooks/useTimer';
import { useSessionAnalysis } from '../hooks/useSessionAnalysis';
import { IntroScreen } from './screens/IntroScreen';
import { QuestionScreen } from './screens/QuestionScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { LearningScreenV2 } from './screens/LearningScreenV2';
import { CampaignCompleteScreen } from './screens/CampaignCompleteScreen';
import { RoundTransitionScreen } from './screens/RoundTransitionScreen';

/**
 * Componente principal del Assessment
 * Orquesta toda la lógica del juego usando hooks personalizados
 */
const PDAssessment = () => {
  // Custom hook de gestión de estado del juego
  const {
    gameState,
    activeQuestions,
    currentQuestionIndex,
    answers,
    startAssessment,
    handleAnswer,
    handleRoundTimeout,
    resetCampaign,
    goToLearning,
    backToReview,
    getStats,
    round,
    nextRound,
    ROUND_TIME_SECONDS,
    allPlayedQuestions
  } = useGameState();

  // Análisis de sesión para el plan de aprendizaje
  const sessionAnalysis = useSessionAnalysis(answers, allPlayedQuestions);

  // Custom hook de timer (solo activo durante el test)
  // Cuando el timer llega a 0, handleRoundTimeout verifica si hay más rondas
  const { timeLeft, resetTimer, formatTime } = useTimer(
    ROUND_TIME_SECONDS,
    gameState === 'test',
    handleRoundTimeout
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
          onViewLearning={goToLearning}
        />
      );

    case 'learning':
      return (
        <LearningScreenV2
          analysis={sessionAnalysis}
          onBack={backToReview}
        />
      );

    case 'campaign_complete':
      return (
        <CampaignCompleteScreen
          stats={stats}
          onReset={resetCampaign}
        />
      );

    default:
      return null;
  }
};

export default PDAssessment;
