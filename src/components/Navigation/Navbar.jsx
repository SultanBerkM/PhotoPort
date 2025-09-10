function Navbar() {
  const user = "John Doe";
  return (
    <div className="flex justify-between items-center p-5 h-17 border-none rounded-2xl m-2 bg-white shadow-md">
      <h1 className="text-3xl font-semibold">{user}'s Dashboard</h1>
      <ul className="flex items-center justify-space gap-8">
        <li>
          <span className="text-gray-600 text-lg">Hello, {user} 👋</span>
        </li>
        <li>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#474747"
            >
              <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
          </a>
        </li>
        <li>
          <img
            src="/userProfile.jpg"
            alt="User Avatar"
            className="rounded-full h-12 w-12 object-cover transition duration-300 hover:scale-110 hover:shadow-lg"
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
