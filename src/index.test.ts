import { hello } from "./index";

describe("hello", () => {
  test("returns hello world", () => {
    expect(hello()).toBe("Hello World");
  });
});
