"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          console.log("click");
          const url = `https://lichess.org/api/challenge/ai`;
          fetch(url, {
            method: "post",
            body: "level=7&color=white",

            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_LICHESS_TOKEN}`,
            },
          });
        }}
      >
        start
      </button>
    </>
  );
}
