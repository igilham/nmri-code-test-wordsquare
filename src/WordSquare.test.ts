import { WordSquare } from "./WordSquare";

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

  test.each([
    { size: 2, input: "aaaa", dictionary: ["aa", "aa"], output: ["aa", "aa"] },
    {
      size: 4,
      input: "eeeeddoonnnsssrv",
      dictionary: ["rose", "oven", "send", "ends"],
      output: ["rose", "oven", "send", "ends"],
    },
    {
      size: 5,
      input: "aaaeeeefhhmoonssrrrrttttw",
      dictionary: ["feast", "earth", "armor", "stone", "threw"],
      output: ["feast", "earth", "armor", "stone", "threw"],
    },
  ])(
    "can solve a $size x $size word square",
    ({ size, input, dictionary, output }) => {
      const ws = WordSquare.parse(size, input, dictionary);
      expect(ws.solve()).toEqual(output);
    }
  );
});
