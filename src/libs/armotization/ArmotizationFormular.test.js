const ArmotizationFormular = require('./ArmotizationFormular');


test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Amortized Interest',
        durationUnit: 3,
        rawDurationPeriod: 'Months',
        amount: 1000,
        interestRate: 0.24,
        rawRepaymentCycle: 'Monthly',
        rawInterestCycle: 'Per Month'
    })


    expect(payments.length).toEqual(3 + 1);
    expect(payments[2].principal).toEqual(328.25)
    expect(payments[2].interest).toEqual(176.47)
    expect(payments[2].balance).toEqual(407.03)
    expect(payments[2].payment).toEqual(504.72)
    expect(payments[0].balance).toEqual(1000)
    expect(payments[payments.length - 1].balance).toEqual(0)
    expect(payments[payments.length - 2].balance).toEqual(payments[payments.length - 1].principal)


});

test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Amortized Interest',
        durationUnit: 2,
        rawDurationPeriod: 'Months',
        amount: 1000,
        interestRate: 0.24,
        rawRepaymentCycle: 'Monthly',
        rawInterestCycle: 'Per Year'
    })

    //number of payments
    expect(payments.length).toEqual(2 + 1);
    expect(payments[1].principal).toEqual(495.05)
    expect(payments[1].interest).toEqual(20)
    expect(payments[1].balance).toEqual(504.95)
    expect(payments[1].payment).toEqual(515.05)
    expect(payments[0].balance).toEqual(1000)
    expect(payments[payments.length - 1].balance).toEqual(0)
    expect(payments[payments.length - 2].balance).toEqual(payments[payments.length - 1].principal)

});


///
test('Flat ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Flat Interest',
        durationUnit: 1,
        rawDurationPeriod: 'Months',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Daily',
        rawInterestCycle: 'Per Month'
    })


    //number of payments
    expect(payments.length).toEqual(30 + 1);

    expect(payments[2].principal).toEqual(33.33)
    expect(payments[2].interest).toEqual(3.33)
    expect(payments[2].balance).toEqual(933.34)
    expect(payments[2].payment).toEqual(36.67)

    expect(payments[0].balance).toEqual(1000)
    expect(payments[payments.length - 1].balance).toEqual(0)
    expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

});




describe("Armotization", () => {
    test('Flat ', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 3,
            rawDurationPeriod: 'Months',
            amount: 1000,
            interestRate: 0.01,
            rawRepaymentCycle: 'Biweekly',
            rawInterestCycle: 'Per Day'
        })

        //number of payments
        expect(payments.length).toEqual(6 + 1);

        expect(payments[2].principal).toEqual(166.67)
        expect(payments[2].interest).toEqual(150)
        expect(payments[2].balance).toEqual(666.66)
        expect(payments[2].payment).toEqual(316.67)

        expect(payments[0].balance).toEqual(1000)
        expect(payments[payments.length - 1].balance).toEqual(0)
        expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

    });



    test('flat ', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 4,
            rawDurationPeriod: 'Months',
            amount: 1000,
            interestRate: 0.1,
            rawRepaymentCycle: 'Monthly',
            rawInterestCycle: 'Per Year'
        })

        //number of payments
        expect(payments.length).toEqual(4 + 1);


        expect(payments[2].principal).toEqual(250)
        expect(payments[2].interest).toEqual(8.22)
        expect(payments[2].balance).toEqual(500)
        expect(payments[2].payment).toEqual(258.22)

        expect(payments[0].balance).toEqual(1000)
        expect(payments[payments.length - 1].balance).toEqual(0)
        expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

    });


    test('flat', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 10,
            rawDurationPeriod: 'Months',
            amount: 1000,
            interestRate: 0.16,
            rawRepaymentCycle: 'BiWeekly',
            rawInterestCycle: 'Per Year'
        })

        //number of payments
        expect(payments.length).toEqual(21 + 1);


        expect(payments[2].principal).toEqual(47.62)
        expect(payments[2].interest).toEqual(6.26)
        expect(payments[2].balance).toEqual(904.76)
        expect(payments[2].payment).toEqual(53.88)

        expect(payments[0].balance).toEqual(1000)
        expect(payments[payments.length - 1].balance).toEqual(0)
        expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

    });


    test('flat ', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 1,
            rawDurationPeriod: 'Years',
            amount: 1000,
            interestRate: 0.2,
            rawRepaymentCycle: 'Quarterly',
            rawInterestCycle: 'Once'
        })

        //number of payments
        expect(payments.length).toEqual(4 + 1);

        expect(payments[2].principal).toEqual(250)
        expect(payments[2].interest).toEqual(50)
        expect(payments[2].balance).toEqual(500)
        expect(payments[2].payment).toEqual(300)

        expect(payments[0].balance).toEqual(1000)
        expect(payments[payments.length - 1].balance).toEqual(0)
        expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

    });

    test('flat ', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 2,
            rawDurationPeriod: 'Years',
            amount: 1000,
            interestRate: 0.1,
            rawRepaymentCycle: 'Semi-Annual',
            rawInterestCycle: 'Per Year'
        })

        //number of payments
        expect(payments.length).toEqual(4 + 1);

        expect(payments[2].principal).toEqual(250)
        expect(payments[2].interest).toEqual(50)
        expect(payments[2].balance).toEqual(500)
        expect(payments[2].payment).toEqual(300)

        expect(payments[0].balance).toEqual(1000)
        expect(payments[payments.length - 1].balance).toEqual(0)
        expect(payments[payments.length - 2].balance.toFixed()).toEqual(payments[payments.length - 1].principal.toFixed())

    });

    test('flat ', () => {
        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 3,
            rawDurationPeriod: 'Months',
            amount: 1000,
            interestRate: 0.1,
            rawRepaymentCycle: 'Yearly',
            rawInterestCycle: 'Once'
        })

        //number of payments
        expect(payments.length).toEqual(1 + 1);

        expect(payments[1].principal).toEqual(1000)
        expect(payments[1].interest).toEqual(100)
        expect(payments[1].balance).toEqual(0)
        expect(payments[1].payment).toEqual(1100)

        expect(payments[0].balance).toEqual(1000)
    });

    test('once repayment cycle ', () => {
        const date = new Date('1/1/2021')

        const payments = ArmotizationFormular({
            rawInterestMethod: 'Flat Interest',
            durationUnit: 3,
            rawDurationPeriod: 'Months',
            amount: 1000,
            interestRate: 0.1,
            rawRepaymentCycle: 'Once',
            rawInterestCycle: 'Once',
            date: date
        })

        date.setMonth(date.getMonth() + 3)

        expect(payments[1].date.toLocaleDateString()).toEqual(date.toLocaleDateString())

        //number of payments
        expect(payments.length).toEqual(1 + 1);

        expect(payments[1].principal).toEqual(1000)
        expect(payments[1].interest).toEqual(100)
        expect(payments[1].balance).toEqual(0)
        expect(payments[1].payment).toEqual(1100)

        expect(payments[0].balance).toEqual(1000)



    });
})

/*
//
test('compounded ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 2,
        rawDurationPeriod: 'Weeks',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Daily',
        rawInterestCycle: 'Per Week'
    })

    //number of payments
    expect(payments.length).toEqual(14 + 1);

});

test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 14,
        rawDurationPeriod: 'Days',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Weekly',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(2 + 1);
});

test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 4,
        rawDurationPeriod: 'Weeks',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Biweekly',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(2 + 1);

});



test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 60,
        rawDurationPeriod: 'Days',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Monthly',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(2 + 1);
});


test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 6,
        rawDurationPeriod: 'Months',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Quarterly',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(2 + 1);
});

test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 2,
        rawDurationPeriod: 'Years',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Semi-Annual',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(4 + 1);
});

test('Amortized ', () => {
    const payments = ArmotizationFormular({
        rawInterestMethod: 'Compounded Interest',
        durationUnit: 3,
        rawDurationPeriod: 'Years',
        amount: 1000,
        interestRate: 0.1,
        rawRepaymentCycle: 'Yearly',
        rawInterestCycle: 'Per Month'
    })

    //number of payments
    expect(payments.length).toEqual(3 + 1);
});
*/