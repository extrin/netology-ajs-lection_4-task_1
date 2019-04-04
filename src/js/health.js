import { isObject, isNumber } from '../utils/checkers';

export default (get_health_level = (unit) => {
  if (!isObject(unit)) throw 'Input is not a unit';
  if (!unit.hasOwnProperty('name')) throw 'Unit does not have a name';
  if (!unit.hasOwnProperty('health')) throw "Unit's health is undefined";
  if (!isNumber(unit.health)) throw "Unit's health is not a number";

  return unit.health < 15 ? 'critical' : unit.health <= 50 ? 'wounded' : 'healthy';
});
