import React, { useContext } from "react";
import { AppContext } from "../App";
import Letter from "./Letter";

function Board() {
  const { numDrinksCorrectArray } = useContext(AppContext);
  console.log("🚀 ~ Board ~ numDrinksCorrectArray:", numDrinksCorrectArray);

  return (
    <div className="board">
      {" "}
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[0]}</div>

        <Letter letterPos={0} attemptVal={0} />
        <Letter letterPos={1} attemptVal={0} />
        <Letter letterPos={2} attemptVal={0} />
        <Letter letterPos={3} attemptVal={0} />
        <Letter letterPos={4} attemptVal={0} />
        <div className="number-right">{numDrinksCorrectArray[0]}</div>
      </div>
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[1]}</div>

        <Letter letterPos={0} attemptVal={1} />
        <Letter letterPos={1} attemptVal={1} />
        <Letter letterPos={2} attemptVal={1} />
        <Letter letterPos={3} attemptVal={1} />
        <Letter letterPos={4} attemptVal={1} />
        <div className="number-right">{numDrinksCorrectArray[1]}</div>
      </div>
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[2]}</div>

        <Letter letterPos={0} attemptVal={2} />
        <Letter letterPos={1} attemptVal={2} />
        <Letter letterPos={2} attemptVal={2} />
        <Letter letterPos={3} attemptVal={2} />
        <Letter letterPos={4} attemptVal={2} />
        <div className="number-right">{numDrinksCorrectArray[2]}</div>
      </div>
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[3]}</div>

        <Letter letterPos={0} attemptVal={3} />
        <Letter letterPos={1} attemptVal={3} />
        <Letter letterPos={2} attemptVal={3} />
        <Letter letterPos={3} attemptVal={3} />
        <Letter letterPos={4} attemptVal={3} />
        <div className="number-right">{numDrinksCorrectArray[3]}</div>
      </div>
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[4]}</div>

        <Letter letterPos={0} attemptVal={4} />
        <Letter letterPos={1} attemptVal={4} />
        <Letter letterPos={2} attemptVal={4} />
        <Letter letterPos={3} attemptVal={4} />
        <Letter letterPos={4} attemptVal={4} />
        <div className="number-right">{numDrinksCorrectArray[4]}</div>
      </div>
      <div className="row">
        <div className="number-right">{numDrinksCorrectArray[5]}</div>

        <Letter letterPos={0} attemptVal={5} />
        <Letter letterPos={1} attemptVal={5} />
        <Letter letterPos={2} attemptVal={5} />
        <Letter letterPos={3} attemptVal={5} />
        <Letter letterPos={4} attemptVal={5} />
        <div className="number-right">{numDrinksCorrectArray[5]}</div>
      </div>
    </div>
  );
}

export default Board;
