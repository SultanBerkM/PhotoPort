function LoginPageCard() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative">
        <img
          src="./LoginRegisterCardImages/photoLog.jpg"
          alt="Register"
          className="h-[600px] w-max object-cover rounded-l-lg rounded-r-none shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-8 px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
            Already part of the PhotoPort family?
          </h2>
          <p className="text-white md:text-xl mt-2 drop-shadow-lg text-center">
            Let’s turn inspiration into impact. Time to capture more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPageCard;
