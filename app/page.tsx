"use client";

import styles from "./page.module.css";
import gameStream from "./GameStream.tsx";
import { useState, useEffect } from "react";

let gameId = "r5vTXSNZs73N";

let preparedGames = new Set();
let gameListeners = new Set();

const prepareGame = (gameId) => {
  if (preparedGames.has(gameId)) return;
  preparedGames.add(gameId);

  console.log(`connects to game ${gameId}`);
  gameStream(gameId, (data) => {
    gameListeners.forEach((f) => {
      f(data);
    });

    gameListeners.clear();
  });
};

const listenToGame = (callback) => {
  gameListeners.add(callback);
};

export default function Home() {
  const [log, setLog] = useState([]);
  useEffect(() => {
    prepareGame(gameId);
  }, []);

  useEffect(() => {
    listenToGame((data) => {
      console.log(data);
      setLog(log.concat(data));
    });
  }, [log]);

  return (
    <ul>
      {log.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
  );
}
