import React from 'react'
import Stat from 'libs/components/stat'
import { useQuery } from '@apollo/client'
import { GET_CHARTS, GET_OVERVIEW, GET_RECORDS } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import { Line } from 'react-chartjs-2';
import History from './history'


function Overview() {


    const { data, loading, error } = useQuery(GET_OVERVIEW, { pollInterval: 3000 })
    const { data: chartData, loading: chartLoading, error: chartError } = useQuery(GET_CHARTS, { pollInterval: 5000 })





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
                            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <Stat
                                    helpText='The date coming from the RTC module'
                                    bg='bg-yellow-600'
                                    title='Date'
                                    value={data.sensorData.date}
                                    icon={<ClipboardOutlineIcon />}
                                />

                                <Stat
                                    helpText='The time coming from the RTC module'
                                    bg='bg-cyan-600'
                                    title='Time'
                                    value={data.sensorData.time}
                                    icon={<UserGroupIcon />}
                                />

                                <Stat
                                    helpText={`The temperature coming from the DHT11 sensor`}
                                    bg='bg-purple-600'
                                    title='Temperature'
                                    value={data.sensorData.temperature + "°C"}
                                    icon={<UsersIcon />}
                                />

                                <Stat
                                    helpText='The humidity coming from the DHT11 sensor'
                                    bg='bg-indigo-600'
                                    title='Humidity'
                                    value={data.sensorData.humidity + "%"}
                                    icon={<CashIcon />}
                                />



                            </dl>


                        </div>


                    </div>
                }
            </ContentController>


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


            <History />


        </div>
    )
}

Overview.propTypes = {

}

export default Overview

