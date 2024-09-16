import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
function Keyboard() {
  const iconArray = [
    <CoffeeIcon key="coffee" sx={{ color: "#967259" }} />,
    <EmojiFoodBeverageIcon key="tea" sx={{ color: "green" }} />,
    <WineBarIcon key="wine" sx={{ color: "#EE4B2B" }} />,
    <SportsBarIcon key="beer" sx={{ color: "#FBB117" }} />,
    <LocalDrinkIcon key="water" sx={{ color: "#57b9ff" }} />,
  ];

  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        iconArray.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {iconArray.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>

      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />

        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
