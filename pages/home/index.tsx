import ChessBoard from "../../app/components/ChessBoard";
import StartButton from "../../app/components/StartButton";

export default function Home() {
  return (
    <div>
      <StartButton />
      <ChessBoard
        onClickSquare={() => {}}
        gameId="x"
        state={{ e4: "b-pawn" }}
      />
    </div>
  );
}
