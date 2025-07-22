import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowLeftRight, Plus, Minus } from "lucide-react";
import Cookies from "js-cookie";
import { DatePicker, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const FlightSearchInterface = () => {
  const { RangePicker } = DatePicker;
  const [tripType, setTripType] = useState("oneWay");
  const [classType, setClassType] = useState("Economy");
  const [leavingFrom, setLeavingFrom] = useState("");
  const [departureApiData, setDepartureApiData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showLeavingFromDropdown, setShowLeavingFromDropdown] = useState(false);
  const [showGoingToDropdown, setGoingToDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [goingTo, setGoingTo] = useState("");
  const [departureDate, setDepartureDate] = useState(
    dayjs().format("YYYY-MM-DD")
  );
  const [returnDate, setReturnDate] = useState(
    dayjs().add(4, "day").format("YYYY-MM-DD")
  );
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [fareType, setFareType] = useState("regular");
  const [goingToSuggestions, setGoingToSuggestions] = useState([]);
  const [isGoingToLoading, setIsGoingToLoading] = useState(false);
  const goingToTimeoutRef = useRef(null);
  const [goingToApiData, setGoingToApiData] = useState(null);
  const leavingFromRef = useRef(null);
  const goingToRef = useRef(null);
  const travelersRef = useRef(null);
  const classRef = useRef(null);
  const timeoutRef = useRef(null);

  const navigate = useNavigate();

  const getAirportApiCall = async (query, type) => {
    if (!query || query.length < 1) {
      if (type === "leavingFrom") {
        setSuggestions([]);
        setDepartureApiData(null);
        setShowLeavingFromDropdown(false);
      } else if (type === "goingTo") {
        setGoingToSuggestions([]);
        setGoingToApiData(null);
        setGoingToDropdown(false);
      }
      return;
    }
    const access_token = Cookies.get("access_token");
    if (!access_token) {
      message.error("No access token found. Please authenticate first.");
      if (type === "leavingFrom") {
        setSuggestions([]);
        setDepartureApiData(null);
        setShowLeavingFromDropdown(false);
      } else if (type === "goingTo") {
        setGoingToSuggestions([]);
        setGoingToApiData(null);
        setGoingToDropdown(false);
      }
      return;
    }
    if (type === "leavingFrom") setIsLoading(true);
    if (type === "goingTo") setIsGoingToLoading(true);
    try {
      const response = await axios.get(
        `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${query.toUpperCase()}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.status === 200 && response.data.data.length > 0) {
        const results = response.data.data.map((item) => ({
          cityName: item.address?.cityName || item.name,
          iataCode: item.iataCode || item.id,
          type: item.subType,
        }));
        if (type === "leavingFrom") {
          setSuggestions(results);
          setShowLeavingFromDropdown(true);
          setIsLoading(false); 
        } else if (type === "goingTo") {
          setGoingToSuggestions(results);
          setGoingToDropdown(true);
          setIsGoingToLoading(false);
        }
      } else {
        if (type === "leavingFrom") {
          setSuggestions([]);
          setDepartureApiData(null);
          setShowLeavingFromDropdown(false);
          setIsLoading(false);
        } else if (type === "goingTo") {
          setGoingToSuggestions([]);
          setGoingToApiData(null);
          setGoingToDropdown(false);
          setIsGoingToLoading(false);
        }
        message.warning("No matching airports or cities found.");
      }
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      if (type === "leavingFrom") {
        setSuggestions([]);
        setDepartureApiData(null);
        setShowLeavingFromDropdown(false);
        setIsLoading(false);
      } else if (type === "goingTo") {
        setGoingToSuggestions([]);
        setGoingToApiData(null);
        setGoingToDropdown(false);
        setIsGoingToLoading(false);
      }
      message.error(
        error.response?.data?.error_description ||
          "Error fetching location data"
      );
    }
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      getAirportApiCall(leavingFrom, "leavingFrom");
    }, 800);

    return () => clearTimeout(timeoutRef.current);
  }, [leavingFrom]);

  useEffect(() => {
    if (departureApiData) {
      console.log("Updated departureApiData:", departureApiData);
    }
  }, [departureApiData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leavingFromRef.current &&
        !leavingFromRef.current.contains(event.target)
      ) {
        setShowLeavingFromDropdown(false);
      }
      if (
        travelersRef.current &&
        !travelersRef.current.contains(event.target)
      ) {
        setShowTravelersDropdown(false);
      }
      if (classRef.current && !classRef.current.contains(event.target)) {
        setShowClassDropdown(false);
      }
      if (goingToRef.current && !goingToRef.current.contains(event.target)) {
        setGoingToDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionSelect = (suggestion) => {
    setLeavingFrom(suggestion.iataCode);
    setDepartureApiData({
      cityName: suggestion.cityName,
      iataCode: suggestion.iataCode,
      type: suggestion.type,
    });
    setShowLeavingFromDropdown(false);
    setSuggestions([]);
  };

  const tripTypes = [
    { key: "oneWay", label: "One Way" },
    { key: "roundTrip", label: "Round Trip" },
    { key: "multiCity", label: "Multi City" },
  ];
  const classTypes = ["Economy", "Premium Economy", "Business", "First Class"];
  const fareTypes = [
    { key: "regular", label: "Regular", desc: "Regular fares", padding: "2" },
    {
      key: "student",
      label: "Student",
      desc: "Extra discounts/baggage",
      padding: "2",
    },
    {
      key: "armed",
      label: "Armed Forces",
      desc: "Up to ₹ 600 off",
      padding: "2",
    },
    {
      key: "doctor",
      label: "Doctor and Nurses",
      desc: "Up to ₹ 600 off",
      padding: "2",
    },
  ];

  const swapLocations = () => {
    setLeavingFrom(goingTo);
    setGoingTo(leavingFrom);
    setDepartureApiData(null);
    setSuggestions([]);
    setShowLeavingFromDropdown(false);
  };

  const getTotalTravelers = () => {
    const total = travelers.adults + travelers.children + travelers.infants;
    return total === 1 ? "1 Traveler" : `${total} Travelers`;
  };

  const updateTravelerCount = (type, increment) => {
    setTravelers((prev) => {
      const newCount = Math.max(0, prev[type] + (increment ? 1 : -1));
      if (
        type === "adults" &&
        newCount === 0 &&
        (prev.children > 0 || prev.infants > 0)
      ) {
        return prev;
      }
      return { ...prev, [type]: newCount };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = {
      tripType,
      classType,
      leavingFrom: departureApiData?.iataCode || leavingFrom,
      goingTo,
      departureDate, 
      returnDate:
        tripType === "roundTrip" || tripType === "multiCity"
          ? returnDate
          : null,
      travelers,
      fareType,
    };

    console.log("Search data:", searchData);
    navigate("/flight-list", {
      state: {
        originLocationCode: leavingFrom,
        destinationLocationCode: goingTo,
        departureDate: departureDate,
        adults: travelers,
        travelClass:classType
      },
    });
  };

  useEffect(() => {
    if (goingToTimeoutRef.current) {
      clearTimeout(goingToTimeoutRef.current);
    }
    goingToTimeoutRef.current = setTimeout(() => {
      getAirportApiCall(goingTo, "goingTo");
    }, 800);
    return () => clearTimeout(goingToTimeoutRef.current);
  }, [goingTo]);

  const handleGoingToSuggestionSelect = (suggestion) => {
    setGoingTo(suggestion.iataCode);
    setGoingToApiData({
      cityName: suggestion.cityName,
      iataCode: suggestion.iataCode,
      type: suggestion.type,
    });
    setGoingToDropdown(false);
    setGoingToSuggestions([]);
  };

  return (
    <>
      <div className="mx-auto mb-3 min-w-7xl max-w-[1440px] bg-[#FFFFFF] flex items-start justify-center pl-[98px] pr-[82px]">
        <div className="w-full h-[308px] rounded-[26px] border-[1.5px] border-[#063D5E] top-[35px] bg-white shadow-sm relative">
          {/* Header */}
          <div className="flex items-center gap-1 h-[58px] px-6">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg">
              <img src="/noto-v1_airplane.png" alt="plane" />
            </span>
            <h1 className="text-[20px] font-semibold text-[#1a2341]">
              Search Flights
            </h1>
            <span className="h-0 w-[59px]">
              <img src="./Line 2.png" alt="separator" />
            </span>
          </div>

          <hr className="border border-[#BABABA]" />
          <br />
          <form onSubmit={handleSearch}>
            {/* Trip type and class */}
            <div className="flex items-center gap-6 mb-2 pt-[3px] px-7">
              <div className="flex items-center gap-8">
                {tripTypes.map((type) => (
                  <label
                    key={type.key}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="tripType"
                      className="sr-only"
                      checked={tripType === type.key}
                      onChange={() => setTripType(type.key)}
                    />
                    <div
                      className="p-4 rounded-2xl border-2 transition-all flex flex-col h-full"
                      style={{
                        padding: 0,
                        border: "none",
                        background: "none",
                        boxShadow: "none",
                      }}
                    >
                      <div
                        className="flex items-center gap-1.5 mb-2"
                        style={{ marginBottom: 0 }}
                      >
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                          {tripType === type.key && (
                            <span className="w-2.5 h-2.5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-[#ffd600]"></span>
                            </span>
                          )}
                        </span>
                        <span
                          className={`text-sm ${
                            tripType === type.key ? "font-bold" : "font-medium"
                          }`}
                        >
                          {type.label}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="relative" ref={classRef}>
                <button
                type="button"
                  onClick={() => setShowClassDropdown(!showClassDropdown)}
                  className="ml-auto border border-[#E2E2E2] rounded-[4px] px-4 py-1.5 text-[#191E3B] bg-[#F5F5F5] font-medium w-24.5 focus:outline-none flex items-center gap-2"
                >
                  <span className="text-[12px] font-normal">{classType}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showClassDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    {classTypes.map((cls) => (
                      <button
                        key={cls}
                        onClick={() => {
                          setClassType(cls);
                          setShowClassDropdown(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {cls}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Search form */}
            <div className="flex items-center gap-[10px] mb-5 pt-2 px-6">
              {/* Leaving from */}
              <div className="flex-1 relative" ref={leavingFromRef}>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1a234180]">
                  <img
                    src="./ph_map-pin-line.png"
                    className="w-6 h-6"
                    alt="map pin"
                  />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Leaving from (e.g., JFK)"
                  value={leavingFrom}
                  onChange={(e) => setLeavingFrom(e.target.value)}
                  onFocus={() =>
                    suggestions.length > 0 && setShowLeavingFromDropdown(true)
                  }
                  className="pl-9 pr-4 py-4 border-[1.5px] border-[#063D5E] text-sm h-[50px] w-[228px] rounded-[9px] placeholder-[#191E3B] text-[#1a2341] bg-white focus:outline-none"
                />
                {showLeavingFromDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-[228px] bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                    {isLoading ? (
                      <div className="px-4 py-2 text-gray-500">Loading...</div>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionSelect(suggestion)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {suggestion.cityName} ({suggestion.iataCode}) -{" "}
                          {suggestion.type}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* Swap */}
              <button
                className="p-2 rounded-full border-[1.5px] absolute z-10 left-[234px] border-[#063D5E] bg-white hover:bg-[#f5f7fa] transition-colors"
                onClick={swapLocations}
                type="button"
              >
                <ArrowLeftRight className="w-5 h-5 text-[#063D5E]" />
              </button>
              {/* Going to */}
              <div className="flex-1 relative" ref={goingToRef}>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1a234180]">
                  <img
                    src="./ph_map-pin-line.png"
                    className="w-6 h-6"
                    alt="map pin"
                  />
                </span>
                <input
                  type="text"
                  required
                  placeholder="Going to (e.g., LAX)"
                  value={goingTo}
                  onChange={(e) => setGoingTo(e.target.value)}
                  onFocus={() =>
                    goingToSuggestions.length > 0 && setGoingToDropdown(true)
                  }
                  className="pl-9 pr-4 h-[50px] w-[228px] rounded-[9px] text-sm py-4 border-[1.5px] border-[#063D5E] text-[#1a2341] placeholder-[#191E3B] bg-white focus:outline-none"
                />
                {showGoingToDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-[228px] bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                    {isGoingToLoading ? (
                      <div className="px-4 py-2 text-gray-500">Loading...</div>
                    ) : goingToSuggestions.length > 0 ? (
                      goingToSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleGoingToSuggestionSelect(suggestion)
                          }
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {suggestion.cityName} ({suggestion.iataCode}) -{" "}
                          {suggestion.type}
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* Dates */}
              <div className="flex-1 relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1a234180]">
                  <img
                    src="./stash_data-date-light.png"
                    className="w-6 h-6"
                    alt="calendar"
                  />
                </span>
                <div className="h-[50px] w-[228px] pl-9 pr-4 py-4 border-[1.5px] border-[#063D5E] rounded-[9px] text-left text-[#1a2341] bg-white focus:outline-none">
                  <p className="absolute top-1 pt-1 text-gray-500 text-xs">
                    Dates
                  </p>
                  <span className="font-normal text-sm absolute top-5">
                    {tripType === "oneWay" ? (
                      <DatePicker
                        required
                        format="MMM D"
                        className="custom-date-picker"
                        suffixIcon=""
                        minDate={dayjs()}
                        style={{
                          width: "80%",
                          outline: "none",
                          border: "none",
                          height: "20px",
                        }}
                        onChange={(date) => {
                          if (date) {
                            setDepartureDate(date.format("YYYY-MM-DD"));
                          }
                        }}
                      />
                    ) : (
                      <RangePicker
                        format="MMM D"
                        className="custom-date-picker"
                        required
                        suffixIcon=""
                        minDate={dayjs()}
                        style={{
                          width: "90%",
                          outline: "none",
                          border: "none",
                          height: "20px",
                        }}
                        onChange={(dates) => {
                          if (dates) {
                            setDepartureDate(dates[0].format("YYYY-MM-DD"));
                            setReturnDate(dates[1].format("YYYY-MM-DD"));
                          }
                        }}
                      />
                    )}
                  </span>
                </div>
              </div>
              {/* Travelers */}
              <div className="flex-1 relative" ref={travelersRef}>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1a234180]">
                  <img
                    src="./carbon_person.png"
                    className="w-6 h-6"
                    alt="person"
                  />
                </span>
                <button
                  className="h-[50px] w-[228px] pl-9 pr-4 py-4 border-[1.5px] border-[#063D5E] rounded-[9px] text-left text-[#1a2341] bg-white focus:outline-none"
                  onClick={() =>
                    setShowTravelersDropdown(!showTravelersDropdown)
                  }
                  type="button"
                >
                  <p className="absolute top-1 pt-1 text-gray-500 text-xs">
                    Travelers
                  </p>
                  <span className="font-normal text-sm absolute top-5">
                    {getTotalTravelers()}
                  </span>
                </button>
                {showTravelersDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-20 p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Adults
                          </div>
                          <div className="text-sm text-gray-500">18+ years</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateTravelerCount("adults", false)}
                            disabled={travelers.adults <= 1}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="button"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {travelers.adults}
                          </span>
                          <button
                            onClick={() => updateTravelerCount("adults", true)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            type="button"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Children
                          </div>
                          <div className="text-sm text-gray-500">
                            2-18 years
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateTravelerCount("children", false)
                            }
                            disabled={travelers.children <= 0}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="button"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {travelers.children}
                          </span>
                          <button
                            onClick={() =>
                              updateTravelerCount("children", true)
                            }
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            type="button"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Infants
                          </div>
                          <div className="text-sm text-gray-500">
                            Under 2 years
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateTravelerCount("infants", false)
                            }
                            disabled={travelers.infants <= 0}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="button"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {travelers.infants}
                          </span>
                          <button
                            onClick={() => updateTravelerCount("infants", true)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            type="button"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowTravelersDropdown(false)}
                        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Search button */}
              <button
                type="submit"
                className="h-[50px] w-[100px] bg-[#1a2341] text-white rounded-[6px] font-light hover:bg-[#232d4d] transition-colors"
              >
                Search
              </button>
            </div>
            {/* Special fares */}
            <div className="border-[#063D5E] flex gap-6 px-6">
              <div className="my-4">
                <h3 className="text-[14px] font-bold text-[#1a2341] mb-1">
                  Select a special fare
                </h3>
                <p className="text-[14px] text-[#063D5E] font-semibold">
                  EXTRA SAVINGS
                </p>
              </div>
              <div className="flex h-[75px] gap-4">
                {fareTypes.map((fare) => (
                  <label key={fare.key} className="mt-3.5 cursor-pointer">
                    <input
                      type="radio"
                      name="fareType"
                      className="sr-only h-[43px] w-[450px]"
                      checked={fareType === fare.key}
                      onChange={() => setFareType(fare.key)}
                    />
                    <div
                      className={`rounded-[5px] border transition-all flex flex-col h-[43px] pr-6 pl-2 ${
                        fareType === fare.key
                          ? "border-[#063D5E]"
                          : "border-[#063D5E] hover:border-[#1a2341]"
                      }`}
                    >
                      <div className="flex items-center gap-3 p-1">
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-black flex items-center justify-center mt-2">
                          {fareType === fare.key && (
                            <span className="w-2.5 h-2.5 rounded-full border-[1.5px] border-black flex items-center justify-center">
                              <span className="w-2 h-2 rounded-full bg-[#ffd600]"></span>
                            </span>
                          )}
                        </span>
                        <span className="text-[14px] font-bold text-[#1a2341]">
                          {fare.label}
                        </span>
                      </div>
                      <p className="text-[12px] pl-[30px] relative top-[-8px] text-[#1a2341]">
                        {fare.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FlightSearchInterface;
