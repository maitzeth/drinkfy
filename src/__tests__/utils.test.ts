import { parseToUrl } from '../common/utils';

describe('utils', () => {
  describe('parseToUrl', () => {
    test('should return a string when given a valid input', () => {
      const inputString = "Valid Input";
      const expectedOutput = "valid-input";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    test('should return a string when given an empty string', () => {
      const inputString = "";
      const expectedOutput = "";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase when input is in uppercase', () => {
      const inputString = "HELLO WORLD";
      const expectedOutput = "hello-world";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    })
  })
});
