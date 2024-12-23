import { Position, Direction } from '../types/game';

export const GRID_SIZE = 20;
export const GAME_SPEED = 150;

export const INITIAL_STATE = {
  snake: [{ x: 10, y: 10 }],
  food: { x: 15, y: 15 },
  direction: 'RIGHT' as Direction,
  isGameOver: false,
  score: 0,
};

export const getNextPosition = (head: Position, direction: Direction): Position => {
  const newHead = { ...head };

  switch (direction) {
    case 'UP':
      newHead.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'DOWN':
      newHead.y = (head.y + 1) % GRID_SIZE;
      break;
    case 'LEFT':
      newHead.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'RIGHT':
      newHead.x = (head.x + 1) % GRID_SIZE;
      break;
  }

  return newHead;
};

export const generateRandomFood = (): Position => ({
  x: Math.floor(Math.random() * GRID_SIZE),
  y: Math.floor(Math.random() * GRID_SIZE),
});