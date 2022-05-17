import React from 'react';
import PropTypes from 'prop-types';
import Button from 'libs/components/button'
import TextInput from 'libs/components/textinput'
import Avatar from 'libs/components/avatar'
//import { ReactComponent as ImgSVG } from '../images/img.svg'
import Text from 'libs/components/text'
import Icon from 'libs/components/icon'
import Wrapper from 'libs/components/wrapper'
import FieldInput from 'libs/components/fieldinput'


const contentStyle = 'w-full'

const FormItem = ({ title, content, hint, placeholder, avatarSrc, id, value, helpText,
    onChange, tailwind, className }) => {


    const getContentComponent = () => {
        switch (content) {
            case 'text-area':
                return <FieldInput
                    onChange={onChange}
                    value={value}
                    id={id}
                    helpText={helpText}
                    element='text-area'
                    tailwind={contentStyle}
                    placeholder={placeholder} />

            case 'field-input':
                return <FieldInput
                    id={id}
                    onChange={onChange}
                    value={value}
                    helpText={helpText}
                    tailwind={contentStyle}
                    placeholder={placeholder} />

            case 'photo-change':
                return <div className={`${contentStyle} flex`}>
                    <Avatar
                        src={avatarSrc}
                        tailwind='w-12 h-12'
                    />
                    <div className='flex items-center'>
                        <Button
                            id={id}
                            tailwind='border border-gray-300 ml-4'
                            size='extra-small'
                            variant='outline'>Change</Button>
                    </div>

                </div>

//todo add this back when its needed, the icon should be a png and not an svg
           /* case 'file-upload':
                return <Wrapper
                    id={id}
                    onClick={() => console.log('drag and drop image')}
                    tailwind={`cursor-pointer p-4 rounded ${contentStyle} flex flex-col items-center border border-dashed border-gray-400`}>
                    <Icon
                    png
                        size
                        color
                        tailwind='w-12 h-12 text-gray-500'
                        hasBackground={false}
                        src={<ImgSVG />}
                    />
                    <Text type='small'><span className='text-indigo-600'>Upload a file</span> or drag and drop PNG,JPG, Gif up to 10MB</Text>
                </Wrapper>*/

        }
    }

    return (
        <div className={`mx-1 w-full ${tailwind} ${className}`}>
            <Text
                color
                textSize
                tailwind={`font-bold text-gray-800 mt-4 text-sm`} >
                {title} </Text>

            <div className='w-full mt-2'>
                {getContentComponent()}
            </div>

            {hint &&
                <Text type='text-small' >{hint}</Text>
            }
        </div>
    );
};

FormItem.defaultProps = {
    //fileUploadText: ''
}
FormItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOf(['text-area', 'photo-change', 'file-upload', 'field-input']),
    placeholder: PropTypes.string,
    hint: PropTypes.string,
    avatarSrc: PropTypes.string,
    helpText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default FormItem;