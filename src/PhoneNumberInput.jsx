import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  //const [valid, setValid] = useState(true);

  const allowedCountries = [
    "GB", "DE", "FR", "ES", "IT", "NL", "PL", "SE",
    "US", "CA", "MX",
    "CN", "JP", "KR", "IN",
    "AL", "BA", "BG", "HR", "GR", "XK", "ME", "MK", "RO", "RS","SI", "TR",
  ];

  const handleChange = (value) => {
   setPhoneNumber(value)
   // setValid(value ? isValidPhoneNumber(value) : false)
  };
  return (
    <div>
      <PhoneInput
        placeholder="Phone Number"
        countries={allowedCountries}
        defaultCountry="BG"
        value={phoneNumber}
        onChange={handleChange}
        international
        inputProps={{
          required: true,
          maxLength: 20,
          minLength: 12
        }}
        className="border border-gray-300 p-2 rounded-md w-full mb-4 hover:bg-gray-100"
      />
      {/* {!valid && (
        <span className="text-red-500">Invalid phone number</span>
      )} */}
    </div>
  );
}

export default PhoneNumberInput;
