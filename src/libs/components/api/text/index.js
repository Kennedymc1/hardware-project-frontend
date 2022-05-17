import styled from 'styled-components'
import Text from 'libs/components/text'
import React from 'react';
import PropTypes from 'prop-types';

export const Heading = styled.h2`
font-size: 1.875rem;
    line-height: 3rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
    margin-top:3rem;
    font-family: brandon-grotesque,"helvetica neue",helvetica,sans-serif;
`

export const TopHeading = styled(Heading)`
    margin-top:0rem;
`

const ContentText = styled.p`

line-height: 1.5rem;


margin-bottom: 1.5rem;

display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`

export const Content = ({children}) => {
    return (
        <ContentText
        tailwind={'text-gray-900'}
        color>
            {children}
        </ContentText>
    );
};


