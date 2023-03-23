// This does what you wanted, but you had to indent the code.
console.log("Hello,");
sleep(5e3)
  .then(() => console.log("World!"));

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
