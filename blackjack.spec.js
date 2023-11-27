describe('Tests for the blackjack game hands', () => {

    describe('No Aces in hand - A 6 of hearts and 7 of spades ', () => {

        it('should equal 13 and have isSoft of false', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 6,
                    displayVal: 'Six'
                },
                {
                    suit: 'spades',
                    val: 7,
                    displayVal: 'Seven'
                },
            ]

            const result = calcPoints(hand);

            expect(result.total).toEqual(13);
            expect(result.isSoft).toEqual(false);

        });
    
    });

    describe('1 ace case (soft) - A 6 of hearts and Ace of spades', () => {

        it('should equal 17 and have isSoft of true', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 6,
                    displayVal: 'Six'
                },
                {
                    suit: 'spades',
                    val: 11,
                    displayVal: 'Ace'
                },
            ]

            const result = calcPoints(hand);

            expect(result.total).toEqual(17);
            expect(result.isSoft).toEqual(true);

        });
    
    });

    describe('1 ace case (not soft) - A 10 of hearts, a 10 of clubs, and Ace of spades', () => {

        it('should equal 21 and have isSoft of false', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 10,
                    displayVal: 'Ten'
                },
                { 
                    suit: 'clubs',
                    val: 10,
                    displayVal: 'Ten'
                },
                {
                    suit: 'spades',
                    val: 11,
                    displayVal: 'Ace'
                },
            ]

            const result = calcPoints(hand);

            expect(result.total).toEqual(21);
            expect(result.isSoft).toEqual(false);

        });
    
    });

    describe('Multiple ace case (soft) - An Ace of hearts, a 8 of clubs, and Ace of spades', () => {

        it('should equal 20 and have isSoft of true', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 11,
                    displayVal: 'Ace'
                },
                { 
                    suit: 'clubs',
                    val: 8,
                    displayVal: 'Ten'
                },
                {
                    suit: 'spades',
                    val: 11,
                    displayVal: 'Ace'
                },
            ]

            const result = calcPoints(hand);

            expect(result.total).toEqual(20);
            expect(result.isSoft).toEqual(true);

        });
    
    });

    describe('Multiple ace case (not soft) - An Ace of hearts, a 10 of clubs, and Ace of spades', () => {

        it('should equal 12 and have isSoft of false', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 11,
                    displayVal: 'Ace'
                },
                { 
                    suit: 'clubs',
                    val: 10,
                    displayVal: 'Ten'
                },
                {
                    suit: 'spades',
                    val: 11,
                    displayVal: 'Ace'
                },
            ]

            const result = calcPoints(hand);

            expect(result.total).toEqual(12);
            expect(result.isSoft).toEqual(false);

        });
    
    });

});