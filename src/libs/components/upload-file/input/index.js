import React from 'react'
import PropTypes from 'prop-types'
import FileResizer from 'react-image-file-resizer';


/**
 * 
 *TODO SET A LIMIT ON THE FILE SIZE
 */
function Input({ onChange, multiple, id, img }) {

    const resizeFile = (file) =>
        new Promise((resolve) => {
            FileResizer.imageFileResizer(
                file,
                1500,
                1500,
                "WEBP",
                80,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    return (
        <input
            multiple={multiple}
            onChange={async (e) => {
                const filelist = Array.from(e.target.files)
                const files = []


                await Promise.all(filelist.map(async (file) => {
                    let compressedFile

                    if (file.type === 'image/png' || file.type === 'image/jpeg') {
                        compressedFile = await resizeFile(file)
                        console.log('compressed file')
                    } else {
                        //TODO CONVERT FILE INTO A DATA STRING AS RIGHT NOW IT IS FILE PROMISE
                        console.log('havent compressed file')
                        compressedFile = file
                    }

                    console.log({ compressedFile })

                    files.push({
                        file: compressedFile,
                        contentType: file.type
                    })
                }))

                onChange(files)
            }}
            id={id} name={id}
            type="file"
            className="sr-only"
            accept={img ? "image/png, image/jpeg" : "*"} />
    )
}

Input.propTypes = {

}

export default Input

