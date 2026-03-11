import { render, screen, fireEvent } from "@testing-library/react"
import { LoginForm } from "../components/login-form";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

describe("Org ID input component", () => {
  test("test org id input with less than 5 characters", async () => {
    render(<LoginForm />)
    const orgInput = screen.getByPlaceholderText("Org Id");
    await userEvent.type(orgInput, "abcd");

    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    expect(
        screen.getByText(/Org Id must be at least 5 characters\./i)
    ).toBeInTheDocument()
  })

  test("test org id input with more than 32 characters", async () => {
    render(<LoginForm />)
    const orgInput = screen.getByPlaceholderText("Org Id");
    await userEvent.type(orgInput, "a".repeat(33));

    const loginButton = screen.getByRole("button", { name: /login/i });
    await userEvent.click(loginButton);

    expect(
        screen.getByText(/Org Id must be at most 32 characters\./i)
    ).toBeInTheDocument()
  })
})