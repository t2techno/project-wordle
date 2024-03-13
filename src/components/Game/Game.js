import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Input from "../Input";
import GuessHistory from "../GuessHistory";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistory, setGuessHistory] = React.useState([]);

  const handleGuess = (guess) => {
    const status = checkGuess(guess, answer).map(({ _, status }) => status);
    const nextGuessHistory = [
      ...guessHistory,
      { id: Math.random(), guess, status },
    ];
    setGuessHistory(nextGuessHistory);
  };

  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess guess={guessHistory.length > i && guessHistory[i]} key={i} />
      ))}
      <GuessHistory guessHistory={guessHistory} />
      <Input handleSubmit={handleGuess} />
    </>
  );
}

export default Game;
