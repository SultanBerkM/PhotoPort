import SparklineProfileActivity from "../Sparkline/SparklineProfileActivity";

function EarningsCard({ money }) {
  const series = [100, 250, 150, 300, 200, 400, 350, 500, 450, 600, 550, 700];

  return (
    <div className="w-1/2 rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-lg p-6 flex flex-col justify-between">
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Earnings</h2>
            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">+8.4% vs last month</span>
        </div>

        <div>
            <h3 className="text-4xl font-bold text-gray-900 tracking-tight">
                {money.toFixed(2)} 
                <span className=" ml-1 text-xl font-semibold text-gray-600">$</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
        
        <div className="mt-4">   
            <SparklineProfileActivity values={series} stroke="#3B82F6" areaOpacity={0.3} />
        </div>
    </div>
  );
}

export default EarningsCard;
