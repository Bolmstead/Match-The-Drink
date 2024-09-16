import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOverPopup from "./components/GameOverPopup";
import PopupNumber from "./components/NumberPopup";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctDrinkOrder, setCorrectDrinkOrder] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
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

  useEffect(() => {
    console.log("correctDrinkOrder:: ", correctDrinkOrder);
  }, [correctDrinkOrder]);

  useEffect(() => {
    console.log("currAttempt:: ", currAttempt);
  }, [currAttempt]);

  const onEnter = () => {
    let submittedAttempt = board[currAttempt.attempt];
    let numDrinksCorrect = 0;

    console.log("submittedAttempt:: ", submittedAttempt);
    console.log("correctDrinkOrder:: ", correctDrinkOrder);
    if (currAttempt.letter !== 5) return;

    for (let i = 0; i < 5; i++) {
      if (submittedAttempt[i].key === correctDrinkOrder[i].key) {
        console.log("got a drink right!:: ", i);
        numDrinksCorrect++;
        continue;
      } else {
        console.log("not correct answer");
      }
    }
    console.log("numDrinksCorrect:: ", numDrinksCorrect);
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
    setWordSet(new Set());
    setCorrectDrinkOrder("");
    setDisabledLetters([]);
    setNumDrinksCorrectArray([]);
    setAlert({ show: false, numRight: 0 });

    setGameOver({
      gameOver: false,
      won: false,
    });
  };

  const onSelectLetter = (key) => {
    setAlert(false);

    console.log("key:: ", key);

    console.log("currAttempt:: ", currAttempt);
    let alreadyGuessed = false;

    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    console.log(
      "newBoard[currAttempt.attempt]:: ",
      newBoard[currAttempt.attempt]
    );

    for (let guessedDrink of newBoard[currAttempt.attempt]) {
      if (guessedDrink.key === key.key) {
        alreadyGuessed = true;
      }
    }
    if (alreadyGuessed) {
      return;
    }
    console.log("🚀 ~ onSelectLetter ~ newBoard:", newBoard);
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Match The Drink</h1>
      </nav>
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
          setDisabledLetters,
          disabledLetters,
          gameOver,
          numDrinksCorrectArray,
          newGame,
        }}
      >
        <div className="game">
          {alert.show && <PopupNumber number={alert.numRight}></PopupNumber>}
          <Board />
          {gameOver.gameOver ? <GameOverPopup /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
