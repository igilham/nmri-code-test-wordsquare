import { WordSquare } from "./index";

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
});
