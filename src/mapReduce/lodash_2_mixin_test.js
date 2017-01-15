let _ = require('lodash');

it('lodash - mixin', () => {
    let enrollment = [
        {enrolled: 2, grade: 100},
        {enrolled: 2, grade: 80},
        {enrolled: 1, grade: 60}
    ];

    let avg = (arr)=> {
        //console.log(type_of(arr));
        //console.log(total);
        return arr.reduce((total1, currentValue)=> total1 + currentValue) / arr.length
    };

    _.mixin({
        avg: avg
    });

    let filteredAverage = _(enrollment).map(enroll=>enroll.grade).avg().value();

    expect(filteredAverage === 80).toEqual(true);
});



