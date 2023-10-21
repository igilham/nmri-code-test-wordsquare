import { WordSquare } from "./index";

describe("WordSquare", () => {
  test("parses 2x2 input", () => {
    const ws = WordSquare.parse(2, "aaaa");
    expect(ws.size).toBe(2);
    expect(ws.input).toBe("aaaa");
  });

  test.each([{ size: 2, input: "aaaaa" }])(
    "does not parse input if the string is the wrong length",
    ({ size, input }) => {
      expect(() => WordSquare.parse(size, input)).toThrow("Invalid input");
    }
  );
});
