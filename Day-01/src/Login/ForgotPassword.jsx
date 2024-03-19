import React, { useState, useRef } from 'react';
import glogo from "../assets/glogo.svg";
import mlogo from "../assets/mlogo.svg";
import bg from "../assets/bg2.jpeg"; // Import your background image
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const ForgotPassword = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [showInputBoxes, setShowInputBoxes] = useState(false); // State to manage visibility of input boxes
    const [showPasswordFields, setShowPasswordFields] = useState(false); // State to manage visibility of password fields
    const [okClicked, setokClicked] = useState(false); // State to manage visibility of password fields
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to manage OTP input
    const inputRefs = useRef([]); // Refs for individual input elements

    // Function to handle OTP input change
    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move focus to the next input box if the current box is filled
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
        // Show password fields after all OTP boxes are filled
        if (newOtp.every(char => char !== '') && setokClicked) {
            setShowPasswordFields(true);
        }
    };

    // Function to handle "Send Code" button click
    const handleSendCodeClick = () => {
        setShowInputBoxes(true); // Show input boxes when "Send Code" button is clicked
    };

    // Function to handle "OK" button click
    const handleOkClick = () => {
        // Handle OK button click action
        // For example, navigate to the next step or perform other actions
        setShowPasswordFields(true);
        setokClicked(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-75 shadow-2xl rounded-2xl p-8 md:p-14">
                <h1 className="text-4xl text-white font-bold mb-3">Change Password</h1>
                <div className="grid gap-y-7 md:grid-cols-2 md:gap-x-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john@example.com" required />
                    </div>
                    {showInputBoxes && (
                        <div>
                            <h2 className="text-white text-lg mb-2">Enter Code</h2>
                            <div className="flex justify-between">
                                {otp.map((value, index) => (
                                    <input
                                        key={index}
                                        ref={(ref) => inputRefs.current[index] = ref} // Assign a ref to each input
                                        type="text"
                                        value={value}
                                        maxLength={1}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-1/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2" // Added margin to create space between boxes
                                        required
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    {showPasswordFields && (
                        <>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter new password" required />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Confirm Password</label>
                                <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 hover:border-blue-500 focus:border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm new password" required />
                            </div>
                        </>
                    )}
                </div>
                {!showPasswordFields ? (
                    <button onClick={handleSendCodeClick} className="w-full mt-5 bg-blue-600 text-md xy-3 text-white border-solid border-7 border-blue-800 text-md p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-blue">
                        Send Code
                    </button>
                ) : (
                    <button onClick={handleOkClick} className="w-full mt-5 bg-green-600 text-md xy-3 text-white border-solid border-7 border-green-800 text-md p-2 rounded-lg mb-6 hover:bg-green-700 hover:text-green">
                        OK
                    </button>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
