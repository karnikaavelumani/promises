// Improve by abstracting into an async function.
const num = Number(prompt("Enter a number between 1 and 1008"));
const name = await pokedex(num);
console.log(name);

async function pokedex(num: number): Promise<string> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
  const data = await response.json();
  return data.name;
}
