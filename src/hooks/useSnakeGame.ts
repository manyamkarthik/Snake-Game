import { useState, useCallback, useEffect } from 'react';
import { useGameLoop } from './useGameLoop';
import { Direction, Position, GameState } from '../types/game';
import { INITIAL_STATE, GAME_SPEED, GRID_SIZE, getNextPosition, generateRandomFood } from '../utils/gameUtils';

export const useSnakeGame = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const moveSnake = useCallback(() => {
    if (gameState.isGameOver) return;

    setGameState(currentState => {
      const newHead = getNextPosition(currentState.snake[0], currentState.direction);

      // Check if snake hits itself
      if (currentState.snake.some(segment => 
        segment.x === newHead.x && segment.y === newHead.y)) {
        return { ...currentState, isGameOver: true };
      }

      const newSnake = [newHead, ...currentState.snake];

      // Check if snake eats food
      if (newHead.x === currentState.food.x && newHead.y === currentState.food.y) {
        return {
          ...currentState,
          snake: newSnake,
          food: generateRandomFood(),
          score: currentState.score + 1
        };
      }

      newSnake.pop();
      return { ...currentState, snake: newSnake };
    });
  }, [gameState.isGameOver]);

  useGameLoop(moveSnake, GAME_SPEED);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameState.isGameOver) return;

    const key = event.key.toLowerCase();
    setGameState(currentState => {
      const newDirection: Direction = 
        (key === 'arrowup' || key === 'w') && currentState.direction !== 'DOWN' ? 'UP' :
        (key === 'arrowdown' || key === 's') && currentState.direction !== 'UP' ? 'DOWN' :
        (key === 'arrowleft' || key === 'a') && currentState.direction !== 'RIGHT' ? 'LEFT' :
        (key === 'arrowright' || key === 'd') && currentState.direction !== 'LEFT' ? 'RIGHT' :
        currentState.direction;

      return { ...currentState, direction: newDirection };
    });
  }, [gameState.isGameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const resetGame = () => setGameState(INITIAL_STATE);

  return {
    snake: gameState.snake,
    food: gameState.food,
    isGameOver: gameState.isGameOver,
    score: gameState.score,
    resetGame,
    GRID_SIZE
  };
};