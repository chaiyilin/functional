//array
let enrollment = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
];

enrollment.forEach(enroll=>console.log(enroll.grade));
//nor right
for (enroll in enrollment) {
    console.log(enroll)
}

//object
enrollment = {enrolled: 2, grade: 100};

//not working
//enrollment.forEach(enroll=>console.log(enroll));

for (enroll in enrollment) {
    console.log(enroll)
}