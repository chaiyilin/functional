let _ = require('lodash');

it('mapReduce - lodash', () => {
    let enrollment = [
        {enrolled: 2, grade: 100},
        {enrolled: 2, grade: 80},
        {enrolled: 1, grade: 60}
    ];

    let avg = (total, currentValue, currentIndex, arr)=> {
        //console.log(type_of(arr));
        //console.log(total);
        return arr.reduce((total1, currentValue)=> total1 + currentValue) / arr.length;
    };

    let filteredAverage = _(enrollment).map(enroll=>enroll.grade).reduce(avg);

    expect(filteredAverage === 80).toEqual(true);
});



