import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DarkTopbar from 'libs/components/dark-topbar'
import DarkSidebar from 'libs/components/dark-sidebar'

/**
 * combination of dark topbar and dark sidebar
 */
function DarkDualBar(props) {

    const checkIsMobile = () => {
        const match = window.matchMedia(`(max-width: 640px)`);
        return match.matches
    }

    const [isMobile, setIsMobile] = useState(checkIsMobile)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(checkIsMobile());
        })
    }, [])


    return (
        isMobile ?
            <DarkTopbar
                {...props} logo={props.mobileLogo} 
                testid='mobile-dashboard'/>
                :
            <DarkSidebar
                {...props}
                 logo={props.desktopLogo}
                 testid='desktop-dashboard' />
    )
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
DarkDualBar.propTypes = {
    mobileLogo: PropTypes.string.isRequired,
    desktopLogo: PropTypes.string.isRequired,
    profile: PropTypes.shape({
        picUrl: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
    }),
    navItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.func,
        href: PropTypes.string,
    })).isRequired,
    onLogout: PropTypes.func
}

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default DarkDualBar

