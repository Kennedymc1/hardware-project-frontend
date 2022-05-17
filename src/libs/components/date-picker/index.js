import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toStandardDate } from 'libs/utils/dateUtil'


function DatePicker({ id, onChange, value, label, defaultToday = true }) {

    const [defaultValue, setDefaultValue] = useState('')
    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {
        const dateString = toStandardDate(new Date())
        setDefaultValue(dateString)

        if (defaultToday && !currentValue) {
            onChange(dateString)
        }
    }, [])

    useEffect(() => {
        setCurrentValue(toStandardDate(value))
    }, [value])


    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                value={defaultToday ? (currentValue ? currentValue : defaultValue) : currentValue}
                onChange={e => onChange(e.target.value)}
                type="date"
                name={id}
                id={id}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

        </div>
    )
}

DatePicker.propTypes = {

}

export default DatePicker

