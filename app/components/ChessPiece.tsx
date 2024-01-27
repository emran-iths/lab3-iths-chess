import Image from "next/image";
import React, { Component } from "react";

let img_src_dict: { [id: string]: string } = {
  "w-knight": "Chess_nlt45",
  "b-knight": "Chess_ndt45",
  "w-pawn": "Chess_plt45",
  "b-pawn": "Chess_pdt45",
  "w-queen": "Chess_qlt45",
  "b-queen": "Chess_qdt45",
  "w-king": "Chess_klt45",
  "b-king": "Chess_kdt45",
  "w-bishop": "Chess_blt45",
  "b-bishop": "Chess_bdt45",
  "w-rook": "Chess_rlt45",
  "b-rook": "Chess_rdt45",
};

class ChessPiece extends Component<{ type: string }> {
  render() {
    if (this.props.type === undefined) throw "Missing type";

    let img_src = img_src_dict[this.props.type];
    if (img_src === undefined) img_src = "No_image";

    return (
      <Image src={"/" + img_src + ".svg"} alt="img" width={46} height={46} />
    );
  }
}

export default ChessPiece;
