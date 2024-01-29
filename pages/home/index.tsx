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
        <StartButton />
      </div>
    </>
  );
}
