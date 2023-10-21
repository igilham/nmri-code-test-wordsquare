export class WordSquare {
  static parse(size: number, input: string): WordSquare {
    if (input.length !== size * size) {
      throw new Error("Invalid input");
    }
    return new WordSquare(size, input);
  }

  constructor(
    public readonly size: number,
    public readonly input: string
  ) {}
}
