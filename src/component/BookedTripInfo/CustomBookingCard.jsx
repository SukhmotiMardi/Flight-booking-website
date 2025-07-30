const CustomBookingCard = ({
  airline ,
  price = {
    amount: "5,970",
    currency: "₹",
    perText: "Per Adult"
  },
  route ,
  flightDetails,
  bookingId = "NF2AF477949517183326",
  status,
  actions ,
  hasCancellationPenalty = false
}) => {
  const getStatusStyles = () => {
    switch (status.type) {
      case "cancelled":
        return {
          container: "bg-red-50 border-red-200",
          text: "text-red-600"
        };
      case "completed":
        return {
          container: "bg-green-50 border-green-200",
          text: "text-green-700"
        };
      case "unsuccessful":
        return {
          container: "bg-[#BEE1E9] border-blue-200",
          text: "text-gray-700"
        };
      default:
        return {
          container: "bg-gray-50 border-gray-200",
          text: "text-gray-700"
        };
    }
  };
 
  const statusStyles = getStatusStyles();
 
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5 w-[1024px] mx-auto">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-end justify-center px-6 pt-4 pb-2 w-[250px] flex-shrink-0">
          <div className="flex items-center gap-3 w-[180px]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2">
              <img
                src={`/Images/carrierFlightLogo/${airline.logo}.png`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Images/carrierFlightLogo/Dummy.PNG";
                }}
                alt={airline.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <div className="font-semibold text-[#1a2341] text-[17px] leading-tight">
                {airline.name}
              </div>
              <div className="text-xs text-[#6B7280] font-medium">
                {airline.flightNumber}
              </div>
            </div>
          </div>
          <div className="text-[#4C9839] text-[22px] font-bold pt-3 flex items-center gap-3 min-w-[180px]">
            {price.currency} {price.amount}{" "}
            <span className="text-[#1a2341] text-[15px] font-medium">
              / {price.perText}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-[500px] mt-4">
          <div className="flex items-center justify-between mb-6">
            <div className='flex gap-2 items-center border rounded-lg p-2 bg-[#DFE9FF]'>
              <p className="font-bold">From</p>
              <p className="font-bold text-blue-900">{route.from.city}({route.from.code})</p>
            </div>
            <div className="text-right">
              <div className='flex gap-2 items-center border rounded-lg p-2 bg-[#DFE9FF]'>
             <p className="font-bold">To</p>
              <p className="font-bold text-blue-900">{route.to.city}({route.to.code})</p>
            </div>
              
            </div>
          </div>
 
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                {status.type === "cancelled" ? (
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <p>Cancellation Date: <span className="font-medium">{status.cancellationDate}</span></p>
                    <span>|</span>
                    <p>Flight Type: <span className="font-medium">{flightDetails.type}</span></p>
                    <span>|</span>
                    <p>Booking ID: <span className="font-medium">{bookingId}</span></p>
                  </div>
                ) : status.type === "awaited" ? (
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <p>Booking ID: <span className="font-medium">{bookingId}</span></p>
                  </div>
                ) : (
                  <>
                    {flightDetails.date && (
                      <div className="flex items-center justify-between mb-2">
                        
<p>{flightDetails.date} {flightDetails.arrival}</p>
                        
<p>{flightDetails.date} {flightDetails.arrival}</p>
                      </div>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <p>Flight Type: <span className="font-medium">{flightDetails.type}</span></p>
                      <span>|</span>
                      <p>Booking ID: <span className="font-medium">{bookingId}</span></p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-1 ml-4">
        <div className="flex items-center h-[20px] min-w-[200px]">
          <p className={`text-xs text-gray-500 flex items-center ${!hasCancellationPenalty ? 'invisible' : ''}`}>
            <span className="mr-1">✓</span>
            is subjected to a cancellation penalty
          </p>
        </div>
        <div className="flex-1 ml-4">
          <div className={`inline-block px-3 py-1 rounded-md border ${statusStyles.container}`}>
            <p className={`text-sm font-medium ${statusStyles.text}`}>
              {status.message}
            </p>
          </div>
        </div>
        <div className="flex space-x-3">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                action.variant === 'filled'
                  ? 'bg-[#063D5E] text-white hover:bg-blue-800'
                  : 'border border-blue-900 text-blue-900 bg-white hover:bg-blue-50'
              }`}
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default CustomBookingCard;
 

