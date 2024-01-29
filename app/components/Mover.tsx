import { useState, useEffect } from "react";

const Mover = (props: any) => {
  const gameId = props.gameId;

  const [move, setMove] = props.state;

  return (
    <>
      <input
        type="text"
        value={move}
        onChange={(e) => {
          setMove(e.target.value);
        }}
      />

      <button
        onClick={() => {
          const url = `https://lichess.org/api/bot/game/${gameId}/move/${move}`;
          console.log(url);
          fetch(url, {
            method: "post",

            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`,
            },
          });

          setMove("");
        }}
      >
        send
      </button>
    </>
  );
};

export default Mover;
