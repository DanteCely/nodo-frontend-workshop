import { useState } from 'react';
import { HeaderGame, MemoryGame, FooterGame } from '@components/organisms';

function App() {
  return (
    <div className='App'>
      <HeaderGame />
      <MemoryGame />
      <FooterGame />
    </div>
  );
}

export default App;
