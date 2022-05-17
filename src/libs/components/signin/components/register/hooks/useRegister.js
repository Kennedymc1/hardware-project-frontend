import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER, IS_LOGGED_IN } from '../../../constants/SigninGqlQueries'
import { isErrorCode } from '../../../utils';
import { signin } from 'libs/utils/authUtil';
import useHandleUtm from '../../../hooks/useHandleUtm';

const useRegister = (onRegister, onError, onAlreadyExists, onRegisterPath) => {
    const history = useHistory()

    const { getUtms } = useHandleUtm()

    const [mutate, { loading }] = useMutation(REGISTER, {
        onError: (error) => {
            if (isErrorCode(error, 5)) {
                onAlreadyExists && onAlreadyExists()
            } else {
                onError && onError()
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
            signin(token, email)

            if (onRegister) {
                onRegister(email, token)
            }

            //navigate back to home
            history.replace(onRegisterPath ? onRegisterPath : '/')

        }
    })

    const register = (email, password, usesShopify = false) => {
        const utms = getUtms()

        mutate({
            variables: {
                email: email,
                password: password,
                platform: "Website",
                utm_source: utms.source,
                utm_medium: utms.medium,
                utm_campaign: utms.campaign,
                utm_content: utms.content,
                utm_term: utms.term,

            }
        })
    }

    return { register, loading }
}

export default useRegister