import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navigation from 'libs/components/navigation'
import NavItem from 'libs/components/navigation/navitem'
import SecondaryNav from 'libs/components/navigation/secondary-nav'
import SecondaryNavItem from 'libs/components/navigation/secondary-nav/secondary-nav-item'



/**
 * 
 * @param children be NavItem objects 
 */
const Sidebar = ({ variant, logo, setSelectedId, selectedId, navItems,
    secondaryNavItems, secondaryNavTitle }) => {
    const isDarkVariant = (variant === 'dark')

    const handleItemClick = (id) => {
        setSelectedId(null)
        setSelectedId(id)
    }

    return (
        <div className={`h-full hidden md:block border-r border-gray-200 pr-4 fixed z-30 overflow-y-auto 
        ${isDarkVariant ? 'bg-gray-800' : 'bg-white'}`}>

            {logo}


            <div>
                <Navigation>
                    {
                        navItems.map(({ text, badgeText, icon, id }) => (
                            <NavItem
                                key={id}
                                id={id}
                                variant={variant}
                                isSelected={selectedId === id}
                                onSelected={() => handleItemClick(id)}
                                icon={icon}
                                badgeText={badgeText}
                            >{text}</NavItem>
                        ))
                    }

                    {secondaryNavItems &&
                        <SecondaryNav title={secondaryNavTitle}>
                            {
                                secondaryNavItems.map(({ text, id }) => (
                                    <SecondaryNavItem
                                        key={id}
                                        id={id}
                                        variant={variant}
                                        isSelected={selectedId === id}
                                        onSelected={() => handleItemClick(id)}>{text}</SecondaryNavItem>
                                ))
                            }
                        </SecondaryNav>
                    }
                </Navigation>
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    navItems: PropTypes.array,
    setSelectedIndex: PropTypes.func,
    selectedId: PropTypes.string,
    variant: PropTypes.oneOf(['dark', 'light']),
    logo: PropTypes.object.isRequired,
};

export default Sidebar;