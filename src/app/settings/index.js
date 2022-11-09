import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation, useQuery } from '@apollo/client'
import { GET_SETTINGS, SET_SETTINGS } from './constants/GqlQueries'
import ContentController from 'libs/components/content-controller'
import DescriptionList from 'libs/components/description-list'
import DescItem from 'libs/components/description-list/desc-item'
import Toggle from 'libs/components/toggle'
import Button from 'libs/components/button'
import ErrorAlert from 'libs/components/alert/error'

function Settings(props) {

    const [facemaskMode, setFacemaskMode] = useState()

    const { data, error, loading } = useQuery(GET_SETTINGS)
    const [setSettings, { loading: saveLoading, error: saveError }] = useMutation(SET_SETTINGS)


    useEffect(() => {
        if (data) {
            setFacemaskMode(data.settings.facemaskMode)
        }
    }, [data])

    const handleSave = () => {
        setSettings({
            variables: {
                settings: {
                    facemaskMode
                }
            }
        })
    }


    return (
        <ContentController
            data={data}
            loading={loading}
            error={error}
        >
            {data &&

                <div className='mt-8'>
                    <DescriptionList >
                        <DescItem title="Enable Face Mask Detection" content={<div>
                            <Toggle
                                onToggle={value => {
                                    setFacemaskMode(value)
                                }}
                                value={facemaskMode} />
                        </div>} />
                    </DescriptionList>

                    <Button
                    className={"mt-16"}
                        loading={saveLoading}
                        onClick={handleSave}
                        variant='outline'>Save</Button>

                    <ErrorAlert
                    tailwind='mt-16'
                        isShown={saveError}
                    />

                </div>
            }

        </ContentController>
    )
}

Settings.propTypes = {}

export default Settings
