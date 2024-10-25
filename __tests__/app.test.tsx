import { render, screen } from '@testing-library/react'
import { App } from '../src/App'
import {beginner} from '../src/public/frequencies.json'

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('should render title', () => {
    const title = screen.getByText(/sines ear trainer/i)
    
    expect(title).toBeInTheDocument()
  })

  describe('should render [FrquencyCard] components', ()=> {

    test('for level one', () => {
      const frequencyCards = screen.getAllByTestId('frequency-card')
      
      expect(frequencyCards.length).toBe(beginner.length)
    })
    })
})
