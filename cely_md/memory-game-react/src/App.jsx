import { useState } from 'react';
import { HeaderGame, MemoryGame, FooterGame } from '@components/organisms';

function App() {
  return (
    <div id='App' className='bg--green-400'>
      <HeaderGame />
      <MemoryGame />
      <FooterGame />
    </div>
  );
}

export default App;
