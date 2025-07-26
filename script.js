function isSameType(value1, value2) {
  // Check if both are NaN using Number.isNaN (safer than isNaN)
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Otherwise, compare their types
  return typeof value1 === typeof value2;
}
