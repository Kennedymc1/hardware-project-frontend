import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'

const DescriptionItem = ({ title, content, tailwind, className, margin, listItems, widthFull }) => {
    return (
        <div className={`mx-4  px-4 md:px-12 relative my-8 flex flex-col items-center
         ${!margin && !widthFull && 'md:mx-16 lg:mx-48'} ${tailwind} ${className}`}>

            <Text
                tailwind='w-full md:text-center'
                type='heading-medium'>{title}</Text>
            <Text
                type='text-large'
                tailwind='mt-2 w-full text-gray-600 md:text-center'
                color>{content}</Text>

            {listItems &&
                <ul>
                    {
                        listItems.map(({ title, content }) => {
                            return <li>
                                <Text type='heading-small'>{title}</Text>
                                <Text>{content}</Text>

                            </li>
                        })
                    }
                </ul>
            }

        </div>
    );
};

const tailwindProps = {
    margin: false,
}

DescriptionItem.defaultProps = {
    ...tailwindProps,
}
DescriptionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.content,
    }))

};

export default DescriptionItem;