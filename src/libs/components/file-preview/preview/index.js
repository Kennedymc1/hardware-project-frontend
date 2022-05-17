import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { DownloadIcon, XIcon } from '@heroicons/react/outline'
import IconButton from 'libs/components/iconbutton'
import fileDownload from 'js-file-download'
import Text from 'libs/components/text'

export default function Preview({ open, setOpen, file }) {


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" static className="fixed inset-0 overflow-hidden" open={open} onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">

                    <Dialog.Overlay className="absolute inset-0" />

                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="w-screen max-w-2xl">
                                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                                    <div className="px-4 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Preview</Dialog.Title>
                                            <div className="ml-3 h-7 flex items-center">
                                                <button
                                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 relative flex-1 px-4 sm:px-6">


                                        {file && (file.contentType === 'image/png' || file.contentType === 'image/jpeg') &&
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <img src={file.file} className={`w-full relative rounded shodow-md border border-gray-100 `} />
                                            </div>

                                        }

                                        {file && (file.contentType !== 'image/png' && file.contentType !== 'image/jpeg') &&
                                            <div className='w-full h-full flex items-center justify-center'>

                                                <div className={`w-full relative m-2 rounded shodow-md border border-gray-300 flex justify-center items-center flex-col`}>


                                                    <IconButton
                                                        onClick={() => {
                                                            console.log('download file')
                                                            fileDownload(file.file, file.fileName);
                                                        }}
                                                        hasBackground={false}
                                                        color
                                                        hover
                                                        tailwind='w-16 h-16 text-gray-400 '
                                                        src={<DownloadIcon />}
                                                    />

                                                    <Text
                                                        color
                                                        tailwind='semi-bold text-gray-500'
                                                    >{file.file.name ? file.file.name : file.fileName}</Text>

                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
