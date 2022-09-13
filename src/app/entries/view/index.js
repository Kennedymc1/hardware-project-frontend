import React from 'react'
import PropTypes from 'prop-types'
import DescriptionList from 'libs/components/description-list'
import DescItem from 'libs/components/description-list/desc-item'
import sample from 'images/sample.jpg'
import { GET_ENTRY } from '../constants/GqlQueries'
import { useLazyQuery, useQuery } from '@apollo/client'
import ContentController from 'libs/components/content-controller'
import useSearchParam from 'app/hooks/useSearchParam'

function ViewEntry(props) {

    const [getEntry, { data: entryData, loading: entryLoading, error: entryError }] = useLazyQuery(GET_ENTRY)

    useSearchParam('id', id => {
        getEntry({
            variables: {
                id
            }
        })
    })

    return (
        <ContentController
            data={entryData}
            loading={entryLoading}
            error={entryError}
        >
            {entryData &&
                <DescriptionList heading="Entry Snapshot">
                    
                    <DescItem title="Date and time of Entry" content={entryData.entry.time} />
                    <DescItem title="Temperature of Person" content={`${entryData.entry.temperature} degrees celcius`} />

                    <div customcontent className='flex p-12 w-full items-center justify-center '>

                        <img src={"data:image/png;base64, " + entryData.entry.image.data} className={`w-96  rounded-md object-cover relative rounded shodow-md border border-gray-100 `} />

                    </div>
                </DescriptionList>


            }
        </ContentController>
    )
}

ViewEntry.propTypes = {}

export default ViewEntry
