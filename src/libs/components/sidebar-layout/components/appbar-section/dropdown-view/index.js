import React from 'react';
import Dialog from 'libs/components/dialog';
import PropTypes from 'prop-types'
import Tab from 'libs/components/tab'
import { ReactComponent as CancelSVG } from '../../../images/cancel.svg'
import Avatar from 'libs/components/avatar'
import Text from 'libs/components/text'
import MenuIconButton from '../menu-iconbutton';

const DropDownView = ({ profile, logo, navItems, showDropdown, setShowDropDown, selectedId, onTabClick,
    menuItems,onMenuItemClicked }) => {

    return (
        <div>
            <Dialog
                isShown={showDropdown}
                
                variant='absolute-basic'>
                <div className={`bg-white py-2 `}>
                    <div className='flex justify-between p-4'>
                        {
                            React.cloneElement(logo, {
                                showText: false,
                            })
                        }

                        <MenuIconButton
                            onClick={() => {
                                setShowDropDown(false)
                            }}
                            src={<CancelSVG />} />

                    </div>
                    <div>
                        {
                            navItems.map(({ id, text }) => (
                                <Tab
                                    id={id}
                                    key={id}
                                    tailwind=' mb-1'
                                    textAlign='left'
                                    isSelected={id === selectedId}
                                    onClick={() => onTabClick(id)}
                                    variant='gray'
                                >{text}</Tab>
                            ))
                        }

                        <div className='my-4 h-px w-full bg-gray-300' />

                        <div className='flex px-6 my-6'>
                            <Avatar
                            id='avatar'
                                size='large'
                                src={profile.picUrl} />

                            <div className='mx-2 flex flex-col justify-center'>
                                <Text
                                    tailwind='font-medium text-gray-800'
                                    color>
                                    {profile.name}
                                </Text>
                                <Text
                                    type='text-small'
                                    tailwind='text-gray-600 font-medium'
                                    color>
                                    {profile.email}
                                </Text>
                            </div>

                        </div>

                        {
                            menuItems.map(({ id, text }, index) => (
                                <Tab
                                    id={id}
                                    key={index}
                                    tailwind='py-2 mb-1'
                                    textAlign='left' 
                                    onClick={() =>{
                                        onMenuItemClicked(index)
                                         setShowDropDown(false)
                                    }}
                                    variant='gray'
                                >{text}</Tab>
                            ))
                        }
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

DropDownView.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object),
    menuItems: PropTypes.arrayOf(PropTypes.string),
    showDropdown: PropTypes.bool,
    setShowDropdown: PropTypes.func,
    profile: PropTypes.object,
    onTabSelected: PropTypes.func,
    selectedId: PropTypes.string,
}

export default DropDownView;