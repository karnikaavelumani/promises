// This does not do what you thought it would do.
console.log("Hello,");
sleep(5e3);
console.log("World!");

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
