import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const GameControls: React.FC = () => {
  const controls = [
    { icon: ArrowUp, key: 'W', direction: 'up' },
    { icon: ArrowDown, key: 'S', direction: 'down' },
    { icon: ArrowLeft, key: 'A', direction: 'left' },
    { icon: ArrowRight, key: 'D', direction: 'right' }
  ];

  return (
    <motion.div 
      className="mt-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-gray-400 mb-4">Controls:</p>
      <div className="flex items-center justify-center gap-4">
        {controls.map(({ icon: Icon, key, direction }) => (
          <motion.div
            key={direction}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="bg-gray-700 p-2 rounded-lg">
              <Icon className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-sm text-gray-400 mt-1">{key}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};