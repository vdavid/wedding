import React from 'react'
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('should redirect to the wedding page', () => {
        // Since this is a server component with redirect, we expect it to throw a NEXT_REDIRECT error
        expect(() => render(<Home />)).toThrow('NEXT_REDIRECT')
    })
})
