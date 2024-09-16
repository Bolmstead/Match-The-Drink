import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Button from "@mui/material/Button";

const GameOverPopup = () => {
  const { gameOver, newGame } = useContext(AppContext);

  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  if (!isVisible) return null;

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        opacity: opacity,
        fontFamily: "Roboto",
      }}
    >
      <div
        style={{
          fontSize: "7rem",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {gameOver.won ? "You Won! 🎉" : "You Lost! 👎"}
        <br />
        <Button
          variant="contained"
          onClick={refreshPage}
          size="large"
          style={{ backgroundColor: "white", color: "black" }}
        >
          Retry?
        </Button>
      </div>
    </div>
  );
};

export default GameOverPopup;
