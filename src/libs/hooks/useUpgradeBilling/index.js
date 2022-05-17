import useAuth from 'libs/auth-react/hooks/useAuth';
import { useEffect } from 'react'

const Paddle = window.Paddle;

const useUpgradeBilling = (onSuccess) => {

    const { user } = useAuth()

    const upgradeBilling = (productId) => {
        
        Paddle.Checkout.open({
            product: productId,
            email: user.email,
            disableLogout: true,
            successCallback: (data, err) => {
                if (onSuccess) {
                    onSuccess()
                } else {
                    window.location.reload(true);
                }
            }
        });
    }

    return { upgradeBilling }
}
export default useUpgradeBilling