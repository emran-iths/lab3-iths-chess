import ChessBoard from "../../app/components/ChessBoard";

export default function Home() {
  return (
    <div>
      <ChessBoard onClickSquare={() => {}} gameId="x" />
    </div>
  );
}
