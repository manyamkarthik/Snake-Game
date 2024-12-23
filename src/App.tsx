import React from 'react';
import { useSnakeGame } from './hooks/useSnakeGame';
import { GameBoard } from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { GameScore } from './components/GameScore';

export function App() {
  const { snake, food, isGameOver, score, resetGame, GRID_SIZE } = useSnakeGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center">
      <div className="text-center flex-grow">
        <h1 className="text-6xl font-bold mb-8 text-green-400 animate-pulse">Snake Game</h1>
        
        <GameScore score={score} />
        <GameBoard
          snake={snake}
          food={food}
          gridSize={GRID_SIZE}
          isGameOver={isGameOver}
        />

        {isGameOver && (
          <div className="mt-8 animate-fade-in">
            <p className="text-red-500 text-2xl mb-4 animate-bounce">Game Over!</p>
            <button
              onClick={resetGame}
              className="px-6 py-3 bg-green-500 text-white rounded-full 
                       hover:bg-green-600 transition-all duration-300 
                       transform hover:scale-105 focus:outline-none 
                       focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              Play Again
            </button>
          </div>
        )}

        <GameControls />
      </div>

      <footer className="mt-8 text-gray-400 text-sm">
        Made with ❤️ by Karthik. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
