import React from "react";
import ChessBoard from "../../app/components/ChessBoard";
import movesToState from "../../app/MovesToState";

const gameMoveData = {
  1: "e2e3 c7c5 f2f4 g8f6 f4f5 b8c6 e1e2 d7d5 e2e1 a7a6 d2d4 c5d4 f1d3 e7e5 g1f3 e5e4",
  2: "e2e3 d7d6 f1e2 g8f6 g1f3 e7e5 e1g1 e5e4 f3d4 d6d5 d2d3 c7c5 d3e4 c5d4 e3d4 f6e4 d1d3 f8d6 d3e4 d5e4 h2h4 d8h4",
  3: "e2e3 e7e5 d1e2 d7d5 d2d3 d8d6 c1d2 g8h6 b1c3 c7c6 e1c1 c8e6 f2f4 h6g4 h2h3 d5d4 h3g4 d6e7 c3e4 d4e3 d2e3 e6a2 b2b3 b8a6 c1b2 a2b3 c2b3 e8c8 e4c3 e5f4 e3a7 e7f6",
};

const Post = ({ slug }) => {
  return (
    <div>
      Template: {slug}. (NOTE: You can not play on this one. This is a static
      view. If you want to play navigate back to Home and press the start
      button)
      <ChessBoard
        onClickSquare={() => {}}
        state={movesToState(gameMoveData[slug])}
      />
    </div>
  );
};

export const getStaticPaths = async () => {
  const numbers = [...Array(3).keys()].map((n) => {
    return (n + 1).toString();
  });
  const paths = numbers.map((n) => {
    return { params: { slug: n } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  return {
    props: {
      slug,
    },
  };
};

export default Post;
