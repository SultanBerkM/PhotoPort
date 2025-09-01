
function RegisterPageCard() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="relative">
        <img
          src="./authJpgs/photoLogin.jpg"   
          alt="Register"
          className="h-[720px] w-max object-cover rounded-l-lg rounded-r-none shadow-lg"

        />
        <div className="absolute top-0 left-0 w-full flex flex-col items-center pt-8 px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg text-center">
            Welcome to PhotoPort
            
          </h2>
          <p className="text-white md:text-xl mt-2 drop-shadow-lg text-center">
            "Your lens sees the world differently.
            Ready to show it to the rest of us?"
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default RegisterPageCard;