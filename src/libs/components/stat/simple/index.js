import React from 'react';
import Item from './item';

const Simple = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>

            <Item 
            title='Total Subscribers'
            value='71,534'/>

<Item 
            title='Avg. Open Rate'
            value='58.34%'/>

<Item 
            title='Avg. Click Rate'
            value='22.54%'/>
            
        </div>
    );
};

export default Simple;