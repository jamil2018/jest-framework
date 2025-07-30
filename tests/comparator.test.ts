import { comparator } from "../src/utils";

test("compares two arrays with the same values to return true", () => {
  const testArray = [
    "<br>",
    "test",
    "test2",
    "test3",
    "test4",
    "test6",
    " ",
    "     ",
  ];
  const testArray2 = [
    "<br>",
    "test",
    "test2",
    "test3",
    "test4",
    "test5",
    " ",
    "     ",
  ];
  expect(comparator(testArray, testArray2)).toBe(true);
});
