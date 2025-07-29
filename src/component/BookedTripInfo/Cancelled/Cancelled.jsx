import { FaPlane } from "react-icons/fa";

const Cancelled = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 flex flex-row items-stretch px-6 py-4 gap-4 shadow-sm">
      {/* Airline and price */}
      <div className="flex flex-col justify-between min-w-[180px]">
        <div className="flex items-center gap-3">
          <img
            src="/Images/carrierFlightLogo/6E.png"
            alt="Indigo"
            className="w-12 h-12 rounded-full object-contain border"
          />
          <div>
            <div className="font-semibold text-[#1a2341] text-[17px] leading-tight">
              Indigo
            </div>
            <div className="text-xs text-[#6B7280] font-medium">QP 4571</div>
          </div>
        </div>
        <div className="text-[#4C9839] text-[22px] font-bold pt-3">
          ₹ 5,970
          <span className="text-[#1a2341] text-[15px] font-medium"> / Per Adult</span>
        </div>
        <div className="text-[10px] text-gray-400 pt-1">* is subjected to a cancellation penalty</div>
      </div>

      {/* From, duration, to */}
      <div className="flex-1 flex flex-row items-center justify-between gap-4">
        {/* From */}
        <div className="flex flex-col items-start min-w-[160px]">
          <div className="text-sm bg-[#EFEFEF] px-3 py-1 font-bold rounded mb-1">
            From <span className="text-[#063D5E] font-semibold">Kolkata(CCU)</span>
          </div>
          <div className="text-xs text-gray-700 mb-1">Cancellation Date: June 17th</div>
          <div className="text-xs text-gray-700 mb-1">Booking ID: <span className="font-semibold">NF2A47794951718326</span></div>
                    <div className="text-xs text-red-600 mb-1 font-medium">Your flight booking has been cancelled.</div>

        </div>
        {/* Duration and plane */}
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-16 h-px bg-gray-300 inline-block"></span>
            <FaPlane className="text-xl text-[#063D5E]" />
            <span className="w-16 h-px bg-gray-300 inline-block"></span>
          </div>
          <div className="text-xs text-[#1a2341] font-medium">
            Flight Type: <span className="font-bold text-[15px]">One Way Trip</span>
          </div>
        </div>
        {/* To and actions */}
        <div className="flex flex-col items-end min-w-[180px] gap-2">
          <div className="text-sm bg-[#EFEFEF] px-3 py-1 font-bold rounded mb-1">
            To <span className="text-[#063D5E] font-semibold">Mumbai(BOM)</span>
          </div>
          <button className="bg-[#063D5E] text-white rounded px-4 py-1 text-sm font-medium hover:bg-[#1a2341]">View Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Cancelled;