// TODO: Figure out how to get the import in vitest.setup.ts to work
import '@testing-library/jest-dom/vitest'
import { describe, test, expect } from 'vitest'
import { render, screen} from '@testing-library/react'
import { App } from '../src/App'

describe('App component', () => {
  test('should render the title', () => {
    render(<App />)
    const title = screen.getByText(/sines ear trainer/i)
    expect(title).toBeInTheDocument()
  })
})