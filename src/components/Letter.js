import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div className="letter" id={"tile"}>
      {letter}
    </div>
  );
}

export default Letter;
