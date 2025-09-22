// import React from 'react'
// import Container from './Container'

// const LoginPage = () => {
//     return (
//         <Container>
//         <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//             <h2 class-name="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//             <form action="#" method="POST" class-name="space-y-5">

//                 <div>
//                     <label for="username" class-name="block text-sm font-medium text-gray-700">Username</label>
//                     <input type="text" id="username" name="username" placeholder="Enter your username"
//                         class-name="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" required>
//                 </div>

//                 <div>
//                     <label for="password" class-name="block text-sm font-medium text-gray-700">Password</label>
//                     <input type="password" id="password" name="password" placeholder="Enter your password"
//                         class-name="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" required>
//                 </div>

//                 <div class-name="flex items-center justify-between text-sm">
//                     <label class-name="flex items-center gap-2">
//                         <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
//                             Remember me
//                     </label>
//                     <a href="#" class="text-indigo-600 hover:underline">Forgot password?</a>
//                 </div>

//                 <button type="submit"
//                     class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
//                     Sign In
//                 </button>
//             </form>

//             <p class-name="mt-6 text-center text-sm text-gray-600">
//                 Don’t have an account?
//                 <a href="#" class="text-indigo-600 hover:underline">Sign up</a>
//             </p>
//         </div>
//         </Container>
//     )
// }

// export default LoginPage




import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Container>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mx-auto py-10 px-10 my-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form action="#" method="POST" className="space-y-5">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              required
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>
            <Link to={"/forgotpasswordpage"}>
            <a  className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
            </Link>
          </div>

          {/* Submit Button */}
          <Link to={"/"}>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to={"/signuppage"}>
            <a className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </Link>
        </p>
      </div>
    </Container>
  )
}

export default LoginPage
