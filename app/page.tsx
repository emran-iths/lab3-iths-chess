"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
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
        <Link href={`/game?gameId=${startedGame}`}>Goto game</Link>
      )}
    </>
  );
}
