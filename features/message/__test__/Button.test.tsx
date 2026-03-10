import { render, screen, fireEvent } from "@testing-library/react"
import Button from "../button"
import '@testing-library/jest-dom'

describe("Button component", () => {
  test("renders with the correct label", () => {
    render(<Button label="Click me" />)
    // Check if the text exists
    const button = screen.getByText("Click me")
    expect(button).toBeInTheDocument()
  })

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn()
    render(<Button label="Click me" onClick={handleClick} />)
    const button = screen.getByTestId("my-button")
    
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})