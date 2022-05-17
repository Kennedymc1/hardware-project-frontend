/**
 * TODO ANY CHANGES TO THIS FILE SHOULD ALSO BEEN DONE TO THE SERVER FILE
 * 
 * Uses Armotization Formula to determine periodic payment amount
 *
    https://www.calculatestuff.com/financial/loan-amortization-calculator
 */

    const DAY = 1
    const WEEK = 2
    const MONTH = 3
    const BI_WEEK = 4
    const QUARTER = 5
    const SEMI_YEAR = 6
    const YEAR = 7
    
    const ONCE = 8
    
    
    const FLAT = 'flat'
    const COMPOUNDED = 'compounded'
    const AMORTIZED = 'amortized'
    
    
    /**
       * convert the parameters passed to the armotization function to the constants that are required
       */
    const convertParameters = ({ rawRepaymentCycle, rawInterestCycle, rawDurationPeriod, rawInterestMethod }) => {
        let repaymentCycle, durationPeriod, interestCycle, interestMethod
    
        if (rawInterestMethod.toLowerCase().includes('amortized')) {
            interestMethod = AMORTIZED
        } else if (rawInterestMethod.toLowerCase().includes('compounded')) {
            interestMethod = COMPOUNDED
        } else {
            interestMethod = FLAT
        }
        
        if (!rawInterestCycle) {
            interestCycle = MONTH
        }
    
        switch (rawInterestCycle.toLowerCase()) {
            case 'per day':
                interestCycle = DAY
                break;
            case 'per week':
                interestCycle = WEEK
                break;
            case 'per year':
                interestCycle = YEAR
                break;
            case 'once':
                interestCycle = ONCE
                break;
            default:
                interestCycle = MONTH
                break;
        }
    
        switch (rawRepaymentCycle.toLowerCase()) {
            case 'once':
                repaymentCycle = ONCE
                break;
            case 'daily':
                repaymentCycle = DAY
                break;
            case 'weekly':
                repaymentCycle = WEEK
                break;
            case 'biweekly':
                repaymentCycle = BI_WEEK
                break;
            case 'monthly':
                repaymentCycle = MONTH
                break;
            case 'quarterly':
                repaymentCycle = QUARTER
                break;
            case 'semi-annual':
                repaymentCycle = SEMI_YEAR
                break;
            case 'yearly':
                repaymentCycle = YEAR
                break;
            default:
                break;
        }
    
    
        switch (rawDurationPeriod.toLowerCase()) {
            case 'days':
                durationPeriod = DAY
                break;
            case 'weeks':
                durationPeriod = WEEK
                break;
            case 'years':
                durationPeriod = YEAR
                break;
            default:
                durationPeriod = MONTH
                break;
        }
    
        return { repaymentCycle, interestCycle, durationPeriod, interestMethod }
    }
    
    
    /**
     * calculating the due date of the next repayment item based on the repaymentCycle
     */
    const nextDueDate = ({ currentDate, repaymentCycle, durationUnit, durationPeriod }) => {
        if (repaymentCycle === ONCE) {
            const days = calculateLoanDurationDays({ durationUnit, durationPeriod })
    
            return new Date(currentDate.setDate(currentDate.getDate() + days))
        }
    
        switch (repaymentCycle) {
            case DAY:
                return new Date(currentDate.setDate(currentDate.getDate() + 1))
            case WEEK:
                return new Date(currentDate.setDate(currentDate.getDate() + 7))
            case BI_WEEK:
                return new Date(currentDate.setDate(currentDate.getDate() + 14))
            case QUARTER:
                return new Date(currentDate.setMonth(currentDate.getMonth() + 3))
            case SEMI_YEAR:
                return new Date(currentDate.setMonth(currentDate.getMonth() + 6))
            case YEAR:
                return new Date(currentDate.setMonth(currentDate.getMonth() + 12))
            default:
                return new Date(currentDate.setMonth(currentDate.getMonth() + 1))
        }
    }
    
    
    /**
     * 
     * @param {*} param0 
     * @returns 
     */
    const calculateLoanDurationDays = ({ durationPeriod, durationUnit }) => {
        //calculate the number of days for the loan duration
        let loanDurationDays
    
        switch (durationPeriod) {
            case DAY:
                loanDurationDays = 1
                break;
            case WEEK:
                loanDurationDays = 7
                break;
            case YEAR:
                loanDurationDays = 365
                break;
            default:
                loanDurationDays = 30
                break;
        }
    
        loanDurationDays *= durationUnit
    
        return loanDurationDays
    }
    
    /**
     * 
        //determinging the number of repayments in the loan from the loan duration and repayment cycle
     */
    const getNumberOfRepayments = ({ durationPeriod, durationUnit, repaymentCycle }) => {
    
    
        const loanDurationDays = calculateLoanDurationDays({ durationPeriod, durationUnit })
        //calculate the number of days in the repayment cycle
        let repaymentCycleDays
    
        switch (repaymentCycle) {
            case ONCE:
                repaymentCycleDays = loanDurationDays
                break;
            case DAY:
                repaymentCycleDays = 1
                break;
            case WEEK:
                repaymentCycleDays = 7
                break;
            case BI_WEEK:
                repaymentCycleDays = 14
                break;
            case QUARTER:
                repaymentCycleDays = 90
                break;
            case SEMI_YEAR:
                repaymentCycleDays = 182
                break;
            case YEAR:
                repaymentCycleDays = 365
                break;
            default:
                repaymentCycleDays = 30
                break;
        }
    
        let numberOfRepayments
    
        numberOfRepayments = parseInt(loanDurationDays / repaymentCycleDays)
        if (numberOfRepayments <= 0) numberOfRepayments = 1
    
        return numberOfRepayments
    
    }
    
    
    /**
        * calculate the iterations that the interest is added upon the principle amount as determined
        * by the interestCycle
        */
    const calculateInterestIterations = ({ durationPeriod, durationUnit, interestCycle }) => {
    
        const loanDurationDays = calculateLoanDurationDays({ durationPeriod, durationUnit })
        //calculate the number of days in the repayment cycle
        let interestCycleDays
    
        switch (interestCycle) {
            case DAY:
                interestCycleDays = 1
                break;
            case WEEK:
                interestCycleDays = 7
                break;
            case YEAR:
                interestCycleDays = 365
                break;
            case MONTH:
                interestCycleDays = 30
                break;
            default:
                interestCycleDays = loanDurationDays
                break;
        }
    
        let numberOfInterestIterations = loanDurationDays / interestCycleDays
    
        return numberOfInterestIterations
    }
    
    /**
     * calculate the amount that should be payed back at every repaymentCycle
     * @returns 
     */
    const calculatePeriodicPaymentAmount = ({ amount, numberOfRepayments, interestRate, interestCycle, interestMethod, durationPeriod, durationUnit }) => {
        let periodicPayment
    
    
        if (interestMethod === AMORTIZED) {
    
            let monthlyInterestRate = interestRate
    
            switch (interestCycle) {
                case YEAR:
                    monthlyInterestRate = interestRate / 12
                    break;
                default:
                    monthlyInterestRate = interestRate
                    break;
            }
    
            //for yearly devide interestRate by 12
            const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfRepayments)
            const denominator = Math.pow(1 + monthlyInterestRate, numberOfRepayments) - 1
    
            periodicPayment = amount * (numerator / denominator)
    
        } else if (interestMethod === COMPOUNDED) {
            //compounded interest method
            const numberOfInterestIterations = calculateInterestIterations({ durationPeriod, durationUnit, interestCycle })
            let totalAmount = amount
    
            for (let i = 0; i < numberOfInterestIterations; i++) {
                const interest = totalAmount * interestRate
                totalAmount += interest
            }
    
            periodicPayment = totalAmount / numberOfRepayments
        } else {
            //flat interest method
            const numberOfInterestIterations = calculateInterestIterations({ durationPeriod, durationUnit, interestCycle })
    
            const interest = amount * interestRate
            const totalInterest = interest * numberOfInterestIterations
            const totalAmount = amount + totalInterest
            periodicPayment = totalAmount / numberOfRepayments
        }
    
    
    
        return periodicPayment
    }
    
    
    /**
     * this is called everytime a payment is made
     * @param {*} param0 
     * @returns 
     */
    const getInterestValue = ({ balance, principal, interestRate, interestCycle, interestMethod, numberOfRepayments, durationUnit, durationPeriod }) => {
        let interestValue
    
        if (interestMethod === AMORTIZED) {
            let deviderValue = 1
    
            //this assumes payments are made on a monthly basis after every 30 days
            switch (interestCycle) {
                case YEAR:
                    // the 12 is to convert the yearly interest rate to a monthly interest rate
                    deviderValue = 12
                    break;
                default:
                    deviderValue = 1
                    break;
            }
    
            interestValue = (balance * (interestRate / deviderValue))
        } else if (interestMethod === COMPOUNDED) {
            //compounded interest method
            const numberOfInterestIterations = calculateInterestIterations({ durationUnit, durationPeriod, interestCycle })
            let totalAmount = principal
            let totalInterest = 0
    
            for (let i = 0; i < numberOfInterestIterations; i++) {
                const interest = totalAmount * interestRate
                totalAmount += interest
                totalInterest += interest
            }
    
            const periodicPayment = totalAmount / numberOfRepayments
            const ratio = totalInterest / totalAmount
            interestValue = ratio * periodicPayment
        } else {
            //flat interest
            const numberOfInterestIterations = calculateInterestIterations({ durationUnit, durationPeriod, interestCycle })
    
            const interest = principal * interestRate
            const totalInterest = interest * numberOfInterestIterations
            const totalAmount = principal + totalInterest
            const periodicPayment = totalAmount / numberOfRepayments
            const ratio = totalInterest / totalAmount
            interestValue = ratio * periodicPayment
        }
    
        // console.log({ interestValue })
        return interestValue
    }
    
    //getInterestValue({ balance: 1000, interestRate: 0.1, interestDuration: YEAR })
    //calculatePeriodicPaymentAmount({ amount: 1000, numberOfRepayments: 6, interestRate: 0.1, interestDuration: YEAR })
    
    
    /**
      * @param {Float} interestRate - the percentage interest rate from 0.0 going up
     @param {int} months - the duration of the months of the loan
     @param {int} amount - the amount of the loan
     @param {int} repaymentCycle - how often a repayment is expected
       * @param {String} interestMethod - can be 'amortized' or 'flat'
      */
    const ArmotizationFormular = ({ durationUnit, rawDurationPeriod, amount, date, interestRate, rawRepaymentCycle, rawInterestCycle, rawInterestMethod }) => {
    
        const { interestCycle, durationPeriod, repaymentCycle, interestMethod } = convertParameters({ rawInterestMethod: rawInterestMethod ? rawInterestMethod : '', rawDurationPeriod, rawRepaymentCycle, rawInterestCycle })
    
        //repayment items
        const items = []
    
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    
        const numberOfRepayments = getNumberOfRepayments({ durationPeriod, durationUnit, repaymentCycle })
        const payment = calculatePeriodicPaymentAmount({ amount, numberOfRepayments, interestRate, interestCycle, interestMethod, durationPeriod, durationUnit })
    
        /**
         * 
         * @returns 
         */
        const getFirstDate = () => {
            if (date) {
                return new Date(date)
            } else {
                return new Date()
            }
        }
    
    
        /**
         * creating repayment items
         */
        for (let i = 0; i < numberOfRepayments; i++) {
    
            let balance
    
            if (i === 0) {
                balance = amount
            } else {
                balance = items[items.length - 1].balance
            }
    
            const interest = getInterestValue({ balance, interestRate, interestCycle, interestMethod, numberOfRepayments, durationUnit, durationPeriod, principal: amount })
            const principal = payment - interest
    
    
            //the new balance 
            balance = balance - principal
    
            if (balance <= 1) {
                balance = 0
            }
    
    
            //determining the due date of each payment  based on the repayment cycle specified
            const beginDate = (i === 0 ? getFirstDate() : new Date(items[items.length - 1].date))
    
            const dueDate = nextDueDate({ currentDate: beginDate, repaymentCycle, durationUnit, durationPeriod })
    
            const item = {
                date: dueDate,
                dueDate: dueDate.toLocaleDateString(undefined, dateOptions),
                payment: parseFloat(payment.toFixed(2)),
                interest: parseFloat(interest.toFixed(2)),
                principal: parseFloat(principal.toFixed(2)),
                balance: parseFloat((balance).toFixed(2))
            }
    
            items.push(item)
    
        }
    
    
        //adding the first repayment item 
        const fd = getFirstDate()
        items.splice(0, 0, {
            date: fd,
            dueDate: fd.toLocaleDateString(undefined, dateOptions),
            balance: parseFloat(amount.toFixed(2))
        })
    
    
        //return all the repayment items from the method call
        return items
    }
    
    module.exports = ArmotizationFormular
    