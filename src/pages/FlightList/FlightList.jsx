import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";
import FlightListingCard from "../../component/FlightListingCard/FlightListingCard";

const parseDuration = (duration) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;
  const match = duration.match(regex);
  console.log(match,"time regex match")
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  return hours * 60 + minutes;
};


const FlightList = () => {
  const [flightData, setFlightData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: "price", direction: "asc" });
  const location = useLocation();
  const access_token = Cookies.get("access_token");

  const getFlightListApi = async () => {
    const payload = {
      originLocationCode: location.state.originLocationCode,
      destinationLocationCode: location.state.destinationLocationCode,
      departureDate: location.state.departureDate,
      adults: location.state.adults.adults,
      travelClass: location.state.travelClass,
    };
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${
          payload.originLocationCode
        }&destinationLocationCode=${
          payload.destinationLocationCode
        }&departureDate=${payload.departureDate}&adults=${
          payload.adults
        }&travelClass=${payload.travelClass.toUpperCase()}&currencyCode=INR&max=10`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      if (response) {
        setFlightData(response.data.data);
        setFilteredData(response.data.data);
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
  };

  const sortedData = (field) => {
    const newDirection =
      sortConfig.field === field && sortConfig.direction === "asc" ? "desc" : "asc";

    setSortConfig({ field, direction: newDirection });

    const sorted = [...flightData].sort((a, b) => {
      if (field === "price") {
        const priceA = parseFloat(a.price.total);
        const priceB = parseFloat(b.price.total);
        return newDirection === "asc" ? priceA - priceB : priceB - priceA;
      } else if (field === "duration") {
        const durationA = parseDuration(a.itineraries[0].duration);
        const durationB = parseDuration(b.itineraries[0].duration);
        return newDirection === "asc" ? durationA - durationB : durationB - durationA;
      } else if (field === "departure") {
        const departureA = new Date(a.itineraries[0].segments[0].departure.at);
        const departureB = new Date(b.itineraries[0].segments[0].departure.at);
        return newDirection === "asc" ? departureA - departureB : departureB - departureA;
      }
      return 0;
    });

    setFilteredData(sorted);
    console.log(sorted, "sorted data");
  };

  useEffect(() => {
    getFlightListApi();
  }, []);

  if (!flightData || flightData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-gray-600">Loading flight data...</p>
        </div>
      </div>
    );
  }
   return (
    <div className="flex justify-center w-full mt-28">
      <div className="max-w-[1280px] w-full mx-auto px-4 lg:px-8 xl:px-12">
        {/* Sort Section */}
        <div className="flex justify-center items-center my-6 gap-6">
          Sort By:
          <div>
            <div className="bg-[#073C5E] mx-auto rounded-md w-[800px] text-white p-3 flex h-[55px] flex-row items-center justify-between gap-4">
              <div
                onClick={() => sortedData("price")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 border-r border-dashed cursor-pointer border-yellow-400 ${sortConfig.field === "price" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Price: <b>{sortConfig.field === "price" && sortConfig.direction === "asc" ? "Low to High" : "High to Low"}</b>
                </p>
                {sortConfig.field === "price" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
              <div
                onClick={() => sortedData("duration")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 border-r border-dashed cursor-pointer border-yellow-400 ${sortConfig.field === "duration" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Fastest: <b>{sortConfig.field === "duration" && sortConfig.direction === "asc" ? "Shortest First" : "Longest First"}</b>
                </p>
                {sortConfig.field === "duration" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
              <div
                onClick={() => sortedData("departure")}
                className={`flex items-center justify-between gap-3 p-3 flex-1 cursor-pointer ${sortConfig.field === "departure" ? "bg-[#094b7a]" : ""}`}
              >
                <p className="text-sm flex gap-4">
                  Departure: <b>{sortConfig.field === "departure" && sortConfig.direction === "asc" ? "Earliest First" : "Latest First"}</b>
                </p>
                {sortConfig.field === "departure" && sortConfig.direction === "asc" ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
              </div>
            </div>
          </div>
        </div>
        {/* Flight Card */}
        <div className="flex flex-col gap-4">
          {filteredData.map((flight) => (
            <FlightListingCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightList;