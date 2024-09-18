import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import BackspaceIcon from "@mui/icons-material/Backspace";
import Button from "@mui/material/Button";

function Keyboard() {
  const {
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);
  const iconArray = [
    <CoffeeIcon fontSize="large" key="coffee" sx={{ color: "#967259" }} />,
    <EmojiFoodBeverageIcon
      fontSize="large"
      key="tea"
      sx={{ color: "green" }}
    />,
    <WineBarIcon fontSize="large" key="wine" sx={{ color: "#EE4B2B" }} />,
    <SportsBarIcon fontSize="large" key="beer" sx={{ color: "#FBB117" }} />,
    <LocalDrinkIcon fontSize="large" key="water" sx={{ color: "#57b9ff" }} />,
  ];

  const backspaceKey = (
    <BackspaceIcon
      fontSize="large"
      key="backspace"
      sx={{ color: currAttempt.letter === 0 ? "#3b3b3b" : "white" }}
    />
  );

  const submitKey = (
    <Button
      key="submit"
      variant="contained"
      sx={{
        color: "black",
        backgroundColor: currAttempt.letter > 4 ? "#4BB543" : "#3b3b3b",
        fontFamily: "Poppins",
      }}
    >
      Submit
    </Button>
  );

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
          return <Key keyVal={key} disabled={true} />;
        })}
      </div>

      <div className="line3">
        <Key keyVal={backspaceKey} bigKey />

        <Key keyVal={submitKey} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
