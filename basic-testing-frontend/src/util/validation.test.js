import { expect, it, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";


describe('validateStringNotEmpty()', () => {
  it('should throw an error if value is empty', () => {
    const str = '';
  
    const resultFn = () => {
      validateStringNotEmpty(str);
    };
  
    expect(resultFn).toThrow();
  });
});

describe('validateNumber()', () => {
  it('should throw an error if value is NaN', () => {
    const str = 'thing';
  
    const resultFn = () => {
      validateNumber(str);
    };
  
    expect(resultFn).toThrow();
  });
});
