import React, { useEffect, useState } from 'react';
import SideBar from './components/sidebar'
import Content from './components/content'
import AppBarSection from './components/appbar-section'
import PropTypes from 'prop-types'
import Sidebar from './components/sidebar';


const SideBarLayout = ({ variant, onNavItemSelected, onMenuItemClicked, logo, children, profile,
    initialSelectedId, navItems, menuItems, showBell, showSearch, id, withHeadingView,
    heading, manualSelectedId, secondaryNavItems, secondaryNavTitle, contentPaddingLeft ,
    appBarSectionView}) => {

    const [selectedId, setSelectedId] = useState(initialSelectedId ? initialSelectedId : navItems[0].id)
    const [title, setTitle] = useState()

    const handleSetSelectId = (selectedId) => {
        onNavItemSelected(selectedId)
        handleSetTitle(selectedId)
    }

    const handleSetTitle = (selectedId) => {
        navItems.map(({ id, text }) => {
            if (selectedId === id) {
                setTitle(text)
            }
        })

        if (secondaryNavItems) {
            secondaryNavItems.map(({ id, text }) => {
                if (selectedId === id) {
                    setTitle(text)
                }
            })
        }
    }
    //todo fix this,setSelectedId is being forced to run twice 
    useEffect(() => {
        if (manualSelectedId) {
            setSelectedId(manualSelectedId)
            handleSetTitle(manualSelectedId)
        }
    }, [manualSelectedId])


    useEffect(() => {
        if (selectedId !== null) {
            handleSetSelectId(selectedId)
        }
    }, [selectedId])

    return (
        <div
            data-testid={id}
            className='flex min-h-screen'>
            <div className='hidden md:block'>
                <Sidebar
                    secondaryNavItems={secondaryNavItems}
                    secondaryNavTitle={secondaryNavTitle}
                    navItems={navItems}
                    id={id}
                    variant={variant}
                    logo={logo}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                />
            </div>

            <div className='w-full'>
                <AppBarSection
                appBarSectionView={appBarSectionView}
                    onMenuItemClicked={onMenuItemClicked}
                    menuItems={menuItems}
                    showSearch={showSearch}
                    showBell={showBell}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    navItems={navItems}
                    secondaryNavItems={secondaryNavItems}
                    secondaryNavTitle={secondaryNavTitle}
                    profile={profile}
                    logo={logo}
                />
                <Content
                    contentPaddingLeft={contentPaddingLeft}
                    withHeadingView={withHeadingView}
                    title={heading ? heading : title}
                >{children}</Content>
            </div>
        </div>
    );
};

SideBarLayout.defaultProps = {
    variant: 'dark',
    showBell: true,
    showSearch: true,
    contentPaddingLeft: 56,

}

SideBarLayout.propTypes = {
    //adding a custom appbar section view //note that the view is not added in mobile view
    appBarSectionView: PropTypes.object,
    initialSelectedId: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(['dark', 'light']),
    onNavItemSelected: PropTypes.func,
    onMenuItemClicked: PropTypes.func,
    secondaryNavItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
    })),
    secondaryNavTitle: PropTypes.string,
    navItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        icon: PropTypes.object,
        badgeText: PropTypes.string,
        text: PropTypes.string,
    })),
    //used to manually change the selected id
    manualSelectedId: PropTypes.func,
    menuItems: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    }),
    profile: PropTypes.shape({
        picUrl: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
    }),
    //a view that is added besides the heading
    withHeadingView: PropTypes.object,
    /** if the heading is null it uses the default heading which is the nav item headers */
    heading: PropTypes.string,



}

export default SideBarLayout;