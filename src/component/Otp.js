import React, { useState } from 'react';
import axios from 'axios';

const Otp = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSendOTP = async () => {
    try {
      // Validate mobile number
      if (!/^\d{10}$/.test(mobileNumber)) {
        throw new Error('Invalid mobile number. Please enter a 10-digit Indian mobile number.');
      }

      // Send OTP request
      const response = await axios.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        mobile: parseInt(mobileNumber)
      });

      // Check for errors in response
      if (response.status !== 200 || response.data.error) {
        throw new Error(response.data.error || 'Failed to send OTP. Please try again later.');
      }

      // Clear input on successful OTP send
      setMobileNumber('');

      // Display success message
      setMessage('OTP sent successfully. Please check your mobile.');
      setErrorMessage('');
    } catch (error) {
      // Display error message on screen
      const errorMessage = error.message || 'Failed to send OTP. Please try again later.';
      setMessage('');
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <h1>Send OTP to Mobile</h1>
      <input type="number" value={mobileNumber} onChange={handleMobileNumberChange} placeholder="Enter mobile number" />
      <button onClick={handleSendOTP}>Send OTP</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Otp;
