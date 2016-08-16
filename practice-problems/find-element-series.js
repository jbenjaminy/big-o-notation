// Find a series of elements from an array
var findElements = function(array, toFind) {
    var elements = [];
    for (var i=0; i<toFind.length; i++) {
        var element = findNthElement(toFind[i]);
        elements.push(element);
    }
    return elements;
};