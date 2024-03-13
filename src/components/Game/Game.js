import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner";
import Input from "../Input";
import GuessHistory from "../GuessHistory";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  // in-progress, success, failure
  const [gameStatus, setGameStatus] = React.useState("in-progress");

  const handleGuess = (guess) => {
    const status = checkGuess(guess, answer).map(({ _, status }) => status);
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

  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess guess={guessHistory.length > i && guessHistory[i]} key={i} />
      ))}
      <GuessHistory guessHistory={guessHistory} />
      <Input handleSubmit={handleGuess} />
      <Banner
        status={gameStatus}
        answer={answer}
        numGuesses={guessHistory.length}
      />
    </>
  );
}

export default Game;
