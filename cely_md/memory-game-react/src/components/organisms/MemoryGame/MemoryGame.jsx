import React from 'react';
import { InfoGame, Board, Level } from '@components/molecules';

const namespace = 'memory-game';

export const MemoryGame = () => {
  return (
    <main className={namespace}>
      <InfoGame></InfoGame>
      <Board></Board>
      <Level></Level>
    </main>
  );
};
