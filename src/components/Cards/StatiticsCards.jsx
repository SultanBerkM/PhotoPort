import { motion } from "framer-motion";
import CountUp from "react-countup";
import SparklineProfileActivity from "../Sparkline/SparklineProfileActivity";
function StatisticsCards({ pathData, cardTitle, numberData, index, series = [] }) {
  const delta = series.length > 1 ? series.at(-1) - series.at(-2) : 0;
  const deltaColor = delta >= 0 ? "text-emerald-600" : "text-rose-600";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: 0.15 * index }}
      whileHover={{ scale: 1.03 }}
      className="w-full sm:w-[48%] lg:w-[22%] bg-white rounded-3xl shadow-xl border border-gray-200 
                 hover:shadow-2xl transition-all duration-300 p-6 flex flex-col gap-4 
                 items-start justify-center"
    >
      <div className="bg-blue-100 p-3 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          width="40px"
          viewBox="0 -960 960 960"
          fill="#3B82F6"
        >
          <path d={pathData} />
        </svg>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        className="text-gray-700 text-xl font-semibold tracking-wide"
      >
        {cardTitle}
      </motion.h1>

      <div className="flex items-end gap-2">
        <motion.h2 className="text-4xl xl:text-5xl font-bold text-blue-600"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + index * 0.1 }}>
          <CountUp end={numberData} duration={3} decimals={Number.isInteger(numberData) ? 0 : 1} />
        </motion.h2>
        {series.length > 1 && <span className={`text-xs ${deltaColor}`}>{delta > 0 ? `+${delta}` : delta}</span>}
      </div>
      <SparklineProfileActivity values={series} className="w-full" stroke="#3B82F6" area areaOpacity={0.1} />
    </motion.div>
    
  );
}

export default StatisticsCards;
