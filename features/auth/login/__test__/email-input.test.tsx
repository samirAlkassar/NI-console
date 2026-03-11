import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginForm } from "../components/login-form"
import '@testing-library/jest-dom'

describe("Email input validation", () => {
  test("prevents submission when invalid email is entered", async () => {
    const handleSubmit = jest.fn()
    //@ts-ignore
    render(<LoginForm onSubmit={handleSubmit} />)

    const emailInput = screen.getByPlaceholderText("m@example.com")
    const loginButton = screen.getByRole("button", { name: /login/i })

    await userEvent.type(emailInput, "not-an-email")
    await userEvent.click(loginButton)

    expect(handleSubmit).not.toHaveBeenCalled()
  })

  test("shows error if email exceeds 100 characters", async () => {
    render(<LoginForm />)

    const emailInput = screen.getByPlaceholderText("m@example.com")
    const longEmail = "a".repeat(95) + "@ex.com" // over 100 chars
    await userEvent.type(emailInput, longEmail)

    const loginButton = screen.getByRole("button", { name: /login/i })
    await userEvent.click(loginButton)

    const error = await screen.findByText(/Email must be at most 100 characters/i)
    expect(error).toBeInTheDocument()
  })
})