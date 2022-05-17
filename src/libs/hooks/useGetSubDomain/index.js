


import { getSubDomain } from "libs/utils/urlUtil";
import { useState, useEffect } from 'react'

const useGetSubDomain = () => {

    const [hasSubDomain, setHasSubDomain] = useState()

    useEffect(() => {

        const subDomain = getSubDomain()

        if (subDomain) {
            setHasSubDomain(true)
        } else {
            setHasSubDomain(false)
        }
    }, [])

    return { hasSubDomain }
}

export default useGetSubDomain
