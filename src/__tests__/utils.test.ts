import { parseToUrl, formatCurrency } from '../common/utils';

describe('utils', () => {

  // Adding just a couple of tests
  describe('parseToUrl', () => {
    it('should return a string when given a valid input', () => {
      const inputString = "Valid Input";
      const expectedOutput = "valid-input";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given an empty string', () => {
      const inputString = "";
      const expectedOutput = "";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase and add hyphen when input is in uppercase', () => {
      const inputString = "HELLO WORLD";
      const expectedOutput = "hello-world";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase and add hyphen when input is in mixed case', () => {
      const inputString = "HeLlO WoRlD";
      const expectedOutput = "hello-world";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase and add hyphen when input is in camel case', () => {
      const inputString = "helloWorld";
      const expectedOutput = "helloworld";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase and add hyphen when input is in snake case', () => {
      const inputString = "hello_world";
      const expectedOutput = "hello-world";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });

    it('should convert string to lowercase and add hyphen when input is in kebab case', () => {
      const inputString = "hello-world";
      const expectedOutput = "hello-world";
      const result = parseToUrl(inputString);
      expect(result).toEqual(expectedOutput);
    });
  });

  describe('formatCurrency', () => {
    it('should return a string when given a valid input', () => {
      const inputNumber = 1000;
      const expectedOutput = "$10.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given an empty string', () => {
      const inputNumber = 0;
      const expectedOutput = "$0.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given a negative number', () => {
      const inputNumber = -1000;
      const expectedOutput = "-$10.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given a decimal number', () => {
      const inputNumber = 1000.50;
      const expectedOutput = "$10.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given a decimal number with cents', () => {
      const inputNumber = 1000.99;
      const expectedOutput = "$10.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });

    it('should return a string when given a decimal number with cents', () => {
      const inputNumber = 1000.01;
      const expectedOutput = "$10.00";
      const result = formatCurrency(inputNumber);
      expect(result).toEqual(expectedOutput);
    });
  });
});
