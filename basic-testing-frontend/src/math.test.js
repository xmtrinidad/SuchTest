import { expect, it } from "vitest";
import { add } from "./math";

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1,2,3];
  const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);

  // Act
  const result = add([1,2,3]);

  // Assert
  expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provied', () => {
  const numbers = ['1', '2'];
  const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

// Error example
it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});