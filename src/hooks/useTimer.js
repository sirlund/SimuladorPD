import { useState, useEffect, useCallback } from 'react';

/**
 * Hook personalizado para manejar timer con cuenta regresiva
 * @param {number} initialTime - Tiempo inicial en segundos
 * @param {boolean} isActive - Si el timer está activo
 * @param {Function} onTimeUp - Callback cuando el tiempo se acaba
 * @returns {Object} - { timeLeft, resetTimer, formatTime }
 */
export const useTimer = (initialTime, isActive, onTimeUp) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timerId = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft, isActive, onTimeUp]);

  const resetTimer = useCallback((newTime = initialTime) => {
    setTimeLeft(newTime);
  }, [initialTime]);

  const formatTime = useCallback(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeft]);

  return { timeLeft, resetTimer, formatTime };
};
