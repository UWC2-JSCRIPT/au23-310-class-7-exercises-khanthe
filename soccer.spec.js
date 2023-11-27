describe('Tests for the soccer game', () => {

    describe('Tests for the getTotalPoints function', () => {
        it('should return an accurate total score for a string input', () => {

            const result = getTotalPoints('wwdlw');

            expect(result).toEqual(10);

        });
    });

    describe('Tests for the orderTeams function', () => {
        it('should return a string in the format "Team name: points"', () => {

            const testObject =  orderTeams(
                { name: 'Sounders', results: 'wwdl' }
              );

            expect(testObject).toMatch(`Sounders: 7`);

        });

    });

});