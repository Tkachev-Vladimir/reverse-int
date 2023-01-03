module.exports = function reverse (n) {

    // n = n + "";
    return Number(n.toString().split("").reverse().join(""));
// return n.split("").reverse().join("");
}
