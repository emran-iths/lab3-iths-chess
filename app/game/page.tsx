"use client";

import styles from "./page.module.css";
import gameStream from "../GameStream";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

let preparedGames = new Set();
let gameListeners: { [id: string]: Set<any> } = {};

const prepareGame = (gameId: string) => {
  if (preparedGames.has(gameId)) return;
  preparedGames.add(gameId);
  gameListeners[gameId] = new Set();

  console.log(`connects to game ${gameId}`);
  gameStream(gameId, (data) => {
    gameListeners[gameId].forEach((f: any) => {
      f(data);
    });

    gameListeners[gameId].clear();
  });
};

const listenToGame = (gameId: string, callback: any) => {
  if (!(gameId in gameListeners)) return;
  gameListeners[gameId].add(callback);
};

export default function Home() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("gameId");
  const [log, setLog] = useState([]);
  useEffect(() => {
    prepareGame(gameId);
  }, []);

  useEffect(() => {
    listenToGame(gameId, (data: any) => {
      console.log(data);
      setLog(log.concat(data));
    });
  }, [log]);

  const [move, setMove] = useState("");

  return (
    <>
      <ul>
        {log.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
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
        }}
      >
        send
      </button>

      <button
        onClick={() => {
          console.log("click");
          const url = `https://lichess.org/api/challenge/ai`;
          fetch(url, {
            method: "post",
            body: "level=7&color=white",

            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`,
            },
          });
        }}
      >
        start
      </button>
    </>
  );
}
