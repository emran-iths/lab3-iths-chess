"use client";

import { useSearchParams } from "next/navigation";
import GameController from "../../app/components/GameController";

export default function Home() {
  const searchParams = useSearchParams();
  let gameId: any = "";
  if (searchParams) gameId = searchParams.get("id");
  return <GameController gameId={gameId} />;
}
