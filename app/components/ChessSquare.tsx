import ChessPiece from "./ChessPiece";
import React, { Component } from "react";

let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

class ChessSquare extends Component<{
  name: string;
  piece: string;
  onClick: any;
}> {
  isLight() {
    return (
      ((letters.indexOf(this.props.name[0]) % 2) +
        (numbers.indexOf(this.props.name[1]) % 2)) %
        2 ==
      0
    );
  }

  render() {
    return (
      <td
        className={this.isLight() ? "light" : "dark"}
        onClick={() => this.props.onClick()}
      >
        <ChessPiece type={this.props.piece} />
      </td>
    );
  }
}

export default ChessSquare;
export { letters, numbers };
