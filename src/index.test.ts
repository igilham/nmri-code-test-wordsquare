import { WordSquare } from "./index";

describe("WordSquare", () => {
  test("parses the input", () => {
    const ws = WordSquare.parse(2, "aaaa");
    expect(ws.size).toBe(2);
    expect(ws.input).toBe("aaaa");
  });
});
