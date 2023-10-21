export class WordSquare {
  static parse(size: number, input: string): WordSquare {
    return new WordSquare(size, input);
  }

  constructor(
    public readonly size: number,
    public readonly input: string
  ) {}
}
