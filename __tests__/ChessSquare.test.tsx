/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ChessSquare from "../app/components/ChessSquare";

describe("ChessSquare", () => {
  it("render a chess square without getting any errors", () => {
    //NOTE: we add table, tbody and tr to prevent warnings regarding render a td (chess square is a td) outside a table context

    render(
      <table>
        <tbody>
          <tr>
            <ChessSquare name="e4" piece="w-bishop" />
          </tr>
        </tbody>
      </table>,
    );
  });
});
