import { findChar, findWord } from "./findWord";

describe("findWord", () => {
  test("can extract chars from a string", () => {
    expect(findChar("a", "aaaa", 1)).toEqual({
      found: true,
      remainingChars: "aaa",
    });
    expect(findChar("a", "aaaa", 2)).toEqual({
      found: true,
      remainingChars: "aa",
    });
    expect(findChar("a", "aaaa", 3)).toEqual({
      found: true,
      remainingChars: "a",
    });
    expect(findChar("a", "aaaa", 4)).toEqual({
      found: true,
      remainingChars: "",
    });
    expect(findChar("a", "aaaa", 5)).toEqual({
      found: false,
      remainingChars: "aaaa",
    });
  });

  test("can find a word and slice the remaining chars", () => {
    const result = findWord("aa", "aaaa");
    expect(result).toEqual({ word: "aa", remainingChars: "aa" });
  });

  test("can find a word and double slice the remaining chars", () => {
    const result = findWord("rose", "eeeeddoonnnsssv", 2, "r");
    expect(result).toEqual({ word: "rose", remainingChars: "eeddnnnsv" });
  });

  // normal end-to-end usage
  test("can find a word by extracting the first char(s) once then the rest twice", () => {
    const word = "rose";
    const input = "eeeeddoonnnsssrv";
    const remAfterFirst = findChar(word.charAt(0), input, 1);
    const result = findWord(
      word,
      remAfterFirst.remainingChars,
      2,
      word.charAt(0)
    );
    expect(result).toEqual({ word: "rose", remainingChars: "eeddnnnsv" });
  });

  // follows on from the previous test to show how to get the next word
  test("can find a word by extracting the first char(s) once then the rest twice", () => {
    const word = "oven";
    const input = "eeddnnnsv";
    const remAfterFirst = findChar(word.charAt(1), input, 1);
    const result = findWord(word, remAfterFirst.remainingChars, 2, "ov");
    expect(result).toEqual({ word: "oven", remainingChars: "ddns" });
  });
});
