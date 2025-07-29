import { useEffect } from "react";
import "./App.css";
import FlightList from "./pages/FlightList/FlightList";
import HomePage from "./pages/Homepage/HomePage";
import Login from "./pages/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import {
  Route,
  Routes,
} from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import EditProfile from "./pages/EditProfile/EditProfile";
import TripDetails from "./pages/TripDetails/TripDetails";

function App() {
  const getToken = async () => {
    try {
      const payload = {
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      };
      // console.log("payload", payload);
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        Cookies.set("access_token", response.data.access_token);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      message.error(
        "Error retrieving token: " +
          (error.response?.data?.error_description || "Unknown error")
      );
    }
  };
  useEffect(() => {
    getToken();
    const intervalId = setInterval(() => {
      getToken();
    }, 1799000);
    return () => clearInterval(intervalId);
  }, []);
  return (
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flight-list" element={<FlightList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/trip-details" element={<TripDetails />} />


    </Routes>
  
  );
}

export default App;


