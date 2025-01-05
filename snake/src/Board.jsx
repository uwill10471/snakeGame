import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Board = ({ snake, food }) => {
  const boardSize = 10;
  let cells = [];

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let isSnake = snake.some(segment => segment.x === j && segment.y === i);
      let isFood = food.x === j && food.y === i;
      cells.push(
        <div className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`} key={`${i}-${j}`}></div>
      );
    }
  }

  return <div className="board">{cells}</div>;
};

Board.propTypes = {
  snake: PropTypes.array.isRequired,
  food: PropTypes.object.isRequired,
};

export default Board;
