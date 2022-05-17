import React from 'react';
import SideBarLayout from '../..';
import sidebarData from '../sidebar-data';
import Logo from '../../../logo';
import { ReactComponent as LogoSVG } from '../images/logo.svg'

const link = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const Demo = props => {

    const logo = () => {
        return <Logo
            text='Afrocoder'
            color='text-white'
            icon={<LogoSVG />}
        />
    }

    const menuItems = ['Your Profile','Settings', 'Sign out']

    return (
        <SideBarLayout
            menuItems={menuItems}
            variant='light'
            title='Dashboard'
            logo={logo}
            sidebar={sidebarData}
            profile={{
                picUrl: link,
                name: 'Shaggy Mundia',
                email: 'afrocoderzm@gmail.com',
            }}
        >
            <div className="px-6 py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-64 "></div>
            </div>
        </SideBarLayout>
    );
};


export default Demo;