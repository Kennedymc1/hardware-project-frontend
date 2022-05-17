import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import styled from 'styled-components'
import CodeBox from 'libs/components/code-box'
import DescList from 'libs/components/description-list'
import { Content } from 'libs/components/api/text'



const Heading = styled.h3`
    font-family: brandon-grotesque,"helvetica neue",helvetica,sans-serif;
    font-size: 1.25rem;
    line-height: 3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: block;
    color: #41465a;
        margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px
`



const Request = ({ codeSnippet, title, tabs, description, parameters, outputParameters, id, showScript }) => {

    const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
    const [inputParams, setInputParams] = useState(parameters)
    const [outputParams, setOutputParams] = useState(outputParameters)
    const [finalInputParams, setFinalInputParams] = useState(parameters)

    useEffect(() => {
        if (inputParams) {
            const params = []
            if (inputParams.props.children.length > 1) {
                inputParams.props.children.map(child => {
                    const newParam = React.cloneElement(child, {
                        isJs: true
                    })

                    params.push(newParam)
                })
            } else {
                const newParam = React.cloneElement(inputParams.props.children, {
                    isJs: true
                })

                params.push(newParam)
            }
            setFinalInputParams(params)

        }
    }, [inputParams])

    useEffect(() => {
        if (tabs) {
            const tab = tabs[tabSelectedIndex]
            setInputParams(tab.inputParams !== 'undefined' ? tab.inputParams : parameters)
            setOutputParams(tab.outputParams !== 'undefined' ? tab.outputParams : outputParameters)
        }

    }, [tabSelectedIndex])

    return (
        <div
            id={id}
            className='py-8'>
            <Heading>{title}</Heading>

            <Content>{description}</Content>

            <CodeBox tabs={tabs}
                onTabSelected={index => setTabSelectedIndex(index)}
                script={showScript}>{codeSnippet}</CodeBox>

            {finalInputParams &&
                <div className='my-6'>
                    <DescList
                        mobileFlat={false}
                        heading='Arguments'
                        children={finalInputParams}
                        horizontal />
                </div>
            }
            {outputParams &&

                <div className='my-10'>
                    <DescList
                        mobileFlat={false}
                        children={outputParams.props.children}
                        heading='Response'
                        horizontal />

                </div>
            }

        </div>
    );
};

Request.defaultProps = {
    showScript: true
}

Request.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        code: PropTypes.object,
        script: PropTypes.bool,
        copyText: PropTypes.string,
        inputParams: PropTypes.object,
        outputParams: PropTypes.object,

    }))
};

export default Request;