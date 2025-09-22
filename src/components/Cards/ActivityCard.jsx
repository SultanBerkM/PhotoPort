import React from "react";
import {
  FaCamera,
  FaCalendarCheck,
  FaStar,
  FaCommentDots,
  FaSun,
} from "react-icons/fa";

function ActivityCard({ activities }) {
  const templates = {
    upload: (data) => ({
      icon: <FaCamera className="text-blue-500" />,
      text: `You uploaded ${data.count} new photo${data.count > 1 ? "s" : ""}`,
    }),
    booking: (data) => ({
      icon: <FaCalendarCheck className="text-green-500" />,
      text: `${data.client} made a new booking`,
    }),
    review: (data) => ({
      icon: <FaStar className="text-yellow-500" />,
      text: `${data.client} left a review`,
    }),
    message: (data) => ({
      icon: <FaCommentDots className="text-purple-500" />,
      text: `${data.client} sent you a message`,
    }),
    rating: (data) => ({
      icon: <FaSun className="text-orange-500" />,
      text: `You received a new rating: ${data.value}`,
    }),
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-md p-6 mt-5 h-1/4 w-1/4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity</h2>
      <ul className="space-y-3">
        {activities.map((activity, i) => {
          const template = templates[activity.type];
          const item = template
            ? template(activity.data)
            : { icon: <FaSun className="text-gray-400" />, text: "Unknown activity" };

          return (
            <li
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-gray-700">{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ActivityCard;
