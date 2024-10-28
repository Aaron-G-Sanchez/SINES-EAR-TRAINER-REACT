import { FrequencyCard } from "../../src/components/frequency_card/FrequencyCard"
import { screen, render } from "@testing-library/react"

describe("FrequencyCard component", () => {
  beforeEach(() => {
    render(<FrequencyCard freq={1000} />)
  })

  test("should render the given frequency", () => {
    const renderedFrequency: HTMLElement = screen.getByRole("button")

    expect(renderedFrequency.textContent).toBe("1000")
  })
})
