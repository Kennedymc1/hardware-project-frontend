import React, { useEffect, useState } from 'react'
import Stat from 'libs/components/stat'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_ENTRIES } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import { Line } from 'react-chartjs-2';
import Item from './item'
import { useHistory, useLocation } from 'react-router-dom'
import CardWrapper from 'libs/components/card-wrapper'
import Text from 'libs/components/text'
import { toStandardDate } from 'libs/utils/dateUtil'
import DatePicker from 'libs/components/date-picker'
import Button from 'libs/components/button'
import Card from 'libs/components/card'
import { ExportToCsv } from 'export-to-csv';

const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Entries',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};

const csvExporter = new ExportToCsv(options);


function Entries() {


    const [getEntries, { data, loading, error }] = useLazyQuery(GET_ENTRIES)

    const history = useHistory()
    const location = useLocation()

    const [fromDate, setFromDate] = useState(toStandardDate(new Date()))
    const [toDate, setToDate] = useState(toStandardDate(new Date()))





    useEffect(() => {
        handleGetCustomRange()
    }, [])


    const handleGetCustomRange = () => {
        getEntries({
            variables: {
                toDate, fromDate
            }
        })
    }

    const handleExport = () => {
        if (data && data.entries) {
            const dataToExport = data.entries.map(entry => {
                const age = entry.age ? parseInt(entry.age) : ""
                const time = entry.time
                const gender = entry.gender
                const image = entry.image
                const is_banned = entry.banned ? "yes" : "no"

                return { time, gender, age, image, is_banned }

            })

            csvExporter.generateCsv(dataToExport);
        }
    }

    return (
        <ContentController
            testid="loans-page"
            tailwind="mb-16"
            data={data}
            error={error}
            loading={loading}
        >


            {data &&
                (

                    <>
                        <Card className="my-16 p-8">
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

                            <div className='grid grid-cols-2 gap-4 mt-4'>

                                <Button
                                    onClick={handleGetCustomRange}
                                    size='extra-small'
                                    loading={loading}
                                    variant='outline'
                                >Search</Button>

                                <Button
                                    onClick={handleExport}
                                    size='extra-small'
                                    loading={loading}
                                    variant='outline'
                                >Export</Button>

                            </div>
                        </Card>



                        <CardWrapper minWidth="6rem" tailwind="pb-1">





                            {/*  */}
                            <div
                                className={`grid grid-cols-3  py-4 px-2 md:px-6 border-b border-gray-200`}
                            >
                                <Text
                                >
                                    List
                                </Text>
                                <Text

                                >
                                    Date/Time of Entry
                                </Text>

                            </div>

                            {data.entries.map((item, index) => {
                                return (
                                    <Item
                                        onClick={(id) => {
                                            history.push("/view-entry?id=" + id);
                                        }}
                                        key={index}
                                        index={index}
                                        {...item}
                                        isGray={index % 2 === 0}
                                    />
                                );
                            })}
                        </CardWrapper>
                    </>
                )}
            <div className="h-16" />
        </ContentController>
    )
}


export default Entries

