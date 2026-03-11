import { render, screen } from "@testing-library/react"
import { LoginForm } from "../components/login-form"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

describe("LoginForm submission", () => {
  test("allows submission with valid data", async () => {
    render(<LoginForm />)

    const orgInput = screen.getByPlaceholderText("Org Id")
    const emailInput = screen.getByPlaceholderText("m@example.com")
    const passwordInput = screen.getByTestId("password-input")
    const loginButton = screen.getByRole("button", { name: /login/i })

    await userEvent.type(orgInput, "myOrg123")
    await userEvent.type(emailInput, "test@example.com")
    await userEvent.type(passwordInput, "StrongPass123!")

    await userEvent.click(loginButton)

    // Check that no errors are rendered
    const errorMessages = screen.queryAllByRole("alert")
    expect(errorMessages).toHaveLength(0)
  })

  test("submits the form with valid data", async () => {
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    const orgInput = screen.getByPlaceholderText("Org Id")
    const emailInput = screen.getByPlaceholderText("m@example.com")
    const passwordInput = screen.getByTestId("password-input")
    const loginButton = screen.getByRole("button", { name: /login/i })

    await userEvent.type(orgInput, "myOrg123")
    await userEvent.type(emailInput, "test@example.com")
    await userEvent.type(passwordInput, "StrongPass123!")

    await userEvent.click(loginButton)

    // Assert that submit handler was called once
    expect(handleSubmit).toHaveBeenCalledTimes(1)

    // Assert it was called with correct data
    expect(handleSubmit).toHaveBeenCalledWith({
      orgId: "myOrg123",
      email: "test@example.com",
      password: "StrongPass123!"
    })
  })
})