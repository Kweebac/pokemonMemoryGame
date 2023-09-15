import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [pokemon, setPokemon] = useState({ name: undefined, url: undefined });

  async function setRandomPokemon() {
    try {
      let pokemon = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151)
      );
      pokemon = await pokemon.json();

      setPokemon({
        name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
        url: pokemon.sprites.front_default,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setRandomPokemon();
  }, []);

  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.url} alt={pokemon.name} />
      <button onClick={setRandomPokemon}>✓</button>
      <button onClick={setRandomPokemon}>✕</button>
    </>
  );
}
