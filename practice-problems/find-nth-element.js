// Finds the nth element in an array
var findNthElement = function(array, n) {
    if (array.length == 1) {
        return array[n];
    }

    var middle = Math.floor(array.length / 2);
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n);
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle);
    }
};