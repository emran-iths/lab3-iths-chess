import gameStream from "../../app/GameStream";
import Mover from "./Mover";
import { useState, useEffect } from "react";

let preparedGames = new Set();
let gameListeners: { [id: string]: Set<any> } = {};

const prepareGame = (gameId: any) => {
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

const listenToGame = (gameId: any, callback: any) => {
  if (!(gameId in gameListeners)) return;
  gameListeners[gameId].add(callback);
};

const GameController = (props: any) => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    prepareGame(props.gameId);
  }, [props.gameId]);

  useEffect(() => {
    listenToGame(props.gameId, (data: any) => {
      setLog(log.concat(data));
    });
  }, [log]);

  return (
    <>
      {props.gameId}
      <Mover gameId={props.gameId} />

      <ul>
        {log.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </>
  );
};

export default GameController;
