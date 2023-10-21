import { findChar, findWord } from "./findWord";

describe("findWord", () => {
  test("can extract chars from a string", () => {
    expect(findChar("a", "aaaa", 1)).toBe("aaa");
    expect(findChar("a", "aaaa", 2)).toBe("aa");
    expect(findChar("a", "aaaa", 3)).toBe("a");
    expect(findChar("a", "aaaa", 4)).toBe("");
    expect(() => findChar("a", "aaaa", 5)).toThrow(
      "failed to find 5th duplicate"
    );
  });

  test("can find a word and slice the remaining chars", () => {
    const result = findWord("aa", "aaaa");
    expect(result).toEqual({ word: "aa", remainingChars: "aa" });
  });

  test("can find a word and double slice the remaining chars", () => {
    const result = findWord("rose", "eeeeddoonnnsssv", 2, "r");
    expect(result).toEqual({ word: "rose", remainingChars: "eeddnnnsv" });
  });
});
