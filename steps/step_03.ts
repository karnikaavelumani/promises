// This does what you wanted and looks like step_01.ts but it is equivalent
// to step_02.ts.
console.log("Hello,");
await sleep(5e3);
console.log("World!");

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
