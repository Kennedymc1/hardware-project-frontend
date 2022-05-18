import React from 'react'
import Stat from 'libs/components/stat'
import { useQuery } from '@apollo/client'
import { GET_OVERVIEW, GET_RECORDS } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import Card from 'libs/components/card'
import Item from './item'


function Overview() {


    const { data, loading, error } = useQuery(GET_OVERVIEW, { pollInterval: 1000 })

    const { data: recordsData, loading: recordsLoading, error: recordsError } = useQuery(GET_RECORDS, { pollInterval: 5000 })



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
                loading={recordsLoading}
                error={recordsError}
                data={recordsData}
            >

                <Card tailwind={"mt-8"}>
                    {recordsData &&
                        recordsData.records.map(({ data }, index) => (
                            <Item
                                data={data}
                                isGray={index % 2 === 0}
                            />
                        ))
                    }

                </Card>

            </ContentController>

        </div>
    )
}

Overview.propTypes = {

}

export default Overview

