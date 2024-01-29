import initial_state from "./InitialState";

const movesToState = (moves: string) => {
  //make a copy since we do not want to modify the original state
  let state = JSON.parse(JSON.stringify(initial_state));

  moves.split(" ").forEach((a, b) => {
    const from = a.substring(0, 2);
    const to = a.substring(2, 4);

    const pieceType = state[from];

    //check for castling, if king and a certain type of move we know it is castling.
    if (
      pieceType &&
      pieceType.endsWith("-king") &&
      (a == "e1g1" || a == "e1c1" || a == "e8g8" || a == "e8c8")
    ) {
      // NOTE: I am aware of such things as for-loops but is is late and I want to submit this project now...
      if (a == "e8c8") {
        delete state["a8"];
        state["d8"] = "b-rook";
      } else if (a == "e8g8") {
        delete state["h8"];
        state["f8"] = "b-rook";
      } else if (a == "e1c1") {
        delete state["a1"];
        state["d1"] = "w-rook";
      } else if (a == "e1g1") {
        delete state["h1"];
        state["f1"] = "w-rook";
      }
    }

    delete state[from];
    state[to] = pieceType;
  });

  return state;
};

export default movesToState;
