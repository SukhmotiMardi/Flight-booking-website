import { useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { FaSuitcaseRolling } from "react-icons/fa";
import Upcoming from "./Upcoming/Upcomoing";
import CancelledFlightCard from "./Cancelled/Cancelled";

const tabs = [
  {
    key: "upcoming",
    label: "Upcoming",
    icon: <FaSuitcaseRolling className="text-lg" />,
  },
  {
    key: "cancelled",
    label: "Cancelled",
    icon: <CloseCircleOutlined className="text-lg" />,
  },
  {
    key: "completed",
    label: "Completed",
    icon: <CheckCircleOutlined className="text-lg" />,
  },
  {
    key: "unsuccessful",
    label: "Unsuccessful",
    icon: <ExclamationCircleOutlined className="text-lg" />,
  },
];


const BookTripInfo = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="w-auto bg-[#101A3C] mx-14 rounded my-2 ">
      <div className="max-w-6xl mx-14 flex justify-center">
        <nav className="flex flex-row justify-around gap-2 bg-[#101A3C] rounded-full px-2 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-8 py-2 rounded-full font-medium text-base transition-all duration-200 focus:outline-none border-none
                ${activeTab === tab.key
                  ? "bg-white text-[#101A3C] shadow-md"
                  : "bg-transparent text-white hover:bg-white/10"}
              `}
              aria-current={activeTab === tab.key ? "page" : undefined}
              tabIndex={0}
              type="button"
            >
              <span className={`text-lg ${activeTab === tab.key ? "text-[#101A3C]" : "text-white"}`}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Body */}
      <div className="w-full min-h-[60vh] bg-[#F8F8F8] flex items-start justify-center py-8">
          {activeTab === "upcoming" && <Upcoming />}
          {activeTab === "cancelled" && <CancelledFlightCard />}
      </div>
    </div>
  );
};

export default BookTripInfo;