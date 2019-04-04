export const isObject = value => value && typeof value === 'object' && value.constructor === Object;

export const isNumber = value => typeof value === 'number' && Number.isFinite(value);
