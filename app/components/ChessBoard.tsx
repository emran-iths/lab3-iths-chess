import React, { ReactNode } from "react";
import ChessSquare, { letters, numbers } from "./ChessSquare";
import initialState from "../InitialState";
import ErrorBoundary from "./ErrorBoundary";

const squares = numbers.reverse().map((i, d) => {
  return letters.map((a, b) => {
    return a + i;
  });
});

const Inner = (props: any) => {
  const sp: { [key: string]: string } = JSON.parse(JSON.stringify(props.state));

  const makeInnerTableBody = (): ReactNode => {
    return (
      <>
        {squares.map((a, i) => {
          return (
            <tr key={i}>
              {a.map((b, l) => {
                return (
                  <ChessSquare
                    piece={sp[b] ? sp[b] : ""}
                    key={i + "," + l}
                    name={b}
                    onClick={() => {
                      props.onClickSquare(b);
                    }}
                  />
                );
              })}
            </tr>
          );
        })}
      </>
    );
  };

  const tableBody = (
    <table cellSpacing="0">
      <tbody>{makeInnerTableBody()}</tbody>
    </table>
  );

  return (
    <div>
      <h2> {props.gameId} </h2>
      {tableBody}
    </div>
  );
};

const ChessBoardError = (props: any) => {
  return (
    <div>
      <b>Error:</b> {JSON.stringify(props)}
    </div>
  );
};

const ChessBoard = (props: any) => {
  return (
    <ErrorBoundary errorUI={<ChessBoardError {...props} />}>
      <Inner {...props} />
    </ErrorBoundary>
  );
};

export default ChessBoard;
