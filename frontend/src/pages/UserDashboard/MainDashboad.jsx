import UploadBtn from "../../components/Buttons/UploadBtn";
import StatisticsCards from "../../components/Cards/StatiticsCards";
import SlidebarGallery from "../../components/Cards/SlidebarGallery";
import Bookings from "../../components/Cards/Bookings";
import ActivityCard from "../../components/Cards/ActivityCard";
import EarningsCard from "../../components/Cards/EarningsCard";
import ToDoList from "../../components/Cards/ToDoList";
function MainDashboard() {
  const user = "Caliman";
  const data = {
  uploads: { 
    total: 132, 
    series: [10,12,11,13,14,17,16,18],
    icon: "M240-280h480L570-480 450-320l-90-120-120 160Zm-80 160q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z",
    title: "Uploaded Works" 
  },
  bookings: {
    total: 3,
    series: [1,1,0,2,2,3,3,3],
    icon: "M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z",
    title: "Upcoming Bookings" 
  },
  rating: { 
    total: 4.8,
    series: [4.4,4.5,4.6,4.7,4.6,4.8,4.8,4.8],
    icon:  "m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z",
    title: "Rating"
  },
  messages:  {
    total: 5,
    series: [1,0,1,1,2,3,4,5],
    icon: "M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z",
    title: "New Messages"
  },
};
  const activities = [
    { type: "upload", data: { count: 5 } },
    { type: "booking", data: { client: "Jane Smith" } },
    { type: "review", data: { client: "Alice Johnson" } },
    { type: "message", data: { client: "Bob Brown" } },
    { type: "rating", data: { value: 4.8 } },
    { type: "booking", data: { client: "Atila Chakarov" } },
    { type: "review", data: { client: "Lil Peep" } },
    { type: "upload", data: { count: 3 } }
  ]

  return (
    <div className="bg-white rounded-2xl m-2 shadow-md h-full overflow-hidden max-w-[100vw]">
      <div className="flex p-2 items-baseline gap-10 justify-center border-b-2 border-gray-300">
        <h2 className="p-5 text-3xl font-medium text-gray-800 tracking-tight">
          Welcome back,{" "}
          <span className="font-semibold text-blue-600">{user}</span>, ready to
          show some more?
        </h2>
        <div className="flex items-center justify-center">
          <UploadBtn />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-around items-stretch w-full gap mt-7">
        <StatisticsCards
          cardTitle={data.uploads.title}
          numberData={data.uploads.total}
          series={data.uploads.series}
          index={1}
          pathData={data.uploads.icon}

        />
        <StatisticsCards
          cardTitle={data.bookings.title}
          numberData={data.bookings.total}
          series={data.bookings.series}
          index={5}
          pathData={data.bookings.icon}
        />
        <StatisticsCards
          cardTitle={data.rating.title}
          numberData={data.rating.total}
          series={data.rating.series}
          index={10}
          pathData={data.rating.icon}
        />
        <StatisticsCards
          cardTitle={data.messages.title}
          numberData={data.messages.total}
          series={data.messages.series}
          index={15}
          pathData={data.messages.icon}
        />
      </div>

      
      {/* this part makes the most problems with the responsive design especially the Slider */}
      <div className="flex items-baseline gap-25 mt-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mt-5 ml-5 mb-5">Recent Uploads</h2>  
          <SlidebarGallery />
        </div>
        <ActivityCard activities={activities} />
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-800   ml-5 mb-5">Upcoming Bookings</h2>
      <div className="flex justify-around">
        <Bookings/>
        <EarningsCard money={2543.50}/>
        <ToDoList />
      </div>
      
    </div>
  );
}
export default MainDashboard;
