function UploadBtn(){
    return(
      <button className="flex items-center justify-center px-6 py-3 gap-2 
                                    bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                                  text-white font-bold text-xl rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-200 hover:cursor-pointer hover:scale-105 active:scale-95">
                       <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffffff">
                           <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
                       </svg>
                       Upload new work
                   </button>      
    )
}
export default UploadBtn;