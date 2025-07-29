import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlightListingCard from "../../component/FlightListingCard/FlightListingCard";

const FlightList = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const access_token = Cookies.get("access_token");

  const getFlightListApi = async () => {
    const payload = {
      originLocationCode: location.state.originLocationCode,
      destinationLocationCode: location.state.destinationLocationCode,
      departureDate: location.state.departureDate,
      adults: location.state.adults.adults,
      travelClass:location.state.travelClass
    };
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${payload.originLocationCode}&destinationLocationCode=${payload.destinationLocationCode}&departureDate=${payload.departureDate}&adults=${payload.adults}&travelClass=${payload.travelClass.toUpperCase()}&currencyCode=INR`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      if (response) {
        setFlightData(response.data.data);
      }
    } catch (error) {
      console.log("Error while fetching data: ", error);
    }
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
 <div className="max-w-[1340px] w-full mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex flex-col gap-4">
          {flightData.map((flight) => (
            <FlightListingCard key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightList;



