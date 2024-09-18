import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOverPopup from "./components/GameOverPopup";
import PopupNumber from "./components/NumberPopup";
import NavigationBar from "./components/NavigationBar";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [correctDrinkOrder, setCorrectDrinkOrder] = useState("");
  const [numDrinksCorrectArray, setNumDrinksCorrectArray] = useState([]);
  const [alert, setAlert] = useState({ show: false, numRight: 0 });

  const [gameOver, setGameOver] = useState({
    gameOver: false,
    won: false,
  });

  useEffect(() => {
    generateWordSet().then((todaysDrinkOrder) => {
      setCorrectDrinkOrder(todaysDrinkOrder);
    });
  }, []);

  const onEnter = () => {
    let submittedAttempt = board[currAttempt.attempt];
    let numDrinksCorrect = 0;

    if (currAttempt.letter !== 5) return;

    for (let i = 0; i < 5; i++) {
      if (submittedAttempt[i].key === correctDrinkOrder[i].key) {
        numDrinksCorrect++;
        continue;
      }
    }
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    const tempNumDrinksCorrectArray = [...numDrinksCorrectArray];

    setNumDrinksCorrectArray([...tempNumDrinksCorrectArray, numDrinksCorrect]);

    if (numDrinksCorrect === 5) {
      setGameOver({ gameOver: true, won: true });
    } else if (currAttempt.attempt > 4) {
      setGameOver({ gameOver: true, won: false });
    } else {
      setAlert({ show: true, numRight: numDrinksCorrect });
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const newGame = () => {
    setBoard(boardDefault);
    setCurrAttempt({ attempt: 0, letter: 0 });
    setCorrectDrinkOrder("");
    setNumDrinksCorrectArray([]);
    setAlert({ show: false, numRight: 0 });

    setGameOver({
      gameOver: false,
      won: false,
    });
  };

  const onSelectLetter = (key) => {
    setAlert(false);

    let alreadyGuessed = false;

    if (currAttempt.letter > 4) return;
    const newBoard = [...board];

    for (let guessedDrink of newBoard[currAttempt.attempt]) {
      if (guessedDrink.key === key.key) {
        alreadyGuessed = true;
      }
    }
    if (alreadyGuessed) {
      return;
    }
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctDrinkOrder,
          onSelectLetter,
          onDelete,
          onEnter,
          gameOver,
          numDrinksCorrectArray,
          newGame,
        }}
      >
        <div className="game">
          {alert.show && <PopupNumber number={alert.numRight}></PopupNumber>}
          <Board />
          <Keyboard />
          {gameOver.gameOver && <GameOverPopup />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
