import { WordSquare } from "./WordSquare";

import { Command } from "commander";

const program = new Command();
program
  .description("Solve a word square puzzle")
  .argument("<size>", "size of the word square", parseInt)
  .argument("<input>", "input string")
  .action((size, input) => {
    // TODO: implement some sort of dictionary
    const wordSquare = new WordSquare(size, input, [
      "ends",
      "oven",
      "rose",
      "send",
    ]);
    const solution = wordSquare.solve();
    for (const word of solution) {
      console.log(word);
    }
  });

program.parse(process.argv);
