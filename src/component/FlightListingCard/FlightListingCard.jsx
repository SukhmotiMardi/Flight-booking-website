import { Card, Button, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios"; // Added for API call
import FlightDetailModal from "./FlightDetailModal/FlightDetailModal";
import Cookie from "js-cookie"
const formatTime = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

const formatDuration = (duration) => {
  const hours = parseInt(duration.match(/(\d+)H/)?.[1] || 0);
  const minutes = parseInt(duration.match(/(\d+)M/)?.[1] || 0);
  return `${hours}h ${minutes}m`;
};

const airportData = {
  AMD: {
    city: "Ahmedabad",
    airport: "Sardar Vallabhbhai Patel International Airport",
  },
  ATQ: {
    city: "Amritsar",
    airport: "Sri Guru Ram Dass Jee International Airport",
  },
  BBI: { city: "Bhubaneswar", airport: "Biju Patnaik International Airport" },
  BDQ: { city: "Vadodara", airport: "Vadodara Airport" },
  BHO: { city: "Bhopal", airport: "Raja Bhoj Airport" },
  BLR: { city: "Bengaluru", airport: "Kempegowda International Airport" },
  BOM: {
    city: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  },
  CCJ: { city: "Kozhikode", airport: "Calicut International Airport" },
  CCU: {
    city: "Kolkata",
    airport: "Netaji Subhash Chandra Bose International Airport",
  },
  CJB: { city: "Coimbatore", airport: "Coimbatore International Airport" },
  COK: { city: "Kochi", airport: "Cochin International Airport" },
  DED: { city: "Dehradun", airport: "Jolly Grant Airport" },
  DEL: { city: "Delhi", airport: "Indira Gandhi International Airport" },
  DMU: { city: "Dimapur", airport: "Dimapur Airport" },
  GAY: { city: "Gaya", airport: "Gaya Airport" },
  GOI: { city: "Goa", airport: "Dabolim Airport" },
  GOX: { city: "Goa", airport: "Manohar International Airport" },
  GAU: {
    city: "Guwahati",
    airport: "Lokpriya Gopinath Bordoloi International Airport",
  },
  GOP: { city: "Gorakhpur", airport: "Gorakhpur Airport" },
  HBX: { city: "Hubli", airport: "Hubli Airport" },
  HYD: { city: "Hyderabad", airport: "Rajiv Gandhi International Airport" },
  IDR: { city: "Indore", airport: "Devi Ahilyabai Holkar Airport" },
  IMF: { city: "Imphal", airport: "Imphal International Airport" },
  IXA: { city: "Agartala", airport: "Maharaja Bir Bikram Airport" },
  IXB: { city: "Bagdogra", airport: "Bagdogra Airport" },
  IXC: { city: "Chandigarh", airport: "Chandigarh Airport" },
  IXE: { city: "Mangaluru", airport: "Mangaluru International Airport" },
  IXG: { city: "Belagavi", airport: "Belagavi Airport" },
  IXJ: { city: "Jammu", airport: "Jammu Airport" },
  IXM: { city: "Madurai", airport: "Madurai Airport" },
  IXR: { city: "Ranchi", airport: "Birsa Munda Airport" },
  IXS: { city: "Silchar", airport: "Silchar Airport" },
  IXZ: { city: "Port Blair", airport: "Veer Savarkar International Airport" },
  JAI: { city: "Jaipur", airport: "Jaipur International Airport" },
  JDH: { city: "Jodhpur", airport: "Jodhpur Airport" },
  JLR: { city: "Jabalpur", airport: "Jabalpur Airport" },
  KBK: { city: "Kushinagar", airport: "Kushinagar International Airport" },
  LKO: {
    city: "Lucknow",
    airport: "Chaudhary Charan Singh International Airport",
  },
  MAA: { city: "Chennai", airport: "Chennai International Airport" },
  NAG: {
    city: "Nagpur",
    airport: "Dr. Babasaheb Ambedkar International Airport",
  },
  PAT: { city: "Patna", airport: "Jay Prakash Narayan Airport" },
  PNQ: { city: "Pune", airport: "Pune Airport" },
  PYG: { city: "Pakyong", airport: "Pakyong Airport" },
  RJA: { city: "Rajahmundry", airport: "Rajahmundry Airport" },
  RPR: { city: "Raipur", airport: "Swami Vivekananda Airport" },
  SHL: { city: "Shillong", airport: "Shillong Airport" },
  SXR: { city: "Srinagar", airport: "Srinagar International Airport" },
  STV: { city: "Surat", airport: "Surat International Airport" },
  TCR: { city: "Tuticorin", airport: "Tuticorin Airport" },
  TIR: { city: "Tirupati", airport: "Tirupati Airport" },
  TRV: {
    city: "Thiruvananthapuram",
    airport: "Trivandrum International Airport",
  },
  TRZ: {
    city: "Tiruchirappalli",
    airport: "Tiruchirappalli International Airport",
  },
  UDR: { city: "Udaipur", airport: "Maharana Pratap Airport" },
  VGA: { city: "Vijayawada", airport: "Vijayawada Airport" },
  VNS: { city: "Varanasi", airport: "Lal Bahadur Shastri Airport" },
  VTZ: { city: "Visakhapatnam", airport: "Visakhapatnam Airport" },
};

const carrierData = {
  AI: "Air India",
  IX: "Air India Express",
  I5: "AIX Connect",
  "6E": "IndiGo",
  SG: "SpiceJet",
  QP: "Akasa Air",
  G8: "Go First",
};

const FlightListingCard = ({ flight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onTimePercentage, setOnTimePercentage] = useState(null); 

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (flight.length < 1) {
    return <>No Data Found</>;
  }
  const itinerary = flight.itineraries[0];
  const travelerPricings = flight.travelerPricings?.[0];

  const segments = itinerary.segments;
  const firstSegment = segments[0];
  const lastSegment = segments[segments.length - 1];
  const flightNumber = `${firstSegment.carrierCode} ${firstSegment.number}`;
  const airline =
    carrierData[firstSegment.carrierCode] || firstSegment.carrierCode;
  const departure = {
    city:
      airportData[firstSegment.departure.iataCode]?.city ||
      firstSegment.departure.iataCode,
    code: firstSegment.departure.iataCode,
    time: formatTime(firstSegment.departure.at),
    airport:
      airportData[firstSegment.departure.iataCode]?.airport ||
      firstSegment.departure.iataCode,
  };
  const arrival = {
    city:
      airportData[lastSegment.arrival.iataCode]?.city ||
      lastSegment.arrival.iataCode,
    code: lastSegment.arrival.iataCode,
    time: formatTime(lastSegment.arrival.at),
    airport:
      airportData[lastSegment.arrival.iataCode]?.airport ||
      lastSegment.arrival.iataCode,
  };
  const duration = formatDuration(itinerary.duration);
  const price = parseInt(flight.price.grandTotal).toLocaleString();
  const isNonStop = segments.length === 1;
  const flightData = [
    travelerPricings,
    firstSegment,
    lastSegment,
    flightNumber,
    airline,
    departure,
    arrival,
    duration,
    price,
  ];

  const calculateLayoverTime = (segments) => {
    const layovers = [];
    for (let i = 0; i < segments.length - 1; i++) {
      const arrivalTime = new Date(segments[i].arrival.at);
      const nextDepartureTime = new Date(segments[i + 1].departure.at);
      const layoverMs = nextDepartureTime - arrivalTime;
      console.log("layover in ms", layoverMs);

      const layoverMinutes = Math.floor(layoverMs / 1000 / 60);
      const hours = Math.floor(layoverMinutes / 60);
      const minutes = layoverMinutes % 60;
      const layoverCity =
        airportData[segments[i].arrival.iataCode]?.city ||
        segments[i].arrival.iataCode;
      layovers.push({
        city: layoverCity,
        iataCode: segments[i].arrival.iataCode,
        duration: `${hours}h ${minutes}m`,
      });
    }
    return layovers;
  };

  const layovers = calculateLayoverTime(segments);

  const fetchDelayPrediction = async () => {
    try {
      const access_token = Cookie.get("access_token"); 
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/travel/predictions/flight-delay?originLocationCode=${
          firstSegment.departure.iataCode
        }&destinationLocationCode=${
          lastSegment.arrival.iataCode
        }&departureDate=${
          firstSegment.departure.at.split("T")[0]
        }&departureTime=${firstSegment.departure.at
          .split("T")[1]
          .substring(0, 5)}:00&arrivalDate=${
          lastSegment.arrival.at.split("T")[0]
        }&arrivalTime=${lastSegment.arrival.at
          .split("T")[1]
          .substring(0, 5)}:00&aircraftCode=${
          firstSegment.aircraft?.code || "321"
        }&carrierCode=${firstSegment.carrierCode}&flightNumber=${
          firstSegment.number
        }&duration=${itinerary.duration}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      if (response.data.data && response.data.data.length > 0) {
        const highestProbabilityPrediction = response.data.data.reduce(
          (prev, current) =>
            parseFloat(current.probability) > parseFloat(prev.probability)
              ? current
              : prev
        );
        const percentage = getRandomPercentage(
          highestProbabilityPrediction.result
        ); // Ensure getRandomPercentage is defined
        setOnTimePercentage(percentage);
      }
    } catch (error) {
      console.log("Error fetching delay prediction: ", error);
      setOnTimePercentage(93);
    }
  };

  // useEffect(() => {
    
  //   fetchDelayPrediction();
  //    const intervalId = setInterval(() => {
  //     fetchDelayPrediction();
  //   }, 200000);
  //   return () => clearInterval(intervalId);
  // }, [ ]);

  return (
    <>
      <Card
        className="w-full max-w-[1000px] mx-auto rounded-2xl border border-[#E3E6ED] p-0 hover:shadow-2xl transition-shadow duration-300"
        bodyStyle={{ padding: 0 }}
        style={{ boxShadow: "0 2px 8px 0 rgba(44, 51, 73, 0.04)" }}
      >
        <div className="flex">
          <div className="flex flex-col items-end justify-center px-6 pt-4 pb-2 ">
            {/* Airline Logo and Name */}
            <div className="flex items-center gap-3 min-w-[180px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2">
                <img
                  src={`/Images/carrierFlightLogo/${firstSegment.carrierCode}.png`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/Images/carrierFlightLogo/Dummy.PNG";
                  }}
                  alt={airline}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-[#1a2341] text-[17px] leading-tight">
                  {airline}
                </div>
                <div className="text-xs text-[#6B7280] font-medium">
                  {flightNumber}
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="text-[#4C9839] text-[22px] font-bold pt-3 flex items-center gap-3 min-w-[180px]">
              ₹ {price}{" "}
              <span className="text-[#1a2341] text-[15px] font-medium">
                / Per Adult
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between px-6 pt-2 pb-4 gap-6">
            {/* On Time Percentage */}
            <div className="flex items-center gap-1 bg-[#FFFFFF] rounded px-2 py-1 text-xs font-medium text-[#000000] border border-[black]">
              {onTimePercentage}% On Time
              <Tooltip
                title="This flight is almost always on time!
             We still recommend that you check the latest flight status with the airline directly on the day of travel."
              >
                <InfoCircleOutlined className="ml-1 text-[#ffffff] text-xs bg-[#063D5E] rounded-md" />
              </Tooltip>
            </div>
            <div className="flex">
              {/* From */}
              <div className="flex flex-col items-start w-1/3">
                <div className="text-sm  bg-[#EFEFEF] p-2 font-bold mb-1 rounded">
                  From{" "}
                  <span className="text-[#063D5E] font-semibold">
                    {departure.city} ({departure.code})
                  </span>
                </div>
                <div className="text-[17px] font-semibold text-[#1a2341] mb-1">
                  {departure.time}
                </div>
                <div className="text-xs text-[#2F83B2] font-normal mb-1">
                  Departure
                </div>
                <div className="bg-[#EFEFEF] rounded px-2 py-1 text-xs text-[#1a2341] flex items-center gap-1">
                  <span className="inline-block align-middle">
                    <img
                      src="/baggage-delay.png"
                      alt="airport"
                      className="w-4 h-4 inline-block mr-1"
                    />
                  </span>
                  {departure.airport} ({departure.code})
                </div>
              </div>
              {/* Duration and Plane */}
              <div className="flex flex-col items-center flex-1 w-1/3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-32 h-px bg-[#E3E6ED] inline-block"></span>
                  <img
                    src="/noto-v1_airplane.png"
                    alt="plane"
                    className="w-6 h-6 mx-2"
                  />
                  <span className="w-32 h-px bg-[#E3E6ED] inline-block"></span>
                </div>
                {/* <div className="text-xs text-[#1a2341] font-medium">
                Trip Duration:{" "}
                <span className="font-bold text-[15px]">{duration}</span> (
                {isNonStop})
              </div> */}
                <div className="text-xs text-[#1a2341] font-medium">
                  Trip Duration:{" "}
                  <span className="font-bold text-[15px]">{duration}</span> (
                  {isNonStop ? (
                    "Non Stop"
                  ) : (
                    <Tooltip
                      title={layovers.map((layover, index) => (
                        <div
                          key={index}
                          className="h-10 flex justify-center items-center"
                        >
                          Layover in {layover.city} ({layover.iataCode}):{" "}
                          <b>{layover.duration}</b>
                        </div>
                      ))}
                    >
                      {segments.length - 1} Stop{segments.length > 2 ? "s" : ""}
                    </Tooltip>
                  )}
                  )
                </div>
              </div>
              {/* To */}
              <div className="flex flex-col items-end w-1/3">
                <div className="text-sm  bg-[#EFEFEF] p-2 font-bold mb-1 rounded">
                  To{" "}
                  <span className="text-[#063D5E] font-semibold">
                    {arrival.city} ({arrival.code})
                  </span>
                </div>
                <div className="text-[17px] font-semibold text-[#1a2341] mb-1">
                  {arrival.time}
                </div>
                <div className="text-xs text-[#2F83B2] font-normal mb-1 text-right">
                  Landing
                </div>
                <div className="bg-[#EFEFEF] rounded px-2 py-1 text-xs text-[#1a2341] flex items-center gap-1">
                  {arrival.airport}
                  <span className="inline-block align-middle">
                    <img
                      src="/baggage-delay.png"
                      alt="airport"
                      className="w-4 h-4 inline-block mr-1"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 ">
              <Button
                onClick={() => showModal()}
                className="border-none bg-[#EFEFEF] text-[#4C9839]  font-semibold text-[15px] px-5 py-1.5 rounded "
                style={{ boxShadow: "none" }}
              >
                View Details
              </Button>
              <FlightDetailModal
                showModal={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
                flightData={flightData}
              />
              <Button
                type="primary"
                className="bg-[#063D5E] text-white font-semibold text-[15px] px-7 py-1.5 rounded hover:bg-[#1a2341] border-none"
                style={{ boxShadow: "none" }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default FlightListingCard;