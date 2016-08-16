// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var sampleAutocorrelationMatrix = function(array) {
    var matrix = [];
    for (var i=0; i<array.length; i++) {
        var row = [];
        for (var j=0; j<array.length; j++) {
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};