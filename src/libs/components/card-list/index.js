import React from 'react';
import Card from 'libs/components/card';

const CardList = ({ children, tailwind, className }) => {

    return (
        <Card
            rounded
            tailwind={`w-full rounded-none md:rounded-lg  ${tailwind} ${className}`}>
            <ul>
                {
                    children.map((child, index) => {
                        if (index === 0) {
                            return React.cloneElement(child, {
                                showBorder: false,
                            })
                        } else {
                            return React.cloneElement(child, {
                                showBorder: true,
                            })
                        }
                    })
                }
            </ul>
        </Card>
    );
};

export default CardList;