import React from 'react'
import PropTypes from 'prop-types'
import { useQuery } from '@apollo/client'
import { GET_RECORDS } from '../constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import Card from 'libs/components/card'
import Item from '../item'

function History(props) {

    const { data: recordsData, loading: recordsLoading, error: recordsError } = useQuery(GET_RECORDS, { pollInterval: 3000 })

  return (
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
  )
}

History.propTypes = {}

export default History
