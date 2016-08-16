// Doubles every value in an array
var doubleArray = function(array) {
    for (var i=0; i<array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
};