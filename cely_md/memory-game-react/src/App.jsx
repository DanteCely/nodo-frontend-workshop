import { useState } from 'react';
import { HeaderGame, MemoryGame, FooterGame } from '@components/organisms';

const otroSaludo = 'Hola';

function App() {
  return (
    <div id='App' className='bg--green-400'>
      <HeaderGame saludo={otroSaludo} />
      <MemoryGame />
      <FooterGame />
    </div>
  );
}

export default App;
