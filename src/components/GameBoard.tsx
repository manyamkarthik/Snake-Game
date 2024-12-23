import React from 'react';
import { motion } from 'framer-motion';

interface GameBoardProps {
  snake: Array<{ x: number; y: number }>;
  food: { x: number; y: number };
  gridSize: number;
  isGameOver: boolean;
}

export const GameBoard: React.FC<GameBoardProps> = ({ snake, food, gridSize, isGameOver }) => {
  const cells = Array(gridSize).fill(null).map((_, row) => (
    <div key={row} className="flex">
      {Array(gridSize).fill(null).map((_, col) => {
        const isSnake = snake.some(segment => segment.x === col && segment.y === row);
        const isFood = food.x === col && food.y === row;
        const isHead = snake[0].x === col && snake[0].y === row;

        return (
          <motion.div
            key={`${row}-${col}`}
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: isSnake || isFood ? 1 : 0.8,
              backgroundColor: isHead ? '#22c55e' : 
                             isSnake ? '#4ade80' : 
                             isFood ? '#ef4444' : '#111827'
            }}
            transition={{ duration: 0.2 }}
            className={`
              w-6 h-6 m-[1px] rounded-sm
              ${isHead ? 'border-2 border-green-300' : ''}
              ${isSnake && !isHead ? 'border border-green-300' : ''}
              ${isFood ? 'animate-pulse border-2 border-red-300' : ''}
              transition-colors duration-200
            `}
          >
            {isFood && (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full flex items-center justify-center"
              >
                🍎
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  ));

  return (
    <motion.div 
      className="p-4 bg-gray-800 rounded-xl shadow-2xl"
      animate={{ scale: isGameOver ? 0.95 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {cells}
    </motion.div>
  );
};