export function findWord(
  word: string,
  inputChars: string,
  acc = ""
): {
  word: string;
  remainingChars: string;
} {
  const pos = inputChars.indexOf(word.charAt(acc.length));
  if (pos === -1) {
    return { word: "", remainingChars: inputChars };
  }

  const found = acc.concat(word.charAt(acc.length));
  const remainingChars = inputChars.slice(0, pos) + inputChars.slice(pos + 1);
  if (found === word) {
    return { word: found, remainingChars };
  }
  return findWord(word, remainingChars, found);
}
