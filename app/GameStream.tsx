import { useCallback } from "react";

function gameStream(gameId: String, callback: (arg0: String) => any) {
  let url = "https://lichess.org/api/bot/game/stream/" + gameId;

  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`,
    },
  })
    .then((response) => {
      const reader = response.body!.getReader();
      reader.read().then(function pump({ done, value }): any {
        if (done) {
          return;
        }
        var string = new TextDecoder().decode(value);
        callback(string);
        return reader.read().then(pump);
      });
    })
    .catch((err) => console.error(err));
}

export default gameStream;
