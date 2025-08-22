const { test, expect } = require("@jest/globals");
const { sortPages } = require("./report.js");

test("sortPage 1 page ", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPage 5 page ", () => {
  const input = {
    "https://wagslane.dev/path": 1,
    "https://wagslane.dev": 3,
    "https://wagslane.dev/path2": 5,
    "https://wagslane.dev/path3": 2,
    "https://wagslane.dev/path4": 9,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://wagslane.dev/path4", 9],
    ["https://wagslane.dev/path2", 5],
    ["https://wagslane.dev", 3],
    ["https://wagslane.dev/path3", 2],
    ["https://wagslane.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
