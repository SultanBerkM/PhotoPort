import CameraIcon from "../../components/CameraIcon";
import PasswordInput from "../../components/AuthInputs/PasswordInput";
import PhoneNumberInput from "../../components/AuthInputs/PhoneNumberInput";
import RegisterPageCard from "../../components/Cards/RegisterPageCard";
import EmailInput from "../../components/AuthInputs/EmailInput";
import NameInput from "../../components/AuthInputs/NameInput";
import LoginRegisterButton from "../../components/Buttons/LoginRegisterButton";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="flex min-h-full">
        <div className="hidden lg:block">
          <RegisterPageCard />
        </div>
        <div className="rounded-r-lg bg-white max-w-full flex flex-col p-8 shadow-lg justify-center">
          <div className="flex gap-1 justify-center">
            <CameraIcon />
            <p className="text-2xl font-semibold">PhotoPort</p>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 pb-2.5 text-center">
            Sign Up
          </h1>

          <div className="mt-5">
            <div className="flex gap-4">
              <NameInput placeholder="First Name" />
              <NameInput placeholder="Second Name" />
            </div>

            <EmailInput />
            <PasswordInput />
            <PhoneNumberInput />

            <select className="border border-gray-300 text-xl p-3 rounded-md w-full mb-5 hover:bg-gray-100">
              <option value="" hidden>
                Select Role
              </option>
              <option value="photographer">Photographer</option>
              <option value="guest">Guest</option>
            </select>

            <LoginRegisterButton btnName="Register" />
            <p className="text-gray-600 text-xl mt-3 text-center">
              By registering you agree with our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms & Conditions
              </a>
            </p>
            <p className="text-gray-700 text-xl mt-4 text-center">
              Already have an account?
            </p>
            <p className="text-blue-500 text-center text-xl">
              <a href="/login" className="cursor-pointer hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
