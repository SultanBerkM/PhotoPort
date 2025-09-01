import {useState} from "react";
function NameInput({placeholder}) {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) =>{
        setName(e.target.value);
        //setError(validateNames(e.target.value))
    }
    const handleBlur = () => {
        setError(validateNames(name));
    };
    const validateNames = (name) => {

        const nameRegex = /^[A-Za-zА-Яа-я]+(?:\s[A-Za-zА-Яа-я]+)?$/;

        if(name == ""){ 
            return "Name is required";
        }
        else if(name.length < 2){ 
            return "Name must be at least 2 characters";
        }
        else if(!nameRegex.test(name)){
            return "Name can only contain letters and one space"
        }
        else{
            return "";
        }
    }
    return (
        <div className="relative w-full mb-4">
            <input 
            type="text"
            placeholder={placeholder}
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`border p-3 rounded-md w-full text-xl hover:bg-gray-100 ${
            error ? "border-red-500" : "border-gray-300"
            }`} />

            {error && (
            <div className="absolute top-full left-0 z-20 mt-1 bg-red-400 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                {error}
            </div>
      )}
        </div>
        
    );
}

export default NameInput;
