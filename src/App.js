import React from 'react';
import './App.css';
import SnakeGame from './components/SnakeGame/SnakeGame.js';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <h1>Snake Game</h1>
      <SnakeGame />
    </div>
  );
}

export default App;