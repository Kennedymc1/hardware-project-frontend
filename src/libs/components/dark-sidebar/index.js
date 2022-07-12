import React from 'react'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    MenuIcon,
    SupportIcon,
    XIcon,
} from '@heroicons/react/outline'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'
import Avatar from '../avatar'
import useAuth from 'libs/auth-react/hooks/useAuth'
import { useLocation } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

/**
 * 
 * @param {func} selectedItemIndex
 *  
 * @returns 
 */
const DarkSidebar = ({ testid, navItems, logo, profile, children, onHelp, onLogout }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
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
        setSidebarOpen(false)
    }

    return (
        <div data-testid={testid} className="h-screen flex overflow-hidden bg-gray-100">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 flex z-40 md:hidden"
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="p-2 h-16"
                                        src={logo}

                                    />
                                </div>
                                <nav className="mt-5 px-2 space-y-1">
                                    {navItems.map((item) => (
                                        <div
                                            onClick={() => onNavClick(item)}
                                            key={item.name}
                                            className={classNames(
                                                (item.href === selectedItem.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md  cursor-pointer'
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    (item.href === selectedItem.href) ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                    'mr-4 flex-shrink-0 h-6 w-6'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </div>
                                    ))}
                                </nav>
                            </div>
                            <div>
                                {onHelp &&
                                    <div onClick={onHelp} className='p-4 flex items-center text-gray-300 text-sm font-medium hover:text-white cursor-pointer'><SupportIcon className='w-6 h-6 mr-2' /><p>Help</p></div>
                                }
                                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                                    <div onClick={() => onLogout ? onLogout() : logout()} className="flex-shrink-0 group block">
                                        <div className="flex items-center">
                                            <div>
                                                <Avatar
                                                    className="inline-block h-10 w-10 rounded-full"
                                                    src={profile.picUrl}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-base font-medium text-white">{profile.name ? profile.name : profile.email}</p>
                                                <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">Logout</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col h-0 flex-1 bg-gray-800">
                        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img
                                    className="p-2 h-16"
                                    src={logo}

                                />
                            </div>
                            <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                                {navItems.map((item) => (
                                    <div
                                        onClick={() => onNavClick(item)}
                                        key={item.name}
                                        className={classNames(
                                            (item.href === selectedItem.href) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                (item.href === selectedItem.href) ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </div>
                                ))}
                            </nav>
                        </div>
                        <div>
                            {onHelp &&
                                <div onClick={onHelp} className='p-4 flex items-center text-gray-300 text-sm font-medium hover:text-white cursor-pointer'><SupportIcon className='w-6 h-6 mr-2' /><p>Help</p></div>
                            }
                            <div className="flex-shrink-0 flex bg-gray-700 p-4 ">
                                <div onClick={() => onLogout ? onLogout() : logout()} className=" w-full group block cursor-pointer">
                                    <div className="flex items-center">

                                        <div className='flex-shrink-0'>

                                            <Avatar
                                                className="inline-block rounded-full h-9 w-9"
                                                src={profile.picUrl}
                                                alt=""
                                            />
                                        </div>

                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-white break-all w-full">{profile.name ? profile.name : profile.email}</p>
                                            <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">Logout</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-0 flex-1 h-full overflow-hidden">
                <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>


                <main className="flex-1 h-full relative z-0 overflow-y-auto focus:outline-none">
                    <div className="py-6  h-full ">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-2xl font-semibold text-gray-900">{selectedItem.name}</h1>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

DarkSidebar.defaultProps = {
    profileHref: '/profile'
}

DarkSidebar.propTypes = {
    profileHref: PropTypes.string,
    navItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.func,
        href: PropTypes.string,
    })).isRequired,
    logo: PropTypes.string.isRequired,
    profile: PropTypes.shape({
        picUrl: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
    }),

}
export default DarkSidebar
