import { useEffect } from 'react'
import Cookies from 'universal-cookie';
import { getOptions } from 'libs/utils/authUtil'


const COOKIE_SOURCE = 'utm_source'
const COOKIE_MEDIUM = 'utm_medium'
const COOKIE_CAMPAIGN = 'utm_campaign'
const COOKIE_CONTENT = 'utm_content'
const COOKIE_TERM = 'utm_term'


const cookies = new Cookies();

if (process.env.NODE_ENV === 'test') {
    cookies.HAS_DOCUMENT_COOKIE = false
}

const useHandleUtm = () => {


    useEffect(() => {
        const url = new URL(window.location.href);
        const source = url.searchParams.get("utm_source");
        const medium = url.searchParams.get("utm_medium");
        const campaign = url.searchParams.get("utm_campaign");
        const content = url.searchParams.get("utm_content");
        const term = url.searchParams.get("utm_term");

        source && cookies.set(COOKIE_SOURCE, source, getOptions())
        medium && cookies.set(COOKIE_MEDIUM, medium, getOptions())
        campaign && cookies.set(COOKIE_CAMPAIGN, campaign, getOptions())
        content && cookies.set(COOKIE_CONTENT, content, getOptions())
        term && cookies.set(COOKIE_TERM, term, getOptions())

    }, [])

    /**
     * 
     */
    const getUtms = () => {
        const source = cookies.get(COOKIE_SOURCE)
        const medium = cookies.get(COOKIE_MEDIUM)
        const campaign = cookies.get(COOKIE_CAMPAIGN)
        const content = cookies.get(COOKIE_CONTENT)
        const term = cookies.get(COOKIE_TERM)

        return {
            source, medium, campaign, content, term
        }
    }

    return { getUtms }
}

export default useHandleUtm