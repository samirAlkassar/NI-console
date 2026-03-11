import { render, screen, waitFor } from "@testing-library/react"
import { LoginForm } from "../components/login-form"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'

import { TextEncoder, TextDecoder } from 'util'
import { ReadableStream, WritableStream, TransformStream } from 'stream/web'
Object.assign(global, { TextDecoder, TextEncoder, ReadableStream, WritableStream, TransformStream })

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.post('/api/auth/login', async ({ request }) => {
    const body = await request.json()

    // console.log("MSW received request:", body)

    const response = { success: true, message: "Logged in", token: "fake-jwt-token-12345" }
    localStorage.setItem("token", response.token)
    // console.log("MSW sending response:", response)
    return HttpResponse.json(response)
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  localStorage.clear()
})
afterAll(() => server.close())

describe("LoginForm MSW mock API testing", () => {
    test("successfully logs in using the mock API endpoint", async () => {
        render(<LoginForm />)

        const orgInput = screen.getByPlaceholderText("Org Id")
        const emailInput = screen.getByPlaceholderText("m@example.com")
        const passwordInput = screen.getByTestId("password-input")
        const loginButton = screen.getByRole("button", { name: /login/i })

        await userEvent.type(orgInput, "myOrg123")
        await userEvent.type(emailInput, "test@example.com")
        await userEvent.type(passwordInput, "StrongPass123!")

        await userEvent.click(loginButton)

        await waitFor(() => {
            const errorMessages = screen.queryAllByRole("alert")
            expect(errorMessages).toHaveLength(0);

            expect(localStorage.getItem("token")).toBe("fake-jwt-token-12345")
        })
    })
})
