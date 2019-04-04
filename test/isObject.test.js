import { isObject } from '../src/utils/checkers';

test('should define object as an object', () => {
  const unit = { name: 'Magician', health: 90 };

  expect(isObject(unit)).toBe(true);
});

test('should define a string as not an object', () => {
  const unit = 'Magician';

  expect(isObject(unit)).toBe(false);
});

test('should define a number as not an object', () => {
  const unit = 90;

  expect(isObject(unit)).toBe(false);
});

test('should define an array as not an object', () => {
  const unit = ['Magician', 'Warlock'];

  expect(isObject(unit)).toBe(false);
});

test('should define a function as not an object', () => {
  const multiply = (x, y) => x * y;

  expect(isObject(multiply)).toBe(false);
});

test('should define a Boolean as not an object', () => {
  const unit = true;

  expect(isObject(unit)).toBe(false);
});
