/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ChessBoard from "../app/components/ChessBoard";

describe("ChessBoard", () => {
  it("render a chess board without getting any errors", () => {
    render(<ChessBoard onClickSquare={() => {}} state={{}} />);
  });
});
