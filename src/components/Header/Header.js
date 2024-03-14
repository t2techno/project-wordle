import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Title>Word Game</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  height: var(--header-height);
  border-bottom: 1px solid var(--color-gray-700);
  color: var(--color-gray-300);

  &.side {
    width: var(--header-height);
    display: grid;
    place-content: center;
  }
`;

const Title = styled.h1`
  flex: 1;
  font-size: 2rem;
  line-height: var(--header-height);
  text-align: center;
  @media (max-width: 25rem) {
    font-size: 1.25rem;
  }
`;

export default Header;
