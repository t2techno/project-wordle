import React from "react";

function Banner({ status, answer, numGuesses }) {
  if (status === "in-progress") {
    return;
  }

  const FinalBanner =
    status === "success" ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numGuesses} {numGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    ) : (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );

  return FinalBanner;
}

export default Banner;
