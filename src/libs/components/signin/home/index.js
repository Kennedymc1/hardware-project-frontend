import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Signin from '../split'
import PropTypes from 'prop-types'
import { useHistory, useLocation } from 'react-router-dom'
import ResetPassword from '../components/reset-password'
import { isLoggedIn as utilIsLoggedIn } from 'libs/utils/authUtil'
import Register from '../components/register'
import ForgotPassword from '../components/forgot-password'
import { IS_LOGGED_IN } from '../constants/SigninGqlQueries';
import { useQuery } from '@apollo/react-hooks'
//import useHandleUtm from '../hooks/useHandleUtm';


/**
*when using this component,simply add it to you app component and pass in the props
for landing and dashboard components
*/
const Home = ({ logoIcon, landingComponent, dashboardComponent, loginImage, registerImage,
    onRegister, getStartedFree, onLogin, onRegisterPath, manualLoggedIn, trialDays,
    notLoggedInPaths = [], landingRedirect,dontRedirect }) => {
    const [routeChanged, setRouteChanged] = useState(0)
    const [userLoggedIn, setuserLoggedIn] = useState()

    const { data: isLoggedInData, error: isLoggedInError } = useQuery(IS_LOGGED_IN)

    //useHandleUtm()


    const history = useHistory()
    const location = useLocation()
    history.listen(() => setRouteChanged(routeChanged + 1))


    useEffect(() => {
        if (typeof isLoggedInData !== 'undefined') {
            const loggedInValue = isLoggedInData.isLoggedIn
            setuserLoggedIn(loggedInValue)
        }

        if (isLoggedInError) {
            setuserLoggedIn(false)
        }

        if (!utilIsLoggedIn()) {
            setuserLoggedIn(false)
        }

        if (manualLoggedIn) {
            setuserLoggedIn(true)
        }


    }, [routeChanged, isLoggedInData, isLoggedInError, manualLoggedIn])


    useEffect(() => {
        if (typeof userLoggedIn !== 'undefined' && !userLoggedIn && landingRedirect) {
            const path = location.pathname
            if (!notLoggedInPaths.includes(path) && !dontRedirect) {
                window.location.href = landingRedirect
            }
        }
    }, [userLoggedIn,dontRedirect])

    return (


        <Switch>
            <Route from='/create-account'>
                <Register
                    onRegisterPath={onRegisterPath}
                    onRegister={onRegister}
                    registerImage={registerImage}
                    logoIcon={logoIcon}
                    title='Create An Account'
                    subtitle='Start getting more word of mouth sales with Refmonkey'
                    submitText='Create An Account'
                /></Route>
            <Route from='/forgot-password'><ForgotPassword /></Route>
            <Route from='/login'>
                <Signin
                    trialDays={trialDays}
                    onLogin={onLogin}
                    getStartedFree={getStartedFree}
                    loginImage={loginImage}
                    logoIcon={logoIcon}
                />
            </Route>
            <Route from='/reset'><ResetPassword /></Route>
            <Route from='/'>{typeof userLoggedIn !== 'undefined' &&
                (userLoggedIn ? dashboardComponent : landingComponent)}
            </Route>
        </Switch>


    );
};

Home.defaultProps = {
    getStartedFree: false,
    trialDays: 14,
    //force to be logged in //hence show the dashboard
    manualLoggedIn: false

}

Home.propTypes = {
    landingRedirect: PropTypes.string,
    loginImage: PropTypes.string,
    registerImage: PropTypes.string,
    //png
    logoIcon: PropTypes.string,
    landingComponent: PropTypes.object,
    dashboardComponent: PropTypes.object,
}

export default Home;
