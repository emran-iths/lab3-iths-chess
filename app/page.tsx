"use client";

import styles from "./page.module.css";
import gameStream from "./GameStream.tsx";
import { useState, useEffect } from "react";

let gameId = "r5vTXSNZs73N";

export default function Home() {
  const [log, setLog] = useState([]);
  useEffect(() => {
    gameStream(gameId, (data) => {
      console.log(data);
      setLog(log.concat(data));
    });
  }, []);

  return (
    <ul>
      {log.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}
