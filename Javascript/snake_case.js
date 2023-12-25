// snake_case to camelCase
function snakeToCamel(obj) {
  const camelObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      camelObj[camelKey] = obj[key];
    }
  }
  return camelObj;
}

// camelCase to snake_case
function camelToSnake(obj) {
  const snakeObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (letter) => `_${letter.toLowerCase()}`
      );
      snakeObj[snakeKey] = obj[key];
    }
  }
  return snakeObj;
}
