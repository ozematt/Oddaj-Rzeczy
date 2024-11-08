import { describe, expect, test } from "vitest";

const add = (arg1: number, arg2: number) => {
  return arg1 + arg2;
};

describe("test add fn", () => {
  test("2+ 2 should return 4", () => {
    expect(add(2, 2)).toBe(4);
  });
});
