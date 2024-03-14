import React from "react";
import styled from "styled-components";

function Banner({ status, answer, numGuesses }) {
  if (status === "in-progress") {
    return;
  }

  const FinalBanner =
    status === "success" ? (
      <HappyBanner>
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numGuesses} {numGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </HappyBanner>
    ) : (
      <SadBanner>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </SadBanner>
    );

  return FinalBanner;
}

const BaseBanner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 32px;
  text-align: center;
  animation: slideUp 750ms cubic-bezier(0, 0.72, 0.24, 1.02);
  border-radius: 4px 4px 0px 0px;
  will-change: transform;
  color: white;

  /*
  Keyframe animations
*/
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;

const HappyBanner = styled(BaseBanner)`
  background: var(--color-success);
`;

const SadBanner = styled(BaseBanner)`
  background: var(--color-error);
`;

export default Banner;
