import React from "react";
import Square from "./Square";
import "../App.css";

const Board = ({ squares, onClick }) => {
  //hi
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
