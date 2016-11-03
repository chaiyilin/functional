//jest.unmock('./sum'); // unmock to use the actual implementation of sum

describe('mapReduce', () => {
    it('mapReduce', () => {
        let enrollment = [
            {enrolled: 2, grade: 100},
            {enrolled: 2, grade: 80},
            {enrolled: 1, grade: 89}
        ];

        let avg = (total, currentValue, currentIndex, arr)=> {
            //console.log(type_of(arr));
            //console.log(total);
            return arr.reduce((total, currentValue)=> total + currentValue) / arr.length
        };

        let sum = (total, currentValue, currentIndex, arr)=> {
            console.log(total);
            return total + currentValue
        };

        let total = enrollment.map(enroll=>enroll.grade).reduce(sum);
        let filteredAverage = enrollment.filter(enroll=>enroll.enrolled > 1).map(enroll=>enroll.grade).reduce(avg);

        expect(total === 269).toEqual(true);
        expect(filteredAverage === 90).toEqual(true);
    });

});

