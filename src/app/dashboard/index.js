import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { HomeIcon, ViewListIcon } from '@heroicons/react/solid'
import useAuth from 'libs/auth-react/hooks/useAuth'
import { signout } from 'libs/auth-react/utils/authUtil'
import { refreshWebpage } from 'libs/utils/urlUtil'
import Loading from 'libs/components/loading'
import { Route, Switch } from 'react-router-dom'
import DarkDualBar from 'libs/dark-dualbar'
import ContentController from 'libs/components/content-controller'
import Overview from 'app/overview'
import Entries from 'app/entries'
import ViewEntry from 'app/entries/view'



const navItems = [
    {
        href: '/',
        name: 'Overview',
        icon: HomeIcon
    },

    {
        href: '/entries',
        name: 'Entries',
        icon: ViewListIcon
    }
]

function Dashboard(props) {

    const { user } = useAuth()

    return (
        <Switch>
            <DarkDualBar
                //onHelp={() => setIsTourOpen(true)}
                // mobileLogo={LogoPNG}
                //desktopLogo={FullLogoPNG}
                navItems={navItems}
                profile={{
                    picUrl: user.picture,
                    email: user.email,
                    name: user.name
                }}
                onLogout={() => {
                    console.log('logout')
                    signout({ email: 'site-email', jwt: 'site-jwt' })
                    refreshWebpage()
                }
                }
            >

                <Route exact path='/'>
                    <Overview />
                </Route>

                <Route exact path='/entries'>
                    <Entries />
                </Route>

                <Route exact path='/view-entry'>
                    <ViewEntry />
                </Route>

            </DarkDualBar>
        </Switch>


    )
}

Dashboard.propTypes = {}

export default Dashboard
