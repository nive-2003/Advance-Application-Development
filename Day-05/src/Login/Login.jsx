import React from 'react';
import glogo from "../assets/glogo.svg"
import mlogo from "../assets/mlogo.svg"
import bg from "../assets/bg2.jpeg" // Import your background image
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

function Login() {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUpClick = () => {
    // Navigate to the sign-up page
    navigate('/signup');
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{backgroundImage: `url(${bg})`}}>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-75 shadow-2xl rounded-2xl p-8 md:p-14">
      <h1 className="text-4xl text-white font-bold mb-3">Welcome Back!</h1>
      <p className="text-gray-100 font-light mb-8">Start your website in seconds. Don’t have an account?  <button onClick={handleSignUpClick} className="text-blue-500">Sign up</button></p>
      <div className="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@example.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required />
        </div>
        <div className="flex items-center justify-center">
          <hr className="border-t-2 border-gray-300 w-24" />
          <div className="mx-4 text-gray-400">or</div>
          <hr className="border-t-2 border-gray-300 w-24" />
        </div>
      </div>
      <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-gray-700 hover:text-white">
        <img src={glogo} alt="Google logo" className="w-6 h-6 inline mr-2" />
        <span className="text-gray-200">Sign in with Google</span>
      </button>
      <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-gray-700 hover:text-white">
        <img src={mlogo} alt="Mac logo" className="w-6 h-6 inline mr-2" />
        <span className="text-gray-200">Sign in with Apple</span>
      </button>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm text-gray-300 font-bold">Remember me</label>
        </div>
        <a href="/forgot" className="text-sm text-blue-500 font-bold">Forgot password?</a>
      </div>
      <button className="w-full mt-5 bg-blue-600 text-md xy-9 text-white border-solid border-7 border-blue-800 text-md p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-blue">
        Sign in with your account
      </button>
    </div>
  </div>

  );
}

export default Login;