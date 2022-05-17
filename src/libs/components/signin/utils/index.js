import validator from 'validator'


export const isValidPassword = password => password.length >= 6

export const isValidEmail = email => {
    const finalEmail = typeof email === 'undefined' ? '' : email

    return validator.isEmail(finalEmail)
}

export const isErrorCode =(error, code) => error.message === `GraphQL error: ${code}`
