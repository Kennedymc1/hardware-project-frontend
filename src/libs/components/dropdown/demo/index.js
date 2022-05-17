import React from 'react';
import styled from 'styled-components';
import Button from '../../button';
import DropDownItem from '../dropdownitem';
import DropDown from '..';


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
            <DropDown
                content={
                    <>
                        <DropDownItem >first</DropDownItem>
                        <DropDownItem >second</DropDownItem>
                        <DropDownItem >third</DropDownItem>
                        <DropDownItem >fourth</DropDownItem>
                    </>
                }>
                <Button>
                    DropDown
</Button>
            </DropDown>

        </Container>
    );
};

export default Demo;