import React from "react"
import Container from "./Container"
import { Link } from "react-router-dom"

const ForgotPasswordPage = () => {
    return (
        <Container>
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Forgot Password
                </h2>

                <p className="text-center text-sm text-gray-600 mb-6">
                    Enter your registered email address, and we’ll send you a link to reset your password.
                </p>

                <form action="#" method="POST" className="space-y-5">
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address or Phone
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email / phone"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <Link to={"/forgotpasswordpagecode"}>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                        >
                            Send Code
                        </button>
                    </Link>
                </form>

                {/* Back to login */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Remember your password?{" "}
                    <Link to={"/loginpage"}>
                    <a  className="text-indigo-600 hover:underline">
                        Back to Login
                    </a>
                    </Link>
                </p>
            </div>
        </Container>
    )
}

export default ForgotPasswordPage
