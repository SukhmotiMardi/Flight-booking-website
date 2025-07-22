import { Modal } from "antd";
import "../../../App.css";

const FlightDetailModal = ({
  showModal,
  handleCancel,
  handleOk,
  flightData,
}) => {
  const [
    travelerPricings,
    firstSegment,
    lastSegment,
    flightNumber,
    airline,
    departure,
    arrival,
    duration,
    price,
  ] = flightData;
  const fareDetails = travelerPricings?.fareDetailsBySegment?.[0] || {};

  const airportData = {
  CCU: {
    city: "Kolkata",
    airport: "Netaji Subhash Chandra Bose International Airport",
  },
  BLR: { city: "Bengaluru", airport: "Kempegowda International Airport" },
  BOM: {
    city: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  },
  DEL: { city: "Delhi", airport: "Indira Gandhi International Airport" },
};

  const cabinBags = fareDetails?.includedCabinBags?.weight
    ? `${fareDetails.includedCabinBags.weight} ${
        fareDetails.includedCabinBags.weightUnit || "kg"
      }`
    : "Not Included";
  const checkInBags = fareDetails?.includedCheckedBags?.weight
    ? `${fareDetails.includedCheckedBags.weight} ${
        fareDetails.includedCheckedBags.weightUnit || "kg"
      }`
    : "Not Included";
  const hasFood =
    fareDetails?.amenities?.some(
      (amenity) => amenity.amenityType === "MEAL" && !amenity.isChargeable
    ) ?? false;
  const upgradable=fareDetails?.amenities?.some((amenity)=>amenity.amenityType==="UPGRADES" && amenity.isChargeable)??false
  return (
    <Modal
      open={showModal}
      onCancel={handleCancel}
      footer={null}
      centered
      className="rounded-lg shadow-xl p-0 max-w-[600px] mx-auto "
      width={600}
      bodyStyle={{ padding: 0 }}
    >
      {/* Header */}
      <div className="bg-[#07689F] rounded-t-lg px-6 w-[100%] py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`/Images/carrierFlightLogo/${firstSegment.carrierCode}.png`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/Images/carrierFlightLogo/Dummy.PNG";
            }}
            alt={airline}
            className="w-10 h-10  rounded-full object-contain"
          />
          <div className="text-white font-semibold text-lg">
            {airline} <span className="font-normal">| {flightNumber}</span>
          </div>
        </div>
        <div className="text-white font-medium text-base">
          Flight Duration&nbsp; <span className="font-bold">{duration}</span>
        </div>
      </div>
      {/* Main Content */}
      <div className="bg-[#FFFBEF] px-6 py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          {/* Departure */}
          <div className="flex flex-col items-start w-1/3">
            <div className="text-[#063D5E] text-3xl font-bold leading-none">
              {departure.code}
            </div>
            <div className="font-bold text-[#1a2341] text-base">
              {departure.city}
            </div>
            <div className="text-xs text-[#1a2341] mb-1">
              {airportData[departure.code]?.airport || departure.code}
            </div>
            <div className="text-[#1a2341] text-base font-medium">
              {departure.time}
            </div>
          </div>
          {/* Center: Icon and dashed line */}
          <div className="flex flex-col items-center w-1/3">
            <div className="flex items-center gap-2 mb-2">
              <img src="/FCO.png" alt="plane" className="w-20 h-20" />
            </div>
            <div className="text-xs text-[#1a2341] font-medium">
              {departure.code} ({departure.time}) &mdash; {arrival.code} (
              {arrival.time})
            </div>
            <div className="text-xs text-[#1a2341] font-medium mt-1">
              {airline} | {flightNumber}
            </div>
          </div>
          {/* Arrival */}
          <div className="flex flex-col items-end w-1/3">
            <div className="text-[#063D5E] text-3xl font-bold leading-none">
              {arrival.code}
            </div>
            <div className="font-bold text-[#1a2341] text-base">
              {arrival.city}
            </div>
            <div className="text-xs text-[#1a2341] mb-1">
              {airportData[arrival.code]?.airport || arrival.code}
            </div>
            <div className="text-[#1a2341] text-base font-medium">
              {arrival.time}
            </div>
            {lastSegment.arrival.terminal && (
              <div className="text-xs text-[#1a2341] font-bold mt-1">
                Terminal{" "}
                <span className="text-[#063D5E] text-xl font-bold">
                  T{lastSegment.arrival.terminal}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Info Row */}
        <div className="flex items-center justify-between w-full border-t border-b border-[#E3E6ED] py-3 mt-2 mb-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center text-xs text-[#1a2341]">
              <span className="font-normal">
                <span className="inline-block align-middle mr-1">
                  <img
                    src="/baggage-delay.png"
                    alt="Cabin"
                    className="w-4 h-4 inline-block"
                  />
                </span>
                Cabin: {cabinBags}
              </span>
            </div>
            <div className="flex flex-col items-center text-xs text-[#1a2341]">
              <span className="font-normal">
                <span className="inline-block align-middle mr-1">
                  <img
                    src="/guidance_luggage-check-in.png"
                    alt="Check-in"
                    className="w-4 h-4 inline-block"
                  />
                </span>
                Check-in: {checkInBags}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-center text-xs text-[#1a2341]">
              <span className="font-normal">
                <span className="inline-block align-middle mr-1">
                  <img
                    src="/material-symbols-light_notification-sound-outline.png"
                    alt="Seat"
                    className="w-4 h-4 inline-block"
                  />
                </span>
                {upgradable?"Upgradable(Charges Apply)":"Not Upgradable"}
              </span>
            </div>
            <div className="flex flex-col items-center text-xs text-[#1a2341]">
              <span className="font-normal">
                <span className="inline-block align-middle mr-1">
                  <img
                    src="/arcticons_emoji-pot-of-food.png"
                    alt="Food"
                    className="w-4 h-4 inline-block"
                  />
                </span>
                {hasFood ? "Food Available" : "No Food"}
              </span>
            </div>
          </div>
        </div>
        {/* Price and Info */}
        <div className="flex flex-col items-start gap-1">
          <div className="text-[#4C9839] text-3xl font-bold">₹{price}</div>
          <div className="w-full text-xs text-[#1a2341] font-medium flex justify-between">
            <div>Taxes Included</div>
            <div>Transactions are encrypted By Lyfetrip.com</div>
          </div>
          {/* <div className="text-xs text-[#1a2341] font-medium"></div> */}
        </div>
      </div>
      {/* Book Now Button */}
      <div className="bg-[#063D5E] rounded-b-lg px-6 py-4 flex justify-center">
        <button
          onClick={handleOk}
          className="bg-white text-[#063D5E] font-normal text-lg px-2 py-1 rounded   transition-colors duration-200"
        >
          Book Now
        </button>
      </div>
    </Modal>
  );
};

export default FlightDetailModal;

