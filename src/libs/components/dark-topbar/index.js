import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router'
import Avatar from '../avatar'
import useAuth from 'libs/auth-react/hooks/useAuth'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const profileOptions = ['Sign out']

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DarkTopbar = ({ showProfile, testid, navItems, logo, profile, children, onLogout }) => {

    const [selectedItem, setSelectedItem] = useState(navItems[0])


    const history = useHistory()
    const location = useLocation()

    /**
    * 
    * @param {*} location 
    */
    const determineSelectedItem = (location) => {
        let selectedItem

        navItems.map((item, index) => {
            if (index > 0) {
                if (location.pathname.includes(item.href)) {
                    if (!selectedItem) {
                        selectedItem = item
                    }
                }
            }
        })

        if (!selectedItem) {
            selectedItem = navItems[0]
        }

        setSelectedItem(selectedItem)
    }

    useEffect(() => {
        //determining the initial selected Item based on the pathname
        determineSelectedItem(location)
    }, [navItems])

    history.listen(location => determineSelectedItem(location))


    const { logout } = useAuth()
    /**
     * 
     */
    const onNavClick = (item) => {
        setSelectedItem(item)
        history.push(item.href)
        // setSidebarOpen(false)
    }


    return (
        <div data-testid={testid} className='h-full'>
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8"
                                            src={logo}
                                            alt="Logo"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navItems.map((item, itemIdx) =>
                                                <Fragment key={item.href}>
                                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                    <div
                                                        data-testid={item.testid}
                                                        onClick={() => onNavClick(item)}
                                                        className={`px-3 py-2 cursor-pointer rounded-md text-sm font-medium ${(item.href === selectedItem.href) ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                                                        {item.name}
                                                    </div>
                                                </Fragment>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}

                                        <Menu as="div" className="ml-3 relative">
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                            <span className="sr-only">Open user menu</span>
                                                            <Avatar
                                                                className="inline-block h-8 w-8 rounded-full"
                                                                src={showProfile ? profile.picUrl : ''}
                                                                alt=""
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            static
                                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        >
                                                            {profileOptions.map((item) => (
                                                                <Menu.Item key={item}>
                                                                    {({ active }) => (
                                                                        <div
                                                                            overview onClick={() => onLogout ? onLogout() : logout()}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100' : '',
                                                                                'block px-4 py-2 text-sm text-gray-700'
                                                                            )}
                                                                        >
                                                                            {item}
                                                                        </div>
                                                                    )}
                                                                </Menu.Item>
                                                            ))}
                                                        </Menu.Items>
                                                    </Transition>
                                                </>
                                            )}
                                        </Menu>

                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item, itemIdx) =>

                                    <Fragment key={item.href}>
                                        <Disclosure.Button className='w-full'>
                                            <div
                                                data-testid={item.testid}
                                                onClick={() => onNavClick(item)}
                                                className={`w-full cursor-pointer flex block px-3 py-2 rounded-md text-base font-medium ${(item.href === selectedItem.href) ? 'bg-gray-900 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                                                {item.name}
                                            </div>
                                        </Disclosure.Button>
                                    </Fragment>

                                )}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                {showProfile &&
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <Avatar
                                                className="inline-block h-10 w-10 rounded-full"
                                                src={profile.picUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-3">
                                            <div className="text-base font-medium leading-none text-white break-all">{profile.name}</div>
                                            <div className="text-sm font-medium leading-none text-gray-400 break-all">{profile.email}</div>
                                        </div>
                                    </div>
                                }

                                <div className="mt-3 px-2 space-y-1">
                                    {profileOptions.map((item, index) => (
                                        <Disclosure.Button key={index} className='w-full'>
                                            <div
                                                key={item}
                                                onClick={() => onLogout ? onLogout() : logout()}
                                                className="block px-3 py-2 flex rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item}
                                            </div>
                                        </Disclosure.Button>
                                    ))}
                                </div>

                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">{selectedItem.name}</h1>
                </div>
            </header>
            <main className='h-full'>
                <div className="max-w-7xl mx-auto py-6 px-2 sm:px-6 lg:px-8 h-full">
                    {children}
                </div>
            </main>
        </div>
    )
}



DarkTopbar.defaultProps = {
    showProfile: true
}

DarkTopbar.propTypes = {
    showProfile: PropTypes.bool,
    navItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
    })).isRequired,
    logo: PropTypes.string.isRequired,
    profile: PropTypes.shape({
        picUrl: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
    }),

}
export default DarkTopbar