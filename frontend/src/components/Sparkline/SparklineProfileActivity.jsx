import { motion } from "framer-motion";
function SparklineProfileActivity({
    values = [],
    height = 36,
    stroke = "#a5b4fc",
    strokeWidth = 2,
    className = "", 
    area = false,
    areaOpacity = 0.12,
}) {
        if(values.length === 0){ 
            return null;
        }
        const max = Math.max(...values);
        const min = Math.min(...values);
        const span = max - min || 1;
        const points = values.map((v, i) => {
        const x = 100 - (i / (values.length - 1)) * 100;
        const y = ((v - min) / span) * 100;
        return `${x},${y}`;
    }).join(" ");

    return(
        <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{height, width: "100%"}}
            className={className}
        >
           <motion.polyline
                fill="none"
                stroke={stroke}
                strokeWidth={strokeWidth}
                points={points}
                initial={{ pathLength: 0, opacity: 0.6 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
            />
        </svg>
    );
}
export default SparklineProfileActivity;