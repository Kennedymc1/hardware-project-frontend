import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Text from 'libs/components/text'

var { io } = require('socket.io-client');
const socket = io('http://ec2-18-188-141-169.us-east-2.compute.amazonaws.com/')


function Debug(props) {

    const [liveFeed, setLiveFeed] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [detectedFaces, setDetectedFaces] = useState(0)

    function _arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }


    useEffect(() => {
        socket.on("showStream", (data) => {
            console.log({ data })
            const base64 = _arrayBufferToBase64(data)
            console.log({ base64 })
            console.log("feed recieved")
            setLiveFeed("data:image/png;base64, " + base64)
        })
    }, [])

    useEffect(() => {
        socket.on("faceData", (data) => {
            setAge(data.age)
            setGender(data.gender)
            setDetectedFaces(data.detectedFaces)

        })
    }, [])

    return (
        <div>
            <Text
                className={"mt-16"}
                type='heading-small'>Live Feed</Text>

            <div className='pb-8'>
                <Text>Number of detected faces: {detectedFaces} </Text>

                {age && <Text>Probable Age of Person: {age}</Text>}

                {gender && <Text>Gender: {gender}</Text>}
            </div>

            <div className='lg:px-32'>
                {liveFeed && <img
                    className='w-full'
                    src={liveFeed}
                    alt="livefeed"
                />}
            </div>

        </div>
    )
}

Debug.propTypes = {}

export default Debug
