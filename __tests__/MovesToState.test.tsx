import movesToState from "../app/MovesToState";

describe("MovesToState", () => {
  it("if no moves it should be the typical initial state of a classic chess game", () => {
    const state = movesToState("");
    expect(state).toStrictEqual({
      "": undefined,
      a1: "w-rook",
      a2: "w-pawn",
      a7: "b-pawn",
      a8: "b-rook",
      b1: "w-knight",
      b2: "w-pawn",
      b7: "b-pawn",
      b8: "b-knight",
      c1: "w-bishop",
      c2: "w-pawn",
      c7: "b-pawn",
      c8: "b-bishop",
      d1: "w-queen",
      d2: "w-pawn",
      d7: "b-pawn",
      d8: "b-queen",
      e1: "w-king",
      e2: "w-pawn",
      e7: "b-pawn",
      e8: "b-king",
      f1: "w-bishop",
      f2: "w-pawn",
      f7: "b-pawn",
      f8: "b-bishop",
      g1: "w-knight",
      g2: "w-pawn",
      g7: "b-pawn",
      g8: "b-knight",
      h1: "w-rook",
      h2: "w-pawn",
      h7: "b-pawn",
      h8: "b-rook",
    });
  });

  it("when making Bobby Fischer's favorite opening move the state should look like this ", () => {
    const state = movesToState("e2e4");
    expect(state).toStrictEqual({
      a1: "w-rook",
      h1: "w-rook",
      a8: "b-rook",
      h8: "b-rook",
      b1: "w-knight",
      g1: "w-knight",
      b8: "b-knight",
      g8: "b-knight",
      c1: "w-bishop",
      f1: "w-bishop",
      c8: "b-bishop",
      f8: "b-bishop",
      d1: "w-queen",
      d8: "b-queen",
      e1: "w-king",
      e8: "b-king",
      a2: "w-pawn",
      b2: "w-pawn",
      c2: "w-pawn",
      d2: "w-pawn",
      e4: "w-pawn", // <-- king's pawn moved to e4
      f2: "w-pawn",
      g2: "w-pawn",
      h2: "w-pawn",
      a7: "b-pawn",
      b7: "b-pawn",
      c7: "b-pawn",
      d7: "b-pawn",
      e7: "b-pawn",
      f7: "b-pawn",
      g7: "b-pawn",
      h7: "b-pawn",
    });
  });
});
