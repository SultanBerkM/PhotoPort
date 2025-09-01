import Sidebar from "../../components/Navigation/Sidebar";   
import Navbar from "../../components/Navigation/Navbar";
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
