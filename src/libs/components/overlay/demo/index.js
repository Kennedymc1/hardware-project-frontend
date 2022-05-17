import React from 'react';
import styled from 'styled-components';
import Text from '../../text';
import loremIpsum from '../../../constants/loremipsum'
import Overlay from '..';

const Container = styled.div`
background-color:${({ theme }) => theme.bgGray50};
min-height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`
const Demo = () => {
    return (
        <Container>
        <Text>{loremIpsum}</Text>

<Overlay />
        </Container>
    );
};

export default Demo;