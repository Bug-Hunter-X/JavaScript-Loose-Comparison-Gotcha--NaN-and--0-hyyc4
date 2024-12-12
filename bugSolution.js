function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // false
console.log(foo(0, -0));   // false

//Alternative solution for handling NaN specifically:
function foo2(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Treat NaN as equal to NaN
  } else if (a === b) {
    return true;
  }
  return false;
}
console.log(foo2(NaN, NaN)); // true
console.log(foo2(0, -0));   // true