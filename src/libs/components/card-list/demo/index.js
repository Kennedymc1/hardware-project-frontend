import React from 'react';
import CardList from '..'
import CardItem from '../card-item';

const Demo = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex items-center'>
            <CardList>
                <CardItem><p>test</p></CardItem>
                <CardItem><p>test 1</p></CardItem>
                <CardItem><p>test 2</p></CardItem>
                <CardItem><p>test 3</p></CardItem>

            </CardList>
        </div>
    );
};

export default Demo;