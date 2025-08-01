import { useEffect, useState } from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Upcoming from "./Upcoming/Upcomoing";
import CustomBookingCard from "./CustomBookingCard";
import { Spin } from "antd";
import { Luggage } from "lucide-react";

const tabs = [
  {
    key: "upcoming",
    label: "Upcoming",
    icon: <Luggage className="text-lg" />,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer on unmount or when activeTab changes
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleTabChange = (tabKey) => {
    if (tabKey !== activeTab) {
      setActiveTab(tabKey);
      // Loading state will be set in useEffect
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "upcoming":
        return <Upcoming />;
      
      case "cancelled":
        return (
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
        );
      
      case "completed":
        return (
          <CustomBookingCard
            airline={{ name: "Indigo", logo: "6E", flightNumber: "6E 2343" }}
            route={{
              from: { city: "Kolkata", code: "CCU" },
              to: { city: "Mumbai", code: "BOM" },
            }}
            flightDetails={{
              date: "12 July' 25",
              arrival: "10:00 AM",
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
        );
      
      case "unsuccessful":
        return (
          <CustomBookingCard
            airline={{ name: "Indigo", logo: "6E", flightNumber: "6E 2343" }}
            route={{
              from: { city: "Kolkata", code: "CCU" },
              to: { city: "Abu Dhabi", code: "AUH" },
            }}
            flightDetails={{}}
            bookingId="NN2AFEZV34088224854"
            status={{
              type: "unsuccessful",
              message: "Payment Status Awaited",
            }}
            actions={[]}
          />
        );
      
      default:
        return <div>No content available</div>;
    }
  };

  return (
    <div className="w-auto bg-[#101A3C] mx-14 rounded my-2">
      {/* Navigation Tabs - Always visible */}
      <div className="max-w-6xl mx-14 flex justify-center py-4">
        <nav className="flex flex-row justify-around gap-2 bg-[#101A3C] rounded-full px-2 py-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              disabled={loading}
              className={`flex items-center gap-2 px-8 py-2 rounded-full font-medium text-base transition-all duration-200 focus:outline-none border-none disabled:opacity-70 disabled:cursor-not-allowed
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

      {/* Content Area with Loading */}
      <div className="w-full bg-[#E8F0FF] flex items-start justify-center p-6 mb-3 min-h-[250px] relative">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#E8F0FF]">
            <Spin size="large" style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}/>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            {renderTabContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTripInfo;