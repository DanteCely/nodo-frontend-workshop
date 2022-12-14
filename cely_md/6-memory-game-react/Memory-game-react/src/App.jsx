import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // init
  useEffect(() => {
    console.log('init', { count });
  }, []);

  // update
  useEffect(() => {
    console.log('update', { count });
  }, [count]);

  // destroy
  useEffect(() => {
    return () => {
      console.log('destroy', { count });
    };
  }, []);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>{name}</h1>
      <div className='card'>
        <button onClick={() => setCount(count + 1)}>Contador es {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
