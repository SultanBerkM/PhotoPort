import {useState} from "react"

function EmailInput(){
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(true);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }
    const handleBlur = () => {
        setValid(validateEmail(email));
    }
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    return(
        <div className="relative w-full mb-3">
            <input
            type="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            required
            title="Please enter a valid email address."
            className={"border border-gray-300 text-xl p-3 rounded-md w-full mb-1 hover:bg-gray-100" + (valid ? " border-gray-300" : " border-red-500")}
            />

            {!valid && (
            <div className="absolute top-full left-0 z-20 bg-red-400 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                Please enter a valid email address.
            </div>
      )}
        </div>
)}

export default EmailInput;