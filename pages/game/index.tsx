"use client";

import { useSearchParams } from "next/navigation";
import GameController from "../../app/components/GameController";

export default function Home() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get("id");
  return <GameController gameId={gameId} />;
}
