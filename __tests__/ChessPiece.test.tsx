/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import ChessPiece from "../app/components/ChessPiece";

describe("ChessPiece", () => {
  it("render a chess piece without getting any errors", () => {
    render(<ChessPiece type="b-queen" />);
  });
});
