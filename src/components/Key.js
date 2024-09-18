import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const [guessed, setGuessed] = useState(false);
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal.key === "submit") {
      onEnter();
    } else if (keyVal.key === "backspace") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={bigKey ? "big" : guessed && "disabled"}
      onClick={selectLetter}
      disabled={guessed}
      style={{ pointerEvents: guessed ? "none" : "auto" }}
    >
      {keyVal}
    </div>
  );
}

export default Key;
