import "../styles/Pokemon.css";

export default function Pokemon({ pokemon }) {
  return (
    <>
      <img src={pokemon.url} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </>
  );
}
