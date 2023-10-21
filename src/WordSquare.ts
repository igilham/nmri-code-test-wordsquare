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
      const n = result.length;
      for (let j = 0; j < n; j++) {
        startChars = startChars.concat(result[j].charAt(n));
      }
      for (const word of words) {
        const foundChar = findChar(
          word.charAt(startChars.length),
          remainingChars,
          1
        );
        if (!foundChar.found) {
          continue;
        }
        remainingChars = foundChar.remainingChars;
        const found = findWord(
          word,
          remainingChars,
          2,
          startChars.concat(word.charAt(startChars.length))
        );
        if (found.word === word) {
          result.push(found.word);
          break;
        }
      }
    }

    return result;
  }
}
