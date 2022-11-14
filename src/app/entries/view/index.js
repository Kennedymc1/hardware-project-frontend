import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DescriptionList from 'libs/components/description-list'
import DescItem from 'libs/components/description-list/desc-item'
import sample from 'images/sample.jpg'
import { BAN_ENTRY, GET_ENTRY } from '../constants/GqlQueries'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import ContentController from 'libs/components/content-controller'
import useSearchParam from 'app/hooks/useSearchParam'
import Toggle from 'libs/components/toggle'

function ViewEntry(props) {

    const [id, setId] = useState()

    const [getEntry, { data: entryData, loading: entryLoading, error: entryError }] = useLazyQuery(GET_ENTRY)
    const [setBanned] = useMutation(BAN_ENTRY)

    useSearchParam('id', id => {
        getEntry({
            variables: {
                id
            }
        })

        setId(id)
    })

    return (
        <ContentController
            data={entryData}
            loading={entryLoading}
            error={entryError}
        >
            {entryData &&
                <DescriptionList heading="Entry Snapshot">
                    <DescItem title="Is Banned" content={<div>
                        <Toggle
                            onToggle={value => {
                                setBanned({
                                    variables: {
                                        id,
                                        banned: value
                                    }
                                })
                            }}
                            value={entryData.entry.banned} />
                    </div>} />

                    <DescItem title="Date and time of Entry" content={entryData.entry.time} />
                    <DescItem title="Gender" content={entryData.entry.gender} />
                    <DescItem title="Probable Age" content={parseInt(entryData.entry.age)} />
                    {entryData.entry.temperature &&
                        <DescItem title="Temperature" content={`${entryData.entry.temperature} degrees celcius`} />
                    }

                    <div customcontent className='flex p-12 w-full items-center justify-center '>

                        <img src={entryData.entry.image} className={`w-96  rounded-md object-cover relative rounded shodow-md border border-gray-100 `} />

                    </div>
                </DescriptionList>


            }
        </ContentController>
    )
}

ViewEntry.propTypes = {}

export default ViewEntry
