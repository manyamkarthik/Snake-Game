export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  snake: Position[];
  food: Position;
  direction: Direction;
  isGameOver: boolean;
  score: number;
}

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';