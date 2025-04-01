import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders the main content', () => {
        render(<Home />)
        const mainElement = screen.getByRole('main')
        expect(mainElement).toBeInTheDocument()
    })
})
