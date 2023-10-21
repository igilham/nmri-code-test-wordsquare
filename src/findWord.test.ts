import { findWord } from "./findWord";

describe("findWord", () => {
  test("can find a word and slice the remaining chars", () => {
    const result = findWord("aa", "aaaa");
    expect(result).toEqual({ word: "aa", remainingChars: "aa" });
  });
});
