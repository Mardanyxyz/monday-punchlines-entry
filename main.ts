import { mkdirSync, writeFileSync } from "node:fs";

// One joke about Monday mornings. Monday arrives like an unwanted
// door-to-door salesman, cold-calling at the door: the twist is what
// it is selling — a warranty for something that is already gone.
const joke =
  "Monday morning knocked and asked if I had a minute to talk about my weekend's extended warranty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
