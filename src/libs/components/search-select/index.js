/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, SearchIcon } from '@heroicons/react/solid'

import PropTypes from 'prop-types'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function SearchSelect({ options, onChange, value, label, onSearchChange, placeholder, onOpen }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        onOpen && onOpen(isOpen)
    }, [isOpen])


    return (
        <Listbox value={value} onChange={onChange}>
            {() => (
                <>
                    <Listbox.Label className="block text-sm font-medium text-gray-700">{label}</Listbox.Label>
                    <div className="mt-1 relative">
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Listbox.Button
                                className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{value && value.text}
                                    <span className={'text-gray-500 ml-2 truncate'}>
                                        {value && value.grayText}
                                    </span>
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                        </div>


                        <Transition
                            show={isOpen}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute z-10 shadow-lg w-full bg-white mt-1 ring-black ring-opacity-5">
                                <div>
                                    <label htmlFor="search-candidate" className="sr-only">
                                        Search
                                    </label>
                                    <div className="flex ">
                                        <div className="relative flex-grow">

                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>


                                            <input
                                                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                                                type="text"
                                                name="search-candidate"
                                                id="search-candidate"
                                                className="w-full pl-10  sm:text-sm border-gray-300 border-b rounded-t-md outline-none"
                                                placeholder={placeholder}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <Listbox.Options
                                    onClick={() => setIsOpen(false)}
                                    static
                                    className=" w-full bg-white  max-h-60 rounded-b-md py-1 text-base ring-1  overflow-auto focus:outline-none sm:text-sm"
                                >

                                    {options.map((option) => (
                                        <Listbox.Option
                                            key={option.id}
                                            className={({ active }) => 'text-gray-900 hover:text-white hover:bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9'
                                            }
                                            value={option}
                                        >

                                            {({ selected, active }) => (
                                                <>
                                                    <div className='flex'>
                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                            {option.text}
                                                        </span>
                                                        <span className={classNames(active ? 'text-indigo-200' : 'text-gray-500', 'ml-2 truncate')}>
                                                            {option.grayText}
                                                        </span>
                                                    </div>
                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </div>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}

SearchSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            grayText: PropTypes.string,

        }))
}

export default SearchSelect