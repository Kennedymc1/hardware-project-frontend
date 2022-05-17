import React from 'react'
import '@testing-library/jest-dom'
import Dashboard from '.'
import { render, screen } from '@testing-library/react'
import Logo from 'images/logo.png'
import { MockedProvider } from '@apollo/client/testing'
import { REGISTER } from 'libs/auth-react/constants/SigninGqlQueries'
import { HomeIcon } from '@heroicons/react/solid'

const mocks = [{
    request: {
        query: REGISTER,
        variables: {
            email: 'test@gmail.com',
            password: '123456'
        }
    },
    result: {
        data:{
            email: 'test@gmail.com',
            token: '1234567890'
        }
    }
}]

jest.mock('react-router',()=>{
    return {
        useLocation: jest.fn(),
        useHistory: jest.fn(()=>(
            {listen: jest.fn()}
            ))
        }
})

const renderComponent = () =>{
    render(
        <MockedProvider mocks={mocks} addTypename={false} >
        <Dashboard
            navItems={[{
                name: 'test',
                icon: HomeIcon,
                href: ''
            }]}
            desktopLogo={Logo}
            profile={{
                name: 'test',
                email: 'test@gmail.com',
                pickUrl: ''
            }}
            mobileLogo={Logo} />
            </MockedProvider>
    )
}

describe('Dual Dashboard Component', () => {

    test('show mobile dashboard', async () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: query === '(max-width: 640px)' ? true : false,
        }))
            }),

    renderComponent()

        expect(screen.getByTestId('mobile-dashboard')).toBeInTheDocument()
        expect(screen.queryByTestId('desktop-dashboard')).not.toBeInTheDocument()
    })

    
    test('show desktop dashboard', async () => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: jest.fn().mockImplementation(query => ({
                  matches: query === '(max-width: 640px)' ? false : true,
            }))
                }),
    
        renderComponent()

        expect(screen.queryByTestId('mobile-dashboard')).not.toBeInTheDocument()
        expect(screen.getByTestId('desktop-dashboard')).toBeInTheDocument()
    })
    
})