import React from 'react'
import Stat from 'libs/components/stat'
import { useQuery } from '@apollo/client'
import { GET_STATS } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import { Line } from 'react-chartjs-2';


function Overview() {


    const { data, loading, error } = useQuery(GET_STATS)





    return (
        <div>
            <ContentController
                loading={loading}
                error={error}
                data={data}
            >

                {data &&
                    <div>


                        <div tour='welcome' className='grid grid-cols-1  gap-16 lg:gap-8 xl:gap-16'>
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



                            </dl>


                        </div>


                    </div>
                }
            </ContentController>

            {/* 
            <ContentController
                loading={chartLoading}
                error={chartError}
                data={chartData}
            >

                {chartData &&
                    <div>

                        <div className='mt-8'>

                            <Line
                                datasetIdKey='id'
                                data={{
                                    labels: chartData.charts.time,
                                    datasets: [
                                        {
                                            id: 1,
                                            label: 'Humidity',
                                            data: chartData.charts.humidity,
                                        },
                                    ],
                                }}
                            />
                        </div>

                        <div className='mt-8'>

                            <Line
                                datasetIdKey='id'
                                data={{
                                    labels: chartData.charts.time,
                                    datasets: [
                                        {
                                            id: 1,
                                            label: 'Temperature',
                                            data: chartData.charts.temperature,
                                        },
                                    ],
                                }}
                            />
                        </div>

                    </div>
                }
            </ContentController>


            <History /> */}


        </div>
    )
}

Overview.propTypes = {

}

export default Overview

