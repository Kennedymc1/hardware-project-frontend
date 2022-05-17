import {
    LOG_IN, IS_VALID_RESET_TOKEN, RESET_PASSWORD, IS_PASSWORD_RESET_VALID,
    CHANGE_TOKEN_PASSWORD, REGISTER,IS_LOGGED_IN
} from '../constants/SigninGqlQueries'
import { GraphQLError } from 'graphql'


export const loggedInMocks = {
    request: { query: IS_LOGGED_IN },
    result: { data: { isLoggedIn: true } }
}

export const notLoggedInMocks = {
    request: { query: IS_LOGGED_IN },
    result: { data: { isLoggedIn: false } }
}


const mocks = [{
    request: { query: LOG_IN, variables: { email: 'test@gmail.com', password: '123456', } },
    result: { data: { login: { email: 'test@gmail.com', token: 'gfdgredgfdgdfggdggdfgdvfvdtdrger' } } }
}, {
    request: { query: LOG_IN, variables: { email: 'failed@gmail.com', password: '123456', } },
    result: { errors: [new GraphQLError('9')] }
}, {
    request: { query: LOG_IN, variables: { email: 'error@gmail.com', password: '123456', } },
    error: new GraphQLError()
}, {
    request: { query: REGISTER, variables: { email: 'test@gmail.com', password: '123456', } },
    result: { data: { register: { email: 'test@gmail.com', token: 'gfdgredgfdgdfggdggdfgdvfvdtdrger' } } }
}, {
    request: { query: REGISTER, variables: { email: 'exists@gmail.com', password: '123456', } },
    result: { errors: [new GraphQLError('5')] }
}, {
    request: { query: REGISTER, variables: { email: 'failed@gmail.com', password: '123456', } },
    error: new GraphQLError()
},
{
    request: {
        query: IS_VALID_RESET_TOKEN,
        variables: { token: '1' }
    },
    result: {
        data: { isPasswordResetValid: true }
    }
},
{
    request: {
        query: IS_VALID_RESET_TOKEN,
        variables: { token: 'invalid' }
    },
    result: {
        data: { isPasswordResetValid: false }
    }
},{
    request: {
        query: IS_VALID_RESET_TOKEN,
        variables: { token: 'error' }
    },
   error: new Error()
},
{
    request: {
        query: RESET_PASSWORD,
        variables: {
            email: 'test@gmail.com'
        },
    },
    result: { data: { resetPassword: '1' } }
},
{
    request: {
        query: RESET_PASSWORD,
        variables: {
            email: 'failed@gmail.com'
        },
    },
    result: { errors:  [new GraphQLError('3')] }
},
{
    request: {
        query: RESET_PASSWORD,
        variables: {
            email: 'error@gmail.com'
        },
    },
    error: new Error()
}, {
    request: {
        query: IS_PASSWORD_RESET_VALID,
        variables: {
            token: '1'
        }
    },
    result: {
        data: {
            isPasswordResetValid: true
        }
    }
}, {
    request: {
        query: IS_PASSWORD_RESET_VALID,
        variables: {
            token: '0'
        }
    },
    result: {
        data: {
            isPasswordResetValid: false
        }
    }
}, {
    request: {
        query: IS_PASSWORD_RESET_VALID,
        variables: {
            token: 'error'
        }
    },
    error: new Error()
}, {
    request: {
        query: CHANGE_TOKEN_PASSWORD,
        variables: {
            token: '1',
            password: '123456'
        }
    },
    result: {
        data: {
            changeTokenPassword: { token: 'gfdgredgfdgdfggdggdfgdvfvdtdrger' }
        }
    }
}, {
    request: {
        query: CHANGE_TOKEN_PASSWORD,
        variables: {
            token: '1',
            password: '1234567'
        }
    },
    error: new Error()
},
]

export default mocks