import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import Input from "../Input";
import Guess from "../Guess/Guess";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.log(answer);
  const [guessHistory, setGuessHistory] = React.useState([]);

  // using the ascii values of letters as indices
  const [keyStatus, setKeyStatus] = React.useState(new Array(127).fill(""));

  // in-progress, success, failure
  const [gameStatus, setGameStatus] = React.useState("in-progress");

  // incorrect < misplaced < correct
  const updateKeyStatus = (results) => {
    const nextKeyStatus = [...keyStatus];
    results.forEach(({ letter, status }) => {
      const currentKeyStatus = nextKeyStatus[letter.charCodeAt(0)];
      if (currentKeyStatus == "" || currentKeyStatus == "incorrect") {
        nextKeyStatus[letter.charCodeAt(0)] = status;
        return;
      }

      if (currentKeyStatus == "misplaced" && status == "correct") {
        nextKeyStatus[letter.charCodeAt(0)] = status;
        return;
      }
    });
    setKeyStatus(nextKeyStatus);
  };

  const handleGuess = (guess) => {
    const guessResult = checkGuess(guess, answer);
    updateKeyStatus(guessResult);

    const status = guessResult.map(({ _, status }) => status);
    const nextGuessHistory = [
      ...guessHistory,
      { id: Math.random(), guess, status },
    ];
    setGuessHistory(nextGuessHistory);

    if (guess === answer) {
      setGameStatus("success");
      return;
    }

    if (nextGuessHistory.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("failure");
    }
  };

  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuessHistory([]);
    setKeyStatus(new Array(127).fill(""));
    setGameStatus("in-progress");
  };

  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess guess={guessHistory.length > i ? guessHistory[i] : ""} key={i} />
      ))}
      <Input handleSubmit={handleGuess} />
      <Keyboard keyStatus={keyStatus} />
      <Banner
        status={gameStatus}
        answer={answer}
        numGuesses={guessHistory.length}
        resetGame={resetGame}
      />
    </>
  );
}

export default Game;
