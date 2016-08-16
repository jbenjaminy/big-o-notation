// Calculates the nth triangle number
// This one's a challenge! :)
var triangleNumbers = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};