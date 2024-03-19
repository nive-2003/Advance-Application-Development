import React,{ useState }  from 'react';
import glogo from "../assets/glogo.svg";
import mlogo from "../assets/mlogo.svg";
import bg from "../assets/bg2.jpeg"; // Import your background image
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUpClick = () => {
    // Navigate to the sign-up page
    navigate('/');
  };

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [emailUpdates, setEmailUpdates] = useState(false);
 
  const handleTermsChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleEmailUpdatesChange = () => {
    setEmailUpdates(!emailUpdates);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailInput = e.target.querySelector('#email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(emailInput);
  
    // Basic password validation
    const passwordInput = e.target.querySelector('#password').value;
    const isPasswordValid = passwordInput.length >= 6; // Set your desired password length
    // const termsAgreed = e.target.querySelector('#terms').checked;

    if (!isEmailValid) {
      // Handle invalid email input
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!isPasswordValid) {
      // Handle invalid password input
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (!termsAgreed) {
      alert('Please agree to the terms and conditions.');
      return;
    }
  
    navigate('/home')
  
    // If both email and password are valid, you can proceed with form submission logic here
  };
  
  
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 h-[700px] bg-opacity-75 shadow-2xl rounded-2xl p-8 md:p-14">
        <h1 className="text-4xl text-white font-bold mt-0 mb-2">Create your Free Account!</h1>
        <p className="text-gray-100 font-light mb-8">Start your website in seconds. Already have an account?  <button onClick={handleSignUpClick} className="text-blue-500">Login</button></p>
        <form onSubmit={handleFormSubmit}>

        <div className="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" className="bg-gray-50 border  border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@example.com" required />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
            <input type="text" id="text" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john" required />
          </div>
          
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Password" required />
          </div>
          {/* Add country dropdown
          <div>
            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <select id="country" className="bg-gray-50 border  border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
            </select>
          </div> */}

          <div className="flex items-center mt-[0px] justify-center">
            <hr className="border-t-2 border-gray-300 w-24" />
            <div className="mx-1 mb-2 text-gray-400">or</div>
            <hr className="border-t-2 border-gray-300 w-24" />
          </div>
        </div>
        <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-4 hover:bg-gray-700 hover:text-white">
          <img src={glogo} alt="Google logo" className="w-6 h-6 inline mr-2" />
          <span className="text-gray-200">Sign up with Google</span>
        </button>
        <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-gray-700 hover:text-white">
          <img src={mlogo} alt="Mac logo" className="w-6 h-6 inline mr-2" />
          <span className="text-gray-200">Sign up with Apple</span>
        </button>
        
         {/* Terms agreement checkbox */}
         <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <input type="checkbox" checked={termsAgreed} onChange={handleTermsChange} className="mr-2" />
                I agree to BeachOram’s <Link to="/terms" className="text-blue-500">Terms of Use</Link> and <Link to="/privacy" className="text-blue-500">Privacy Policy.</Link>
              </label>
            </div>
            {/* Email updates checkbox */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <input type="checkbox" checked={emailUpdates} onChange={handleEmailUpdatesChange} className="mr-2" />
                Email me about product updates and resources.
              </label>
            </div>
        <button className="w-full mt-2 bg-blue-600 text-md xy-9 text-white border-solid border-7 border-blue-800 text-md p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-blue">
          Create account
        </button>
        </form>
      </div>
      

    </div>
  );
}

export default Signup;