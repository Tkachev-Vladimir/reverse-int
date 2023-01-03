module.exports = function reverse (n) {

    // n = n + "";
    Number([...n.toString()].reverse().join(""));
// return n.split("").reverse().join("");
}
