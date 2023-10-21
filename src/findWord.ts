// find a char n times in a string, removing it from the string each time, then return the remaining string.
export function findChar(
  char: string,
  inputChars: string,
  n: number
): { found: boolean; remainingChars: string } {
  let remainingChars = inputChars;
  for (let i = 0; i < n; i++) {
    const pos = remainingChars.indexOf(char);
    if (pos === -1) {
      // throw Error(`failed to find ${i + 1}th duplicate`);
      return { found: false, remainingChars: inputChars };
    }
    remainingChars = remainingChars
      .slice(0, pos)
      .concat(remainingChars.slice(pos + 1));
  }

  return { found: true, remainingChars };
}

// find a word in a string, removing the chars charCopies times then return the word and the remaining string
export function findWord(
  word: string,
  inputChars: string,
  charCopies = 1,
  acc = ""
): {
  word: string;
  remainingChars: string;
} {
  const nextChar = word.charAt(acc.length);

  const foundChar = findChar(nextChar, inputChars, charCopies);
  if (!foundChar.found) {
    return { word: "", remainingChars: inputChars };
  }
  const found = acc.concat(nextChar);
  if (found === word) {
    return { word: found, remainingChars: foundChar.remainingChars };
  }

  // warning: node does not implement tail recursion - max depth is around 512 stack entries
  return findWord(word, foundChar.remainingChars, charCopies, found);
}
