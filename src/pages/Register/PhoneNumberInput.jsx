import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const allowedCountries = [
    "GB", "DE", "FR", "ES", "IT", "NL", "PL", "SE",
    "US", "CA", "MX",
    "CN", "JP", "KR", "IN",
    "AL", "BA", "BG", "HR", "GR", "XK", "ME", "MK", "RO", "RS","SI", "TR",
  ];

  const handleChange = (value) => {
   setPhoneNumber(value)
   setValid(value ? isValidPhoneNumber(value) : false)
  };
  return (
    <div className="relative w-full mb-3">
      <PhoneInput
        placeholder="Phone Number"
        countries={allowedCountries}
        defaultCountry="BG"
        value={phoneNumber}
        onChange={handleChange}
        international
        inputProps={{
          required: true,
        }}
        className={"border border-gray-300 p-3 rounded-md text-xl w-full mb-5 hover:bg-gray-100" + (valid ? " border-gray-300" : " border-red-500")}
      />
      {!valid && (
        <span className="absolute top-full left-0 mt-1 z-20 bg-red-400 text-white text-sm px-3 py-1 rounded-md shadow-lg">Invalid phone number</span>
      )}
    </div>
  );
}

export default PhoneNumberInput;
