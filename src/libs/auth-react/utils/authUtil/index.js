import Cookies from 'universal-cookie';
import { BASE_URL, HTTP_URL, isDev } from '../url-util'
import { isEmail } from 'libs/utils/validatorUtil';

const cookies = new Cookies();

if (process.env.NODE_ENV === 'test') {
    cookies.HAS_DOCUMENT_COOKIE = false
}


export const getOptions = () => {
    const domain = '.' + BASE_URL

    const options = {
        maxAge: 5_184_000,
        path: '/',
        domain
    }

    const devOptions = {
        path: '/',
    }

    if (isDev) {
        return devOptions
    } else {
        return options
    }
}


const isTokenLoggedIn = (token) => {
    return token && token.length > 10
}

export const isLoggedIn = (cookieNames) => {
    const token = getToken(cookieNames)
    const loggedIn = isTokenLoggedIn(token)
    return loggedIn
}

export const getToken = (cookieNames) => {
    const token = cookies.get(cookieNames ? cookieNames.jwt : 'jwt', getOptions())
    return token
}

export const getEmail = (cookieNames) => {
    const email = cookies.get(cookieNames ? cookieNames.email : 'email', getOptions())
    return email
}

export const getUser = (cookieNames) => {
    const email = getEmail(cookieNames)
    const token = getToken(cookieNames)

    return { email, token }
}

export const signin = (token, email, cookieNames) => {
    cookies.set(cookieNames ? cookieNames.email : 'email', email, getOptions())
    cookies.set(cookieNames ? cookieNames.jwt : 'jwt', token, getOptions())
}

export const signout = (cookieNames) => {
    if (cookieNames) {
        cookies.remove(cookieNames.email, getOptions())
        cookies.remove(cookieNames.jwt, getOptions())
    }

    cookies.remove('email', getOptions())
    cookies.remove('jwt', getOptions())
}



export const isValidPassword = password => password.length >= 6

export const isValidEmail = email => {
    const finalEmail = typeof email === 'undefined' ? '' : email

    return isEmail(finalEmail)
}

export const isErrorCode = (error, code) => error.message === `${code}`

export default {
    isLoggedIn
}