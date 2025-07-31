import { useState } from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Upcoming from "./Upcoming/Upcomoing";
import CustomBookingCard from "./CustomBookingCard";
import { Luggage } from "lucide-react";

const tabs = [
  {
    key: "upcoming",
    label: "Upcoming",
    icon: <Luggage  className="text-lg" />,
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
                ${
                  activeTab === tab.key
                    ? "bg-white text-[#101A3C] shadow-md"
                    : "bg-transparent text-white hover:bg-white/10"
                }
              `}
              aria-current={activeTab === tab.key ? "page" : undefined}
              tabIndex={0}
              type="button"
            >
              <span
                className={`text-lg ${
                  activeTab === tab.key ? "text-[#101A3C]" : "text-white"
                }`}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Body */}
      <div className="w-full min-h-[50vh] bg-[#E8F0FF] flex items-start justify-center p-6 mb-3">
        {activeTab === "upcoming" && <Upcoming />}
        {activeTab === "cancelled" && (
          <CustomBookingCard
            airline={{ name: "Indigo", logo: "6E", flightNumber: "QP 4571" }}
            route={{
              from: { city: "Kolkata", code: "CCU" },
              to: { city: "Mumbai", code: "BOM" },
            }}
            flightDetails={{
              type: "One Way Trip",
            }}
            bookingId="NF2AF477949517183326"
            status={{
              type: "cancelled",
              message: "Your booking was cancelled.",
              cancellationDate: "12 July' 25",
            }}
            actions={[
              { text: "View Refund Details", variant: "outline" },
              { text: "View Booking", variant: "filled" },
            ]}
            hasCancellationPenalty={true}
          />
        )}
        {activeTab === "completed" && (
          <CustomBookingCard
            airline={{ name: "Indigo", logo: "6E", flightNumber: "6E 2343" }}
            route={{
              from: { city: "Kolkata", code: "CCU" },
              to: { city: "Mumbai", code: "BOM" },
            }}
            flightDetails={{
              date: "12 July' 25",
              arrival:"10:00 AM",
              departure: "12:00 PM",
              type: "One Way Trip",
            }}
            status={{
              type: "completed",
              message: "Your Journey has been Completed.",
            }}
            actions={[
              { text: "Download Invoice", variant: "outline" },
              { text: "View Details", variant: "filled" },
            ]}
          />
        )}
        {activeTab === "unsuccessful" && (
          <CustomBookingCard
            airline={{ name: "Indigo", logo: "6E", flightNumber: "6E 2343" }}
            route={{
              from: { city: "Kolkata", code: "CCU" },
              to: { city: "Abu Dhabi", code: "AUH" },
            }}
            flightDetails={{
              
            }}
            bookingId="NN2AFEZV34088224854"
            status={{
              type: "unsuccessful",
              message: "Payment Status Awaited",
            }}
            actions={[]}

            
          />
        )}
      </div>
    </div>
  );
};

export default BookTripInfo;