import { useState, useEffect } from 'react'
import ArmotizationFormular from '../ArmotizationFormular'

const useCalculateRepaymentSchedule = ({ amount, date, interest, repaymentCycle, durationUnit, durationType, interestDuration, interestMethod }) => {
    const [repaymentItems, setRepaymentItems] = useState([])

    useEffect(() => {

        const items = ArmotizationFormular({
            amount,
            date,
            rawRepaymentCycle: repaymentCycle,
            durationUnit,
            rawDurationPeriod: durationType,
            rawInterestCycle: interestDuration,
            interestRate: interest,
            rawInterestMethod: interestMethod
        })

        setRepaymentItems(items)

    }, [amount, date, interest, repaymentCycle, durationUnit, durationType, interestDuration, interestMethod])



    return repaymentItems.length <= 1 ?
        {
            payment: '',
            nextPayment: '',
            payments: repaymentItems
        }

        :

        {
            payment: repaymentItems[1].payment,
            nextPayment: repaymentItems[1].dueDate,
            payments: repaymentItems
        }
}

export default useCalculateRepaymentSchedule