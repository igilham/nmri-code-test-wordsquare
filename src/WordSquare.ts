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
    // const words = this.dictionary.filter((word) => word.length === this.size);

    // // first word
    // for (const word of words) {
    //   const result = [word];
    //   let remainingChars = this.input;
    //   let pos = remainingChars.indexOf(word.charAt(0));
    //   if (pos === -1) {
    //     continue;
    //   }

    //   if (remainingChars.includes(word.charAt(0))) {
    //   }

    //   if (magic()) {
    //     return result;
    //   }
    // }

    // no solution found
    return [];
  }
}
