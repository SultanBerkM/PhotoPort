import UploadBtn from "../../components/Buttons/UploadBtn";
import StatisticsCards from "../../components/Cards/StatiticsCards";
import SlidebarGallery from "../../components/Cards/SlidebarGallery";
import Bookings from "../../components/Cards/Bookings";
function MainDashboard() {
  const user = "Caliman";
  return (
    <div className="bg-white rounded-2xl m-2 shadow-md h-full overflow-hidden max-w-[100vw]">
      <div className="flex h-1/12 items-baseline p-5 gap-10 justify-center">
        <h2 className="p-5 text-3xl font-medium text-gray-800 tracking-tight">
          Welcome back,{" "}
          <span className="font-semibold text-blue-600">{user}</span>, ready to
          show some more?
        </h2>
        <div className="flex items-center justify-center">
          <UploadBtn />
        </div>
      </div>
      <hr className="border-gray-300 border-1 mt-4" />
      <div className="flex flex-wrap justify-around items-stretch w-full gap mt-7">
        <StatisticsCards
          cardTitle={"Uploaded Works"}
          numberData={132}
          index={1}
          pathData={
            "M240-280h480L570-480 450-320l-90-120-120 160Zm-80 160q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"
          }
        />
        <StatisticsCards
          cardTitle={"Upcoming Bookings"}
          numberData={3}
          index={5}
          pathData={
            "M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"
          }
        />
        <StatisticsCards
          cardTitle={"Rating"}
          numberData={4.8}
          index={10}
          pathData={
            "m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z"
          }
        />
        <StatisticsCards
          cardTitle={"New Messages"}
          numberData={5}
          index={15}
          pathData={
            "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
          }
        />
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 m-5">
        Recent Uploads
      </h2>
      <div className="w-full mt-10 mb-10 overflow-hidden">
        <SlidebarGallery />
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 m-5">
        Upcoming Bookings
      </h2>
      <Bookings />
    </div>
  );
}
export default MainDashboard;
