import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'libs/components/iconbutton'
import { ReactComponent as MenuSVG } from '../../images/menu.svg'
import { ReactComponent as BellSVG } from '../../images/bell.svg'
import 'libs/components/fonts/index.css'

import Avatar from 'libs/components/avatar';
import Text from 'libs/components/text';
import AppBar from 'libs/components/appbar';

import { ReactComponent as SearchSVG } from '../../images/search.svg'
import FieldInput from 'libs/components/fieldinput'
import DropDown from 'libs/components/dropdown';
import DropDownItem from 'libs/components/dropdown/dropdownitem';
import MenuIconButton from './menu-iconbutton';
import DropDownView from './dropdown-view';




const AppBarSection = ({ menuItems, logo, profile, selectedId, setSelectedId, navItems, showSearch,
    showBell, onMenuItemClicked, secondaryNavItems, secondaryNavTitle, appBarSectionView }) => {

    const [showDropdown, setShowDropdown] = useState(false)


    const onTabClick = (id) => {
        setSelectedId(null)
        setSelectedId(id)
        setShowDropdown(false)
    }


    return (
        <div className='w-full fixed z-20'>
            <AppBar
                tailwind=' px-2 md:pr-6  md:pl-56'
                variant='light'>

                <div className='md:hidden flex justify-between w-full items-center'>

                    {
                        React.cloneElement(logo, {
                            showText: false,
                        })
                    }

                    <MenuIconButton
                        onClick={() => setShowDropdown(true)}
                        src={<MenuSVG />} />


                </div>
                <div className='hidden md:flex items-center justify-between w-full h-full'>

                    <Text
                        type='heading'
                        className='logo-text'
                        font
                        textSize
                        tailwind={`ml-4 text-2xl md:hidden ${logo.color}`}>
                        {logo.text}</Text>

                    <div className='flex justify-between w-full h-full '>

                        <div className='w-full h-full'>
                            {appBarSectionView &&
                                <div className='w-full h-full absolute'>
                                    {appBarSectionView}
                                </div>
                            }

                            <div className='flex items-center justify-between w-full h-full'>
                                {showSearch ?
                                    <FieldInput
                                        tailwind='w-64  '
                                        leadingIcon={<SearchSVG />}
                                        placeholder='Search'
                                    />
                                    :
                                    <div />
                                }



                                <div className='flex  items-center'>
                                    {showBell &&
                                        <div className='mx-2 '>
                                            <IconButton
                                                tailwind='hover:text-gray-600 hover:bg-gray-100 text-gray-500'
                                                color
                                                hover
                                                round={true}
                                                onClick={() => console.log('notifications clicked')}
                                                hasBackground={false}
                                                src={<BellSVG />} />
                                        </div>
                                    }
                                    <DropDown
                                        content={
                                            <>
                                                {
                                                    menuItems.map(({ id, text }, index) => (
                                                        <DropDownItem
                                                            id={id}
                                                            key={index}
                                                            onClick={() => onMenuItemClicked(index)}
                                                        >{text}</DropDownItem>
                                                    ))
                                                }
                                            </>
                                        }
                                    >
                                        <Avatar
                                            id='avatar'
                                            tailwind='cursor-pointer'
                                            src={profile.picUrl} />
                                    </DropDown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppBar>


            <DropDownView
                profile={profile}
                onTabClick={onTabClick}
                selectedId={selectedId}
                navItems={secondaryNavItems ? [...navItems, ...secondaryNavItems] : navItems}
                menuItems={menuItems}
                showDropdown={showDropdown}
                onMenuItemClicked={onMenuItemClicked}
                setShowDropDown={setShowDropdown}
                logo={logo}
            />
        </div>
    );
};

AppBarSection.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    showBell: PropTypes.bool.isRequired,
    profile: PropTypes.object,
    setSelectedId: PropTypes.func.isRequired,
    logo: PropTypes.object.isRequired,
    navItems: PropTypes.arrayOf(PropTypes.object),
    menuItems: PropTypes.arrayOf(PropTypes.string),

    selectedId: PropTypes.string.isRequired,
};

export default AppBarSection;