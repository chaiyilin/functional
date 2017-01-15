//before
function showStudent(ssn) {
    var student = db.get(ssn);
    if (student !== null) {
        document.querySelector('#${elementId}').innerHTML =
            `${student.ssn},
${student.firstname},
${student.lastname}`;
    }
    else {
        throw new Error('Student not found!');
    }
}
showStudent('444-44-4444');

//after
var find = curry(function (db, id) {
    var obj = db.get(id);
    if (obj === null) {
        throw new Error('Object not found!');// still not ideal
    }
    return obj;
});
var csv = (student)=> {
    return `${student.ssn}, ${student.firstname}, ${student.lastname}`;
};
var append = curry(function (elementId, info) {
    document.querySelector(elementId).innerHTML = info;
});

var showStudent = run(
    append('#student-info'),
    csv,
    find(db));
showStudent('444-44-4444');