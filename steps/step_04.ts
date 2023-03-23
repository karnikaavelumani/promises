// Let's apply what we learned!!
const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const data = await response.json();
console.log({ data });

// Step 4 complete.
// TODO step 5: Improve by abstracting into an async function.
