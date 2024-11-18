import React, { useState } from 'react'
import OtpInput from './OtpInput';
const PhoneotpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if(phoneNumber.length < 10 || regex.test(phoneNumber)){
      alert("invalid Phone Number");
      return;
    }

    // call the api 
    //show the otpInput field
    setShowOtpInput(true);
  }

  const onOtpSubmit = (otp) => {
    console.log(otp, "....");
  }

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput/>
        </div>
      )}
    </div>
  )
}

export default PhoneotpForm;