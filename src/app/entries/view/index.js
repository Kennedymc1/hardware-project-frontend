import React from 'react'
import PropTypes from 'prop-types'
import DescriptionList from 'libs/components/description-list'
import DescItem from 'libs/components/description-list/desc-item'
import sample from 'images/sample.jpg'

function ViewEntry(props) {
    return (
        <DescriptionList heading="Entry Snapshot">
            <DescItem title="Date and time of Entry" content={"16 April, 2022  16:45"} />

            <div customcontent className='flex p-12 w-full items-center justify-center '>
                <img src={sample} className="w-96  rounded-md " />
            </div>
        </DescriptionList>
    )
}

ViewEntry.propTypes = {}

export default ViewEntry
