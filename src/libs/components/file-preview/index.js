import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Text from '../text'
import { XCircleIcon } from '@heroicons/react/solid'
import Preview from './preview'
import { DownloadIcon, XCircleIcon as CancelOutline } from '@heroicons/react/outline'
import fileDownload from 'js-file-download'
import IconButton from '../iconbutton'

function FilePreview({ files, size, onDelete, showDelete, preview = true }) {


    const [previewSize, setPreviewSize] = useState('w-32 h-32')

    const [previewOpen, setPreviewOpen] = useState(false)
    const [previewFile, setPreviewFile] = useState()



    useEffect(() => {
        let tailwind

        switch (size) {
            case '2xl':
                tailwind = 'w-96 h-96'
                break
            case 'xl':
                tailwind = 'w-72 h-72'
                break
            case 'lg':
                tailwind = 'w-48 h-48'
                break
            default:
                tailwind = 'w-32 h-32'
                break
        }

        setPreviewSize(tailwind)
    }, [size])

    function handleDelete(index) {
        const items = [...files]
        items.splice(index, 1)
        onDelete && onDelete(items)
    }

    return (
        <div className='w-full flex flex-wrap my-4 justify-center'>

            {preview &&
                <Preview
                    open={previewOpen}
                    setOpen={setPreviewOpen}
                    file={previewFile}
                />
            }

            {files && files.map((file, index) => {
                if (file && file.file) {
                    if (file.contentType === 'image/png' || file.contentType === 'image/jpeg') {
                        return <div
                            data-testid='file-item'
                            key={index}
                            className={`${previewSize}  relative m-2   ${preview && ' cursor-pointer duration-300 transform hover:scale-110'}`}
                            onClick={() => {
                                if (preview) {
                                    setPreviewFile(file)
                                    setPreviewOpen(true)
                                }
                            }}>

                            {showDelete &&
                                <IconButton
                                    onClick={() => {
                                        handleDelete(index)
                                    }}
                                    hasBackground={false}
                                    hover
                                    color
                                    tailwind={`absolute z-10 top-0 right-0 w-8 h-8 text-red-600`}
                                    src={<XCircleIcon />}
                                />
                            }

                            <img src={file.file} className={`${previewSize} object-cover relative rounded shodow-md border border-gray-100 `} />
                        </div>

                    } else {
                        return <div
                            data-testid='file-item'
                            key={index}
                            className={`${previewSize} relative m-2 rounded shodow-md border border-gray-300 flex justify-center items-center flex-col ${preview && 'cursor-pointer  duration-300 transform hover:scale-110'}`}
                            onClick={() => {
                                if (preview) {
                                    setPreviewFile(file)
                                    setPreviewOpen(true)
                                }
                            }}>
                            {showDelete &&

                                <IconButton
                                    onClick={() => handleDelete(index)}
                                    hasBackground={false}
                                    hover
                                    color
                                    tailwind='absolute z-10 top-0 right-0 w-8 h-8  text-red-600 '
                                    src={<CancelOutline />}
                                />
                            }

                            <Text
                                color
                                tailwind='semi-bold text-gray-500'
                            >{file.file.name ? file.file.name : file.fileName}</Text>

                        </div>
                    }
                }
            })
            }
        </div>
    )
}

FilePreview.defaultProps = {
    size: 'sm'
}
FilePreview.propTypes = {
    size: PropTypes.oneOf(['sm', 'lg', 'xl'])

}

export default FilePreview

