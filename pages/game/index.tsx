import { useSearchParams } from "next/navigation";
import Mover from "../../app/components/Mover";
export default function Game() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");

  return (
    <>
      Game-id: {gameId}
      <br />
      <Mover gameId={gameId} />
    </>
  );
}
