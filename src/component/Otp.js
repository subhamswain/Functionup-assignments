import React, { useState } from 'react';

function Otp() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleGenerateOTP = async () => {
    if (mobileNumber.length !== 10) {
      setErrorMessage('Please enter a valid 10 digit mobile number.');
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile: mobileNumber }),
    };

    try {
      const response = await fetch(
        'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        requestOptions
      );
      if (!response.ok) {
        throw new Error('Failed to generate OTP');
      }
      setMobileNumber('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <h1>OTP Generator</h1>
      <input
        type="tel"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
      />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Otp;
