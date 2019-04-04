import { isNumber } from '../src/utils/checkers';

test('should define Number as an Number', () => {
  const health = 90;

  expect(isNumber(health)).toBe(true);
});

test('should define a string as not a Number', () => {
  const health = 'Magician';

  expect(isNumber(health)).toBe(false);
});

test('should define an object as not a Number', () => {
  const health = { name: 'Witcher', health: 90 };

  expect(isNumber(health)).toBe(false);
});

test('should define an array as not a Number', () => {
  const health = ['Magician', 'Warlock'];

  expect(isNumber(health)).toBe(false);
});

test('should define a function as not an Number', () => {
  const multiply = (x, y) => x * y;

  expect(isNumber(multiply)).toBe(false);
});

test('should define anything null as not an Number', () => {
  const health = null;

  expect(isNumber(health)).toBe(false);
});

test('should define a Boolean as not an Number', () => {
  const health = true;

  expect(isNumber(health)).toBe(false);
});
