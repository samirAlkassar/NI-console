import { render, screen, fireEvent } from "@testing-library/react"
import { LoginFields } from "../components/login-fields"
import '@testing-library/jest-dom'
import { FormProvider, useForm } from "react-hook-form"

function TestWrapper() {
  const methods = useForm({
    defaultValues: {
      orgId: "",
      email: "",
      password: "",
    }
  });
  return (
    <FormProvider {...methods}>
      <LoginFields />
    </FormProvider>
  );
}

describe("login fields component", () => {
  test("login form fields dose render correctly", () => {
    render(<TestWrapper />)
    const loginForm = screen.getByTestId("login-form")
    expect(loginForm).toBeInTheDocument()
  })

  test("login - org name input renders and can type", () => {
      render(<TestWrapper />)
      const orgInput = screen.getByPlaceholderText("Org Id")
      expect(orgInput).toBeInTheDocument()

      fireEvent.change(orgInput, { target: { value: "MyOrg" } })
      expect(orgInput).toHaveValue("MyOrg")
  })

  test("login - email input renders and can type", () => {
      render(<TestWrapper />)
      const nameInput = screen.getByPlaceholderText("m@example.com")
      expect(nameInput).toBeInTheDocument()

      fireEvent.change(nameInput, { target: { value: "test.user@gmail.com" } })
      expect(nameInput).toHaveValue("test.user@gmail.com")
  })

  test("login - password input renders and can type", () => {
      render(<TestWrapper />)
      const passwordInput = screen.getByTestId("password-input")
      expect(passwordInput).toBeInTheDocument()

      fireEvent.change(passwordInput, { target: { value: "123Password123!" } })
      expect(passwordInput).toHaveValue("123Password123!")
  })
})