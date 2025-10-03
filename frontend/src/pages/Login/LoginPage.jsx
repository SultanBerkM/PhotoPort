import CameraIcon from "../../components/CameraIcon";
import EmailInput from "../../components/AuthInputs/EmailInput";
import PasswordInput from "../../components/AuthInputs/PasswordInput";
import LoginPageCard from "../../components/Cards/LoginPageCard";
import LoginRegisterButton from "../../components/Buttons/LoginRegisterButton";
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
          <LoginRegisterButton btnName="Login" />
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
