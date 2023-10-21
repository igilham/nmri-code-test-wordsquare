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

    // first word
    const result: string[] = [];
    for (const word of words) {
      const firstChar = word.charAt(0);
      const remainderAfterFirstChar = findChar(firstChar, this.input, 1);
      const found = findWord(word, remainderAfterFirstChar, 2, firstChar);
      if (found.word === word) {
        result.push(found.word);
        return result;
      }
    }
    // no solution found
    return [];
  }
}
