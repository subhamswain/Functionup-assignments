
import { useState } from 'react';
import {Change} from "./abc"

const API_URL = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

function App() {
  // const [mobile, setMobile] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleMobileChange = (event) => {
  //   setMobile(event.target.value.trim());
  // };

  // const handleSendOtpClick = () => {
  //   if (!/^\d{10}$/.test(mobile)) {
  //     setErrorMessage('Please enter a valid 10-digit Indian mobile number');
  //     return;
  //   }

  //   fetch(API_URL, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //      body : {mobile : 7898639754}
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       setMobile('');
  //       setErrorMessage('');
  //       alert('OTP sent successfully');
  //     } else {
  //       throw new Error(response.statusText);
  //     }
  //   })
  //   .catch(error => {
  //     setErrorMessage(`Failed to send OTP: ${error.message}`);
  //   });
  // };

  return (
    <div>
      <Change/>
    </div>
  );
}

export default App;
