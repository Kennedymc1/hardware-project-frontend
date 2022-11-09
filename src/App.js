import React, { Suspense, useRef, useState } from 'react'
import Auth from 'libs/components/auth'
import Loading from 'libs/components/loading'
import { Route, Switch } from 'react-router'
import { getSubDomain } from 'libs/utils/urlUtil'


const AuthProvider = React.lazy(() => import('libs/auth-react/components/auth-provider'))

const Dashboard = React.lazy(() => import('app/dashboard'))
const Landing = React.lazy(() => import('app/landing'))



const port = 4000
const productionServerUrl = 'https://project.dirtservers.com/base/graphql'

export default function App() {



  return (
   
      <Switch>
        <Route path='/'>
          <Auth
            authProvider={<AuthProvider
              port={port}
              productionServerUrl={productionServerUrl}
            />}
            landingComponent={<Landing />}
            dashboardComponent={<Dashboard />}
            logo={<img className={'h-16 w-16 p-2'} alt='' />}
          />
        </Route>

      </Switch>

  )
}
