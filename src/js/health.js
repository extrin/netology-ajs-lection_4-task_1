import { isObject, isNumber } from '../utils/checkers';
import UserException from '../utils/exceptions';

const getHealthLevel = (unit) => {
  if (unit === null || unit === undefined) throw new UserException('Input is null or undefined');
  if (!isObject(unit)) throw new UserException('Input is not a unit');
  if (!('name' in unit)) throw new UserException('Unit does not have a name');
  if (!('health' in unit)) throw new UserException("Unit's health is undefined");
  if (!isNumber(unit.health)) throw new UserException("Unit's health is not a number");

  if (unit.health < 15) return 'critical';
  if (unit.health <= 50) return 'wounded';
  return 'healthy';
};

export default getHealthLevel;
