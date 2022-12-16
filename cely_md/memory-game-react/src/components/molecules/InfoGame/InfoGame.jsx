import React from 'react';
import { Time, Moves } from '@components/atoms';

const namespace = 'info-game';

export const InfoGame = () => {
  return (
    <section className={namespace}>
      <Time></Time>
      <Moves> </Moves>
    </section>
  );
};
