import React, { useEffect, useState } from 'react'
import Stat from 'libs/components/stat'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_STATS, GET_MILLIS, GET_IMAGE, GET_CUSTOM_RANGE } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import { Line } from 'react-chartjs-2';
import FilePreview from 'libs/components/file-preview'
import Text from 'libs/components/text'
import DatePicker from 'libs/components/date-picker'
import { toStandardDate } from 'libs/utils/dateUtil'
import Button from 'libs/components/button'
import Loading from 'libs/components/loading'
import ErrorAlert from 'libs/components/alert/error'


function Overview() {


    const { data, loading, error } = useQuery(GET_STATS)

    const [getCustomRange, { data: rangeData, loading: rangeLoading, error: rangeError }] = useLazyQuery(GET_CUSTOM_RANGE)

    const [fromDate, setFromDate] = useState(toStandardDate(new Date()))
    const [toDate, setToDate] = useState(toStandardDate(new Date()))



    const handleGetCustomRange = () => {
        getCustomRange({
            variables: {
                toDate, fromDate
            }
        })
    }


    return (
        <div>



            <ContentController
                loading={loading}
                error={error}
                data={data}
            >


                {data &&
                    < div className='overflow-y-auto' >

                        <div className='grid grid-cols-1  gap-16 lg:gap-8 xl:gap-16'>
                            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-1 sm:p-8 md:p-16 lg:p-24">
                                <Stat
                                    helpText='The number of people entered today'
                                    bg='bg-yellow-600'
                                    title='Entered Today'
                                    value={data.stats.peopleToday}
                                    icon={<ClipboardOutlineIcon />}
                                />

                                <Stat
                                    helpText='The number of people entered yesterday'
                                    bg='bg-cyan-600'
                                    title='Entered Yesterday'
                                    value={data.stats.peopleYesterday}
                                    icon={<UserGroupIcon />}
                                />

                                <Stat
                                    helpText={`The number of people entered in the last 7 days`}
                                    bg='bg-purple-600'
                                    title='Entered Last 7 Days'
                                    value={data.stats.people7Days}
                                    icon={<UsersIcon />}
                                />

                                <Stat
                                    helpText='The number of people entered in the last 1 month'
                                    bg='bg-indigo-600'
                                    title='Entered Last One Month'
                                    value={data.stats.people30Days}
                                    icon={<CashIcon />}
                                />


                                <Text
                                    tailwind={'mt-8'}
                                    type='heading-small'>Stats Range</Text>

                                <div className='grid grid-cols-2 gap-4'>
                                    <DatePicker

                                        value={fromDate}
                                        onChange={date => setFromDate(date)}
                                        defaultToday
                                        label={"From Date"} />

                                    <DatePicker
                                        value={toDate}
                                        onChange={date => setToDate(date)}
                                        defaultToday
                                        label={"To Date"} />


                                </div>

                                <Button
                                    onClick={handleGetCustomRange}
                                    size='extra-small'
                                    loading={rangeLoading}
                                    variant='outline'
                                >Search</Button>

                                {rangeLoading ?
                                    <Loading />

                                    : (rangeData &&
                                        <Stat
                                            bg='bg-purple-600'
                                            title='Custom Range'
                                            value={rangeData.customRange}
                                            icon={<UsersIcon />}
                                        />

                                    )}

                                <ErrorAlert isShown={rangeError} />

                                <div className='h-16' />
                            </dl>


                        </div>
                    </div>
                }
            </ContentController >




        </div >
    )
}

Overview.propTypes = {

}

export default Overview

