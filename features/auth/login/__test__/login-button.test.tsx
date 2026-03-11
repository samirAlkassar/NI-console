import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginForm } from "../components/login-form"
import '@testing-library/jest-dom'

describe("login submit button component", () => {
  test("renders with the correct label and can be clicked", async () => {
    render(<LoginForm />)

    const loginButton = screen.getByRole("button", { name: /login/i })

    expect(loginButton).toBeInTheDocument()
    expect(loginButton).toBeEnabled()

    await userEvent.click(loginButton);
    expect(screen.getByText(/org id must be at least 5 characters/i)).toBeInTheDocument()
    expect(screen.getByText(/invalid email address/i)).toBeInTheDocument()
    expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument()    
  })
})