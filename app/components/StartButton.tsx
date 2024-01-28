"use client";

import { useState } from "react";

const StartButton = () => {
  const [startedGame, setStartedGame] = useState(null);

  return (
    <>
      <button
        onClick={() => {
          const url = `https://lichess.org/api/challenge/ai`;
          fetch(url, {
            method: "post",
            body: "level=7&color=white",

            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`,
            },
          })
            .then((res) => res.json())
            .then((data) => setStartedGame(data.id));
        }}
      >
        start
      </button>

      {startedGame && (
        <>TODO: make link (and page) to game using this id {startedGame} as game id ref</>
      )}
    </>
  );
}

export default StartButton
