// password-input.test.tsx
import { render, screen } from "@testing-library/react"
import { LoginForm } from "../components/login-form";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("Password input component", () => {
  test("test Password input with less than 8 characters", async () => {
    render(<LoginForm />)
    const passwordInput = screen.getByTestId("password-input");
    await userEvent.type(passwordInput, "abc123!");

    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    expect(
        screen.getByText(/password must be at least 8 characters/i)
    ).toBeInTheDocument()
  })

  test("test Password input with more than 100 characters", async () => {
    render(<LoginForm />)
    const passwordInput = screen.getByTestId("password-input");
    await userEvent.type(passwordInput, "a".repeat(101));

    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    expect(
        screen.getByText(/password must be at most 100 characters/i)
    ).toBeInTheDocument()
  })
})