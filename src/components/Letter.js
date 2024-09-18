import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board, setDisabledLetters, currAttempt } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  useEffect(() => {
    if (letter !== "") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={"tile"}>
      {letter}
    </div>
  );
}

export default Letter;
