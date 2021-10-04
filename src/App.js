import React, { useState, useEffect, useRef } from "react";

function App() {
  const time = 10;
  const [input, setInput] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(time);
  const [gameStarted, setGameStarted] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }

  function startGame() {
    setInput("");
    setWordCount(0);
    setTimeRemaining(time);
    setGameStarted(true);
  }

  function endGame() {
    setGameStarted(false);
    let words = input.trim().split(" ").length;
    setWordCount(words);
  }

  useEffect(() => {
    if ((timeRemaining > 0) & gameStarted) {
      setTimeout(() => {
        setTimeRemaining((timeRemaining) => timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, gameStarted]);

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        disabled={!gameStarted}
        placeholder="Start typing..."
        value={input}
        onChange={handleChange}
      />
      <p>Remaining time: {timeRemaining}s</p>
      <p>Word Count: {wordCount}</p>
      <button disabled={gameStarted} onClick={startGame}>
        Start
      </button>
    </div>
  );
}

export default App;
