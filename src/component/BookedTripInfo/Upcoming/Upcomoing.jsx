import { FaPlane } from "react-icons/fa";

const bookings = [
  {
    airline: "Akasa Air",
    code: "QP 1868",
    logo: "/Images/carrierFlightLogo/QP.png",
    price: "5,278",
    from: { city: "Kolkata", code: "CCU", time: "10 Oct' 25 04:00 AM" },
    to: { city: "Mumbai", code: "BOM", time: "10 Oct' 25 06:55 AM" },
    duration: "2h 55m",
    stops: "Non Stop",
    bookingId: "NVBA4875BG1243T67",
  },
  {
    airline: "Indigo",
    code: "QP 4571",
    logo: "/Images/carrierFlightLogo/6E.png",
    price: "5,970",
    from: { city: "Kolkata", code: "CCU", time: "24 Oct' 25 09:30 PM" },
    to: { city: "Mumbai", code: "BOM", time: "24 Oct' 25 00:10AM" },
    duration: "2h 40m",
    stops: "Non Stop",
    bookingId: "7DR215BG1243558C",
  },
];

const Upcoming = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      {bookings.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 flex flex-row items-stretch px-6 py-4 gap-4 shadow-sm"
        >
          {/* Airline and price */}
          <div className="flex flex-col justify-between min-w-[180px]">
            <div className="flex items-center gap-3">
              <img
                src={item.logo}
                alt={item.airline}
                className="w-12 h-12 rounded-full object-contain border"
              />
              <div>
                <div className="font-semibold text-[#1a2341] text-[17px] leading-tight">
                  {item.airline}
                </div>
                <div className="text-xs text-[#6B7280] font-medium">{item.code}</div>
              </div>
            </div>
            <div className="text-[#4C9839] text-[22px] font-bold pt-3">
              ₹ {item.price}
              <span className="text-[#1a2341] text-[15px] font-medium"> / Per Adult</span>
            </div>
            <div className="text-[10px] text-gray-400 pt-1">* is subjected to a cancellation penalty</div>
          </div>

          {/* From, duration, to */}
          <div className="flex-1 flex flex-row items-center justify-between gap-4">
            {/* From */}
            <div className="flex flex-col items-start min-w-[160px]">
              <div className="text-sm bg-[#EFEFEF] px-3 py-1 font-bold rounded mb-1">
                From <span className="text-[#063D5E] font-semibold">{item.from.city}({item.from.code})</span>
              </div>
              <div className="text-xs text-gray-700 mb-1">{item.from.time}</div>
              <div className="text-xs text-gray-700 mb-1">Booking ID: <span className="font-semibold">{item.bookingId}</span></div>
            </div>
            {/* Duration and plane */}
            <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-16 h-px bg-gray-300 inline-block"></span>
                <FaPlane className="text-xl text-[#063D5E]" />
                <span className="w-16 h-px bg-gray-300 inline-block"></span>
              </div>
              <div className="text-xs text-[#1a2341] font-medium">
                Trip Duration: <span className="font-bold text-[15px]">{item.duration}</span> ({item.stops})
              </div>
              <div className="flex flex-row gap-2 mt-2 mb-1">
                <button className="border border-gray-400 rounded px-3 py-1 text-xs font-medium hover:bg-gray-100">Cancel Booking</button>
                <button className="border border-gray-400 rounded px-3 py-1 text-xs font-medium hover:bg-gray-100">Change Travel Date</button>
              </div>
            </div>
            {/* To and actions */}
            <div className="flex flex-col items-end min-w-[180px] gap-2">
              <div className="text-sm bg-[#EFEFEF] px-3 py-1 font-bold rounded mb-1">
                To <span className="text-[#063D5E] font-semibold">{item.to.city}({item.to.code})</span>
              </div>
              <div className="text-xs text-gray-700 mb-1">{item.to.time}</div>
              <button className="bg-[#063D5E] text-white rounded px-4 py-1 text-sm font-medium hover:bg-[#1a2341]">View & Manage Booking</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
