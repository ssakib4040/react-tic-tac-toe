import React from "react";
// import { defaultProps } from "default-props";

import Square from "./Square";

class Board extends React.Component {
  static defaultProps = {
    isActiveData: [],
  };

  renderSquare(i) {
    const isActiveData =
      this.props.isActive &&
      this.props.isActive.some((item) => {
        if (item == i) return true;
      });

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        isActive={isActiveData}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Board.

export default Board;
