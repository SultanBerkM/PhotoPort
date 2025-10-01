import CameraIcon from "../../CameraIcon";
import EmailInput from "../Register/EmailInput";
import PasswordInput from "../Register/PasswordInput";
import LoginPageCard from "./LoginPageCard";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <div className="flex min-h-full">
        <div className="hidden lg:block">
          <LoginPageCard />
        </div>
        <div className="rounded-r-lg bg-white max-w-full w-96 flex flex-col p-8 shadow-lg justify-center">
          <div className="flex gap-1 justify-center">
            <CameraIcon />
            <p className="text-2xl font-semibold">PhotoPort</p>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 pb-2.5 text-center">
            Sign In
          </h1>
          <div className="mt-5">
            <EmailInput />
            <PasswordInput />
          </div>
          <button className="bg-blue-500 text-white rounded-lg w-full p-3 cursor-pointer hover:bg-blue-600 text-xl">
            Log In
          </button>
          <p className="text-gray-700 text-xl mt-4 text-center">
            Don't have an account?
          </p>
          <p className="text-blue-500 text-center text-xl">
            <a href="/register" className="cursor-pointer hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;