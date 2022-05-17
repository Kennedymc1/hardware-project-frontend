import React from 'react'
import { render, screen, } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorAlert from '.'

describe('Error Alert',()=>{
    it('should show alert if true',()=>{
        render(<ErrorAlert
        isShown={true}
        testid='error'/>)

        expect(screen.getByTestId('error')).toBeInTheDocument()
    })

    it('should show alert if defined',()=>{
        render(<ErrorAlert
        isShown={[]}
        testid='error'/>)

        expect(screen.getByTestId('error')).toBeInTheDocument()
    })

    it('should not show alert if not defined',()=>{
        render(<ErrorAlert
        testid='error'/>)

        expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    })

    it('should not show alert if null',()=>{
        render(<ErrorAlert
        isShown={null}
        testid='error'/>)

        expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    })

    it('should not show alert if false',()=>{
        render(<ErrorAlert
        isShown={false}
        testid='error'/>)

        expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    })
})