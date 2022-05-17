import React from 'react'
import '@testing-library/jest-dom'
import Button from '../button'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Button Component', () => {
    test('button is clickable', async () => {
        let clickedTimes = 0
        render(<Button
            onClick={() => clickedTimes++}
            >button</Button>)

        fireEvent.click(screen.getByText('button'))
        expect(clickedTimes).toEqual(1)
    })
})