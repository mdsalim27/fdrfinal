import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const ForgotPasswordPagecode = () => {
    return (

        <Container>
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mx-auto">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Reset Password
                </h2>

                <form action="#" method="POST" className="space-y-5">
                    {/* Verification Code */}
                    <div>
                        <label
                            htmlFor="code"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Verification Code
                        </label>
                        <input
                            type="text"
                            id="code"
                            name="code"
                            placeholder="Enter 6-digit code"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* New Password */}
                    <div>
                        <label
                            htmlFor="newPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            placeholder="Enter new password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Re-enter new password"
                            className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Reset Button */}
                    <Link to={"/loginpage"}>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
                    >
                        Reset Password
                    </button>
                    </Link>
                </form>

                {/* Back to login */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Back to{" "}
                   <Link to={"/loginpage"}>
                    <a  className="text-indigo-600 hover:underline">
                        Login
                    </a>
                    </Link>
                </p>
            </div>
        </Container>
    )
}

export default ForgotPasswordPagecode

