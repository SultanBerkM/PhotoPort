import Sidebar from "./Sidebar";   
import Navbar from "./Navbar";
import MainDashboard from "./MainDashboad";
function UserDashboard() {
  return (
    <div className="bg-gray-100 flex ">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <MainDashboard />
      </div>
    </div>
  );
}
export default UserDashboard;
