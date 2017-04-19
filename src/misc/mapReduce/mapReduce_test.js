describe('mapReduce', () => {
    it('mapReduce', () => {
        let enrollment = [
            {enrolled: 2, grade: 100},
            {enrolled: 2, grade: 80},
            {enrolled: 1, grade: 89}
        ];

        //wrong: will be invoked n times
        let avg = (total, currentValue, currentIndex, arr)=> {
            return arr.reduce((total, currentValue)=> total + currentValue) / arr.length
        };

        let filteredAverage = enrollment.filter(enroll=>enroll.enrolled > 1).map(enroll=>enroll.grade).reduce(avg);

        expect(filteredAverage === 90).toEqual(true);
    });

});

