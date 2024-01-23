"use client";

import styles from "./page.module.css";
import gameStream from "./GameStream";
import { useState, useEffect } from "react";

let gameId = "r5vTXSNZs73N";

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

const listenToGame = (callback: any) => {
  if (!(gameId in gameListeners)) return;
  gameListeners[gameId].add(callback);
};

export default function Home() {
  const [log, setLog] = useState([]);
  useEffect(() => {
    prepareGame(gameId);
  }, []);

  useEffect(() => {
    listenToGame((data: any) => {
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
