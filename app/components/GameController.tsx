import gameStream from "../../app/GameStream";
import ChessBoard from "../../app/components/ChessBoard";
import MovesToState from "../../app/MovesToState";
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
  const moveState = useState(""); // <-- the move input
  const [moves, setMoves] = useState(""); // <-- the "moves-string" the describes all the move taken place
  const [move, setMove] = moveState;
  useEffect(() => {
    prepareGame(props.gameId);
  }, [props.gameId]);

  useEffect(() => {
    listenToGame(props.gameId, (data: any) => {
      let jdata = null;
      if (data != "\n") jdata = JSON.parse(data);

      if (jdata && jdata.state && jdata.state.moves)
        setMoves(jdata.state.moves);
      else if (jdata && jdata.moves) setMoves(jdata.moves);

      setLog(log.concat(data));
    });
  }, [log, moves]);

  return (
    <>
      {moves}
      {props.gameId}
      <ChessBoard
        state={MovesToState(moves)}
        onClickSquare={(name : string) => {
          setMove(move + name);
        }}
      />
      <Mover gameId={props.gameId} state={moveState} />

      <ul>
        {log.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </>
  );
};

export default GameController;
