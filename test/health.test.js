import getHealthLevel from '../src/js/health';

test('should throw error when input is undefined', () => {
  const input = undefined;
  const inputUndefined = () => getHealthLevel(input);
  expect(inputUndefined).toThrowError('Input is null or undefined');
});

test('should throw error when input is null', () => {
  const input = null;
  const inputNull = () => getHealthLevel(input);
  expect(inputNull).toThrowError('Input is null or undefined');
});

test('should throw error when input is not an object', () => {
  const input = [90, 79];
  const inputArray = () => getHealthLevel(input);
  expect(inputArray).toThrowError('Input is not a unit');
});

test('should throw error when input does not have a name property', () => {
  const input = { health: 90, age: 200 };
  const inputNoName = () => getHealthLevel(input);
  expect(inputNoName).toThrowError('Unit does not have a name');
});

test('should throw error when input does not have a health property', () => {
  const input = { name: 'Magician', age: 200 };
  const inputNoHealth = () => getHealthLevel(input);
  expect(inputNoHealth).toThrowError("Unit's health is undefined");
});

test('should throw error when health is not a number', () => {
  const input = { name: 'Magician', health: 'very good' };
  const inputWrongHealth = () => getHealthLevel(input);

  expect(inputWrongHealth).toThrowError("Unit's health is not a number");
});

test('should return critical when health is less than 15', () => {
  const input = { name: 'Magician', health: 10 };

  expect(getHealthLevel(input)).toBe('critical');
});

test('should return wounded when health is equal to 15', () => {
  const input = { name: 'Magician', health: 15 };

  expect(getHealthLevel(input)).toBe('wounded');
});

test('should return wounded when health is more than 15 and less than 50', () => {
  const input = { name: 'Magician', health: 30 };

  expect(getHealthLevel(input)).toBe('wounded');
});

test('should return wounded when health is equal to 50', () => {
  const input = { name: 'Magician', health: 50 };

  expect(getHealthLevel(input)).toBe('wounded');
});

test('should return healthy when health is more than 50', () => {
  const input = { name: 'Magician', health: 60 };

  expect(getHealthLevel(input)).toBe('healthy');
});
