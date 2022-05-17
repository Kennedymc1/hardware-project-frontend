import { signout } from 'libs/utils/authUtil'
import { HTTP_URL } from 'constants/index.js'
import { useMutation } from '@apollo/react-hooks'
import { LOGOUT } from './constants/GqlQueries'
import { IS_LOGGED_IN } from 'libs/components/signin/constants/SigninGqlQueries'

const useLogout = () => {

    const [logout] = useMutation(LOGOUT, {
        onError: error => { console.log(error)},
        onCompleted: (data) => {
            if (data.logout) {

                signout()
                window.location.href = HTTP_URL
                //todo show toast that you have logged out or try again if something went wrong
            }
        },
        update: (cache, { data }) => {
            if (data.logout) {
                cache.writeQuery({
                    query: IS_LOGGED_IN,
                    data: { isLoggedIn: false }
                })
            }
        },
    })

    return logout
}

export default useLogout