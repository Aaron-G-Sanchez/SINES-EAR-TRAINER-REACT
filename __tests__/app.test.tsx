import { render, screen } from '@testing-library/react'
import { App } from '../src/App'

describe('App component', () => {
  test('should render title', () => {
    render(<App />)

    const title = screen.getByText(/hello world!/i)
    expect(title).toBeInTheDocument()
  })
})
