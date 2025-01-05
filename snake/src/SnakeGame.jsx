import React, { useState, useEffect } from 'react';
import Board from './Board';
import './App.css';

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      let newSnake = [...snake];
      let head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        default:
          break;
      }

      newSnake.unshift(head);
      newSnake.pop();
      setSnake(newSnake);
    };

    const intervalId = setInterval(moveSnake, 200);

    return () => clearInterval(intervalId);
  }, [snake, direction]);

  return <Board snake={snake} food={food} />;
};

export default SnakeGame;
