import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";
import Button from "@mui/material/Button";
import Key from "./Key";

const GameOverPopup = () => {
  const { gameOver, correctDrinkOrder } = useContext(AppContext);

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
        backgroundColor: "rgba(0, 0, 0, 0.8)",
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
          fontSize: "6rem",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {" "}
        <span style={{ marginBottom: "30px" }}>
          {" "}
          {gameOver.won ? "You Won! 🎉" : "You Lost!"}
        </span>
        <span style={{ fontSize: "35px" }}>Correct Order:</span>
        <div className="winning-order">{correctDrinkOrder}</div>
        <Button
          variant="contained"
          onClick={refreshPage}
          size="large"
          style={{
            backgroundColor: "white",
            color: "black",
            marginTop: "30px",
          }}
        >
          Retry?
        </Button>
      </div>
    </div>
  );
};

export default GameOverPopup;
