module.exports = function reverse (n) {
  return n && Number.isInteger(n) ? new Number(Math.abs(n).toString().split('').reverse().join('')) : n;
}
