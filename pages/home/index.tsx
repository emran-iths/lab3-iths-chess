import Link from "next/link";
import ChessBoard from "../../app/components/ChessBoard";
import StartButton from "../../app/components/StartButton";
import { templateNumbers } from "../../pages/templates/[slug]";

export default function Home() {
  return (
    <>
      <h2>Static pages</h2>
      <p>
        Links below goes to some static pages that show some chess games. You
        can not interact with these. If you want to play check next chapter
        below.
      </p>
      <ul>
        {templateNumbers.map((templateId) => {
          return (
            <li key={templateId}>
              <Link href={`/templates/${templateId}`}>
                Goto template {templateId}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <div>
        <h2>Play chess</h2>
        <p>
          Press the start button to start a new game agaist a computer player.
          You are always white (and you play agaist a level 7 lichess bot (good
          luck!)). Press on the square you want to move from and the square you
          want to move to and press "send". Note the input field is your move so
          manually enter and clear it when you need to. Do not expect this
          lichess client to be any good but it works if you know what you are
          doing. The client does not implement upgrade your pawns so for that
          you need to enter that move manually, ex: a7a8q (q = queen) it should
          work but the piece will still look like a pawn.
        </p>
        <StartButton />
      </div>
    </>
  );
}
