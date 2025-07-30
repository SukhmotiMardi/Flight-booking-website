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
        <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-5 w-[1024px] mx-auto">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col items-end justify-center px-6 pt-4 pb-2 w-[250px] flex-shrink-0">
              <div className="flex items-center gap-3 w-[180px]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2">
                  <img
                    src={item.logo}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/Images/carrierFlightLogo/Dummy.PNG";
                    }}
                    alt={item.airline}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2341] text-[17px] leading-tight">
                    {item.airline}
                  </div>
                  <div className="text-xs text-[#6B7280] font-medium">
                    {item.code}
                  </div>
                </div>
              </div>
              <div className="text-[#4C9839] text-[22px] font-bold pt-3 flex items-center gap-3 min-w-[180px]">
                ₹ {item.price}{" "}
                <span className="text-[#1a2341] text-[15px] font-medium">
                  / Per Adult
                </span>
              </div>
            </div>
            
            <div className="flex-1 min-w-[500px] mt-4">
              <div className="flex items-center justify-between mb-6">
                <div className='flex gap-2 items-center border rounded-lg p-2 bg-[#DFE9FF]'>
                  <p className="font-bold">From</p>
                  <p className="font-bold text-blue-900">{item.from.city}({item.from.code})</p>
                </div>
                 <div className="flex flex-col items-center flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-16 h-px bg-gray-300 inline-block"></span>
                <FaPlane className="text-xl text-[#063D5E]" />
                <span className="w-16 h-px bg-gray-300 inline-block"></span>
              </div>
              <div className="text-xs text-[#1a2341] font-medium">
                Trip Duration: <span className="font-bold text-[15px]">{item.duration}</span> ({item.stops})
              </div>
            </div>
                <div className="text-right">
                  <div className='flex gap-2 items-center border rounded-lg p-2 bg-[#DFE9FF]'>
                    <p className="font-bold">To</p>
                    <p className="font-bold text-blue-900">{item.to.city}({item.to.code})</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p>{item.from.time}</p>
                      {/* <div className="flex items-center gap-2">
                        <span className="w-16 h-px bg-gray-300 inline-block"></span>
                        <FaPlane className="text-lg text-[#063D5E]" />
                        <span className="w-16 h-px bg-gray-300 inline-block"></span>
                      </div> */}
                     
                      <p>{item.to.time}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <p>Booking ID: <span className="font-medium">{item.bookingId}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-1 ml-4">
            <div className="flex items-center h-[20px] min-w-[200px]">
              <p className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">✓</span>
                is subjected to a cancellation penalty
              </p>
            </div>
            {/* <div className="flex-1 ml-4">
              <div className="inline-block px-3 py-1 rounded-md border bg-blue-50 border-blue-200">
                <p className="text-sm font-medium text-blue-700">
                  Upcoming Flight
                </p>
              </div>
            </div> */}
            <div className="flex space-x-3">
              <button className="px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap border border-blue-900 text-blue-900 bg-white hover:bg-blue-50">
                Cancel Booking
              </button>
              <button className="px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap border border-blue-900 text-blue-900 bg-white hover:bg-blue-50">
                Change Travel Date
              </button>
              <button className="px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap bg-[#063D5E] text-white hover:bg-blue-800">
                View & Manage Booking
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;


 