import { WordSquare, findWord } from "./index";

describe("WordSquare", () => {
  test.each([
    { size: 2, input: "aaaa" },
    { size: 7, input: "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy" },
  ])("parses size $size input $input", ({ size, input }) => {
    const ws = WordSquare.parse(size, input, []);
    expect(ws.size).toBe(size);
    expect(ws.input).toBe(input);
  });

  test.each([
    { size: 2, input: "aaa" },
    { size: 2, input: "aaaaa" },
    { size: 7, input: "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyy" },
    { size: 7, input: "aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyyy" },
  ])(
    "errors if the input string is the wrong length, size=$size, input=$input",
    ({ size, input }) => {
      expect(() => WordSquare.parse(size, input, [])).toThrow("Invalid input");
    }
  );

  test("can find a word and slice the remaining chars", () => {
    const result = findWord("aa", "aaaa");
    expect(result).toEqual({ word: "aa", remainingChars: "aa" });
  });

  test.skip.each([{ size: 2, input: "aaaa", dictionary: ["aa", "aa"] }])(
    "can solve a $size x $size word square",
    ({ size, input, dictionary }) => {
      const ws = WordSquare.parse(size, input, dictionary);
      expect(ws.solve()).toEqual(["aa", "aa"]);
    }
  );
});
