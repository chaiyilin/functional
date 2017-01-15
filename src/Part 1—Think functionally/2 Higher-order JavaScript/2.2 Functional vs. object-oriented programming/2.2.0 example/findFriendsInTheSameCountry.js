function selector(country, school) {
    //the inner function receive the input via functional call
    return function (student) {
        //Navigates the object graphs. Later in this chapter, I’ll show you a better approach to access object attributes.
        return student.address.country() === country &&
            student.school() === school;
    };
}

//encapsulate native functional call into business call
var findStudentsBy = function (friends, selector) {
    return friends.filter(selector);
};

findStudentsBy([curry, turing, church, kleene],
    selector('US', 'Princeton'));
//-> [church, kleene]
1