import React from "react";
import styled from "styled-components";

function GuessHistory({ guessHistory }) {
  return (
    <GuessResults>
      {guessHistory.map((val) => (
        <Guess key={val.id}>{val.guess}</Guess>
      ))}
    </GuessResults>
  );
}

const GuessResults = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Guess = styled.li`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`;

export default GuessHistory;
