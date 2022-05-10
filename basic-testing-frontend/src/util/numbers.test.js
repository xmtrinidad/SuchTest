import { expect, it } from "vitest";
import { transformToNumber } from '../util/numbers.js';

it('should transform a string to a number of type number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it('should yield NaN if not a number', () => {
  const char = 'A';

  const result = transformToNumber(char)

  expect(result).toBeNaN();
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    transformToNumber();
  };

  expect(resultFn).toThrow();
});