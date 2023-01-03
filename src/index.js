module.exports = function reverse (n) {

    // n = n + "";
 return Math.abs(n).toString().split("").reverse().join("");
// return n.split("").reverse().join("");
}
