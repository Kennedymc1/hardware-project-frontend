import React from 'react'
import Stat from 'libs/components/stat'
import { useQuery } from '@apollo/client'
import { GET_STATS } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import { UserGroupIcon, UsersIcon } from '@heroicons/react/solid'
import { CashIcon, ClipboardIcon as ClipboardOutlineIcon } from '@heroicons/react/outline'
import { Line } from 'react-chartjs-2';
import Item from './item'
import { useHistory, useLocation } from 'react-router-dom'
import CardWrapper from 'libs/components/card-wrapper'
import Text from 'libs/components/text'


function Entries() {


    const { data, loading, error } = useQuery(GET_STATS)

    const history = useHistory()
    const location = useLocation()



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
                    <CardWrapper minWidth="6rem" tailwind="pb-1">
                        <div
                            className={`grid grid-cols-2  py-4 px-2 md:px-6 border-b border-gray-200`}
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
                )}
            <div className="h-16" />
        </ContentController>
    )
}


export default Entries

