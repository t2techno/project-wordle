import React from "react";
import styled from "styled-components";
import { KEYBOARD_ROWS } from "../../data";

function Keyboard({ keyStatus }) {
  return (
    <Wrapper>
      {KEYBOARD_ROWS.map((KEY_ROW, idx) => (
        <Row key={idx}>
          {KEY_ROW.map((letter) => (
            <Key
              key={letter.charCodeAt(0)}
              className={keyStatus[letter.charCodeAt(0)]}
            >
              {letter}
            </Key>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Key = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-gray-100);
  text-align: center;
  padding-top: 0.5rem;
  height: 3rem;
  width: 2rem;
  border-radius: 4px;
  background: var(--color-gray-700);

  &.correct {
    background: var(--color-success);
    border-color: var(--color-success);
    color: var(--color-gray-900);
  }
  &.incorrect {
    background: var(--color-gray-300);
    border-color: var(--color-gray-300);
    color: var(--color-gray-900);
  }
  &.misplaced {
    background: var(--color-warning);
    border-color: var(--color-warning);
    color: var(--color-gray-900);
  }
`;

export default Keyboard;
