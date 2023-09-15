import "../styles/Pokemon.css";

export default function Pokemon({ pokemon }) {
  return (
    <>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.url} alt={pokemon.name} />
    </>
  );
}
