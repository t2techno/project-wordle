import React from "react";
import styled from "styled-components";

function Input({ handleSubmit }) {
  const [value, setValue] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (value.length != 5) {
      window.alert("You can only guess 5 letter words");
      return;
    }

    handleSubmit(value);
    setValue("");
  };
  return (
    <GuessInputWrapper onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        minLength={5}
        maxLength={5}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
      />
    </GuessInputWrapper>
  );
}

const GuessInputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 6.75rem;

  & label {
    font-size: 1.25rem;
  }

  & input {
    display: block;
    width: 100%;
    font-size: 2rem;
    border: 2px solid var(--color-gray-300);
    border-radius: 4px;
    padding: 8px 16px;
    outline-offset: 4px;
  }
`;

export default Input;
