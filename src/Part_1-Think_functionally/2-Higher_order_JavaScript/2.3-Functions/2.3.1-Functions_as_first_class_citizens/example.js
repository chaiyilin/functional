//default sort behavior
var fruit = ['Coconut', 'apples'];
//In Unicode, capital letters come before lowercase letters.
fruit.sort(); //->['Coconut', 'apples']

var ages = [1, 10, 21, 2];
//Numbers are converted into strings and compared with their Unicode points.
ages.sort(); //->[1, 10, 2, 21]