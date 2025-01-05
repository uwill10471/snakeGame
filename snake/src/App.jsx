import React from 'react';
import SnakeGame from './snakeGame.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const App = () => (
  <ErrorBoundary>
    <SnakeGame />
  </ErrorBoundary>
);

export default App;
