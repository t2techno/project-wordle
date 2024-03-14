import React from "react";
import styled from "styled-components";
import { range } from "../../utils";

function Guess({ guess }) {
  const wordLength = 5;
  if (guess === "") {
    return (
      <Wrapper>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </Wrapper>
    );
  }

  console.log(guess);
  return (
    <Wrapper>
      {range(0, wordLength).map((i) => (
        <Cell key={i} className={`${guess.status[i]}`}>
          {guess && guess.guess.charAt(i)}
        </Cell>
      ))}
    </Wrapper>
  );
}

const Cell = styled.span`
  position: relative;
  width: 20%;
  display: grid;
  place-content: center;
  aspect-ratio: 1 / 1;
  border: 2px solid var(--color-gray-700);
  border-radius: var(--radius);
  font-size: 2rem;
  color: white;

  &.correct {
    background: var(--color-success);
    border-color: var(--color-success);
  }
  &.incorrect {
    background: var(--color-gray-300);
    border-color: var(--color-gray-300);
  }
  &.misplaced {
    background: var(--color-warning);
    border-color: var(--color-warning);
  }
`;
const Wrapper = styled.p`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;

  // Round the corners for the 4 cells at the very corners of
  // the game board
  &:first-of-type ${Cell}:first-of-type {
    --radius: 4px 0px 0px 0px;
  }
  &:first-of-type ${Cell}:last-of-type {
    --radius: 0px 4px 0px 0px;
  }
  &:last-of-type ${Cell}:last-of-type {
    --radius: 0px 0px 4px 0px;
  }
  &:last-of-type ${Cell}:first-of-type {
    --radius: 0px 0px 0px 4px;
  }
`;

export default Guess;
