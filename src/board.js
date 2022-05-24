import "./index.css";
import React, { useState } from "react";

// const BOARD_SIZE = 4;

class Board extends React.Component {
  // const [board, setBoard] = useState(
  //   new Array(4).fill(0).map((row) => new Array(4).fill(0))
  // );
  constructor(props) {
    super(props);
    this.state :{
      nodes: new Array(4).fill(0).map((row) => new Array(4).fill(0))
    }
  }
  renderCell() {
    return <div className="cell"></div>;
  }

  render() {
    return (
      // <div className="board">
      //   {board.map((row, rowIndex) => (
      //     <div key={rowIndex} className="row">
      //       {row.map((cell, cellIndex) => (
      //         <div key={cellIndex} className="cell"></div>
      //       ))}
      //     </div>
      //   ))}
      // </div>
      <div className="board">
        <renderCell />
      </div>
    );
  }
}

export default Board;
