import "./App.css";
import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";
import Scores from "./components/Scores";

export default function App() {
  const [pokemon, setPokemon] = useState({ name: undefined, url: undefined });
  console.log(pokemon); // logs the randomly selected pokemon

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
      <Pokemon pokemon={pokemon} />
      <Scores pokemon={pokemon} setRandomPokemon={setRandomPokemon} />
    </>
  );
}
