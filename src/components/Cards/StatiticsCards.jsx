function StatisticsCards({ pathData, cardTitle, numberData }) {
  return (
    <div className="border-2 rounded-2xl w-full sm:w-[48%] lg:w-[22%] h-auto m-4 p-5 flex flex-col items-start justify-center gap-5 border-gray-400 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#4D4D4D">
        <path d={pathData} />
      </svg>
      <h1 className="text-2xl xl:text-4xl">{cardTitle}</h1>
      <h2 className="text-4xl xl:text-6xl text-blue-500">{numberData}</h2>
    </div>
  );
}

export default StatisticsCards;
