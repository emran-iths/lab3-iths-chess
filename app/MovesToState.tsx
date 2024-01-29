import initial_state from "./InitialState";

const movesToState = (moves: string) => {
  //make a copy since we do not want to modify the original state
  let state = JSON.parse(JSON.stringify(initial_state));

  moves.split(" ").forEach((a, b) => {
    const from = a.substring(0, 2);
    const to = a.substring(2, 4);

    const pieceType = state[from];
    delete state[from];
    state[to] = pieceType;
  });

  return state;
};

export default movesToState;
