import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'
import styled from 'styled-components'
import CodeBox from 'libs/components/code-box'
import DescList from 'libs/components/description-list'
import { Content } from 'libs/components/api/text'

const Get = styled.p`
color: #2e8ab8;
font-weight: 700;
    margin-right: .75rem;
    text-decoration: none;
    font-size: 112.5%;
    line-height: 1.5rem;
`

const Post = styled(Get)`
color: #8ab82e;
`

const Route = styled.code`
margin-bottom: 1.5rem;
background-color: #f5f5f7;
    font-weight: 700;
    padding: .1875rem .375rem;
    white-space: normal;
    font-family: monospace;
    color: #41465a;
    font-size: 112.5%;
    line-height: 1.5rem;
`

const ApiHeading = styled.h3`
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

const ExampleResponse = styled(Content)`
font-weight: 600;

`


const Request = ({ id, method, path, title, tabs, inputParameters, description, outputParameters, sampleResponse, showScript, codeSnippet }) => {

  const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
  const [inputParams, setInputParams] = useState(inputParameters)
  const [outputParams, setOutputParams] = useState(outputParameters)

  useEffect(() => {
    if (tabs) {
      const tab = tabs[tabSelectedIndex]
      setInputParams(typeof (tab.inputParams) === 'undefined' ? inputParameters : tab.inputParams)
      setOutputParams(typeof (tab.outputParams) === 'undefined' ? outputParameters : tab.outputParams)
    }

  }, [tabSelectedIndex])

  return (
    <div id={id} className='py-8'>
      <ApiHeading>{title}</ApiHeading>

      <div className='flex'>
        {method === 'get' ?
          <Get>GET</Get>
          :
          <Post>POST</Post>
        }

        <Route>{path}</Route>

      </div>


      <Content>{description}</Content>

      {inputParams &&
        <div className='my-6'>
          <DescList
            mobileFlat={false}
            heading='Input parameters'
            children={inputParams.props.children}
            horizontal />
        </div>
      }

      {outputParams &&

        <div className='my-10'>
          <DescList
            mobileFlat={false}
            children={outputParams.props.children}
            heading='Output parameters'
            horizontal />

        </div>
      }

      {tabs &&
        <>
          <ExampleResponse className='my-4'>Example Request</ExampleResponse>

          <CodeBox tabs={tabs}
            onTabSelected={index => setTabSelectedIndex(index)}
            script={showScript}>{codeSnippet}</CodeBox>
        </>
      }

      <ExampleResponse className='my-4'>Example Response</ExampleResponse>

      <CodeBox showCopy={false}>{sampleResponse}</CodeBox>
    </div>
  );
};

Request.defaultProps = {
  showScript: false
}

Request.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    code: PropTypes.object,
    script: PropTypes.bool,
    copyText: PropTypes.string,
    inputParams: PropTypes.object,
    outputParams: PropTypes.object,

  })),
  method: PropTypes.oneOf(['get', 'post']),
  path: PropTypes.string
};

export default Request;
