
import { useMutation } from '@apollo/react-hooks'
import { LOG_IN } from 'libs/components/signin/constants/SigninGqlQueries'
import { useHistory } from 'react-router-dom'
import { signin } from 'libs/utils/authUtil'
import { IS_LOGGED_IN } from '../../constants/SigninGqlQueries'

const useLogin = (onLogin,onError) => {
    const history = useHistory()

    const [login, { loading }] = useMutation(LOG_IN, {
        onError: onError,
        onCompleted: ({ login }) => {
            const { token, email } = login
            signin(token, email)

            //navigate back to home
            history.replace('/')

            onLogin && onLogin()
        },
        update: (cache) => {
            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: { isLoggedIn: true }
            })
        },
    })

    const execute = (email, password) => {
        login({
            variables: {
                email: email,
                password: password
            }
        })

    }

    return { login: execute, loading }

}

export default useLogin