import { useState } from "react";
import "../styles/Scores.css";

export default function Scores({ pokemon, setRandomPokemon }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonShown, setPokemonShown] = useState([]);

  function changeScores(seen) {
    if (seen && !pokemonShown.includes(pokemon.name)) {
      setScore(0);
      setPokemonShown([]);
    } else {
      if (pokemonShown.includes(pokemon.name)) {
        setScore(0);
        setPokemonShown([]);
      } else {
        setScore(score + 1);
        if (score >= bestScore) setBestScore(bestScore + 1);
        setPokemonShown([...pokemonShown, pokemon.name]);
      }
    }
  }

  return (
    <>
      <div className="buttons">
        <button
          onClick={() => {
            setRandomPokemon();
            changeScores(true);
          }}
        >
          ✓
        </button>
        <button
          onClick={() => {
            setRandomPokemon();
            changeScores(false);
          }}
        >
          ✕
        </button>
      </div>
      <div className="score">
        <div>Score: {score}</div>
        <div>Best score: {bestScore}</div>
      </div>
    </>
  );
}
