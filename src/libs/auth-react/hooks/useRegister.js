import { useMutation } from '@apollo/client'
import { REGISTER, IS_LOGGED_IN } from '../constants/SigninGqlQueries'
import { isErrorCode, signin } from '../utils/authUtil';

const useRegister = ({onRegister, onError, onAlreadyExists,cookieNames}) => {

    const [mutate, { loading }] = useMutation(REGISTER, {
        onError: (error) => {
            if (isErrorCode(error, 5)) {
                onAlreadyExists && onAlreadyExists()
            } else {
                onError && onError(error)
            }
        },
        update: (cache) => {
            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: { isLoggedIn: true }
            })
        },
        onCompleted: ({ register }) => {
            const { token, email } = register
            signin(token, email,cookieNames)

            if (onRegister) {
                onRegister(email, token)
            }
        }
    })

    const register = ({email, password}) => {

        mutate({
            variables: {
                email: email,
                password: password,
                platform: "Website"
            }
        })
    }

    return { register, loading }
}

export default useRegister