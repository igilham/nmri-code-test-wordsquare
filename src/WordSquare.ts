import { findChar, findWord } from "./findWord";

export class WordSquare {
  static parse(size: number, input: string, dictionary: string[]): WordSquare {
    if (input.length !== size * size) {
      throw new Error("Invalid input");
    }
    return new WordSquare(size, input, dictionary);
  }

  constructor(
    public readonly size: number,
    public readonly input: string,
    private readonly dictionary: string[]
  ) {}

  solve(): string[] {
    const words = this.dictionary.filter((word) => word.length === this.size);

    const result: string[] = [];
    let remainingChars = this.input;

    for (let i = 0; i < this.size; i++) {
      let startChars = "";
      for (let j = 0; j < i; j++) {
        startChars = startChars.concat(result[j].charAt(i));
      }

      // find the next valid word from the dictionary
      for (const word of words) {
        if (!word.startsWith(startChars)) {
          continue;
        }

        const foundChar = findChar(word.charAt(i), remainingChars, 1);
        if (!foundChar.found) {
          continue;
        }
        remainingChars = foundChar.remainingChars;
        const found = findWord(
          word,
          remainingChars,
          2,
          startChars.concat(word.charAt(i))
        );
        if (found.word === word) {
          result.push(found.word);
          break;
        }
      }
    }

    // Missing error response if we have not managed to fill the square
    return result;
  }
}
