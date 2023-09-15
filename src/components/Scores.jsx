import { useState } from "react";
import "../styles/Scores.css";

export default function Scores({ setRandomPokemon }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <button onClick={setRandomPokemon}>✓</button>
      <button onClick={setRandomPokemon}>✕</button>
      <div>Score: {score}</div>
      <div>High score: {highScore}</div>
    </>
  );
}
