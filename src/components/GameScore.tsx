import React from 'react';
import { motion } from 'framer-motion';

interface GameScoreProps {
  score: number;
}

export const GameScore: React.FC<GameScoreProps> = ({ score }) => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="text-3xl font-bold text-white">
        Score: 
        <motion.span
          key={score}
          initial={{ scale: 1.5, color: '#22c55e' }}
          animate={{ scale: 1, color: '#ffffff' }}
          className="ml-2"
        >
          {score}
        </motion.span>
      </div>
    </motion.div>
  );
};