export function transformToNumber(value) {
  if (!value) {
    throw new Error();
  }
  return +value;
}

