import { useState } from 'react';
function PasswordInput(){
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setPassword(e.target.value);
    }

    const handleBlur = () => {
      setError(validatePassword(password));
    }
  
    const validatePassword = (value) => {
      if(value == "") { 
        return "";
      }
      if(value.length < 8) { 
        return "Password must be at least 8 characters"
      }
      else if(!/[A-Z]/.test(value)) {
        return "Password must contain at least one uppercase letter"
      }
      else if(!/[0-9]/.test(value)) {
        return "Password must contain at least one number"
      }
      else {
        return ""
      }
      //add more security rules if needed
    }

   return (
    <div className="relative w-full mb-4">
      <input
        type="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Password"
        className={`border p-3 rounded-md w-full text-xl hover:bg-gray-100 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {/* floating message */}
      {error && (
        <div className="absolute top-full left-0 z-20 mt-1 bg-red-400 text-white text-sm px-3 py-1 rounded-md shadow-lg">
          {error}
        </div>
      )}
    </div>
  );
}
export default PasswordInput;