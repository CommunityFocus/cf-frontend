import {render, 
  screen
} from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('renders hello', () => {
        
        render(<App />)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
})