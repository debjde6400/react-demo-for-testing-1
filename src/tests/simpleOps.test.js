import sum from "../simpleOps/sum";
import subtract from "../simpleOps/subtract";

describe("Simple method tests", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 1 - 2 to equal -1", () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});
