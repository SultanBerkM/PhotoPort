function MainDashboard(){
    const user = "Caliman";
    return(
        <div className="bg-white rounded-2xl m-2 shadow-md h-full ">
            <div className="flex h-1/12 justify-between items-baseline p-5 gap-">
                <h2 className="p-5 text-4xl font-semibold">
                    Welcome back, {user}, ready to show more?
                </h2>
               <button className="flex items-center justify-center p-5 gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-2xl rounded-xl shadow-md hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z"/></svg>
                    Upload new work
                </button>
            </div>
        </div>  
    );
}
export default MainDashboard;