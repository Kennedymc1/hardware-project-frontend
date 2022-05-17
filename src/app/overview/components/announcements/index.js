import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'libs/components/button'
import changelog from 'app/changelog'
import { useHistory } from 'react-router-dom'



function Announcements({ tailwind, className }) {

    const history = useHistory()

    return (
        <section aria-labelledby="announcements-title "
            className={`${tailwind} ${className}`}>
            <div className="rounded-lg bg-white overflow-hidden shadow">
                <div className="p-6">
                    <h2 className="text-base font-medium text-gray-900" id="announcements-title">
                        Announcements
                    </h2>
                    <div className="flow-root mt-6">
                        <ul className="-my-5 divide-y divide-gray-200">
                            {changelog.map((log, index) => {

                                if ( index < 4) {
                                    return <li key={index} className="py-5">
                                        <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                            <div className='w-full flex justify-between'>
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    {log.title}
                                                </h3>

                                                <p className='text-sm text-gray-400'>{log.date}</p>
                                            </div>

                                            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{log.content}</p>
                                        </div>
                                    </li>
                                }
                            })}
                        </ul>
                    </div>
                        <div className="mt-6">
                            <Button
                                variant='outline'
                                onClick={() => history.push('/changelog')}
                                className="w-full"
                            >
                                View all
                            </Button>
                        </div>
                    
                </div>
            </div>
        </section >
    )
}

Announcements.propTypes = {

}

export default Announcements

