

import { Typography } from "@mui/material";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-[83px] min-w-[320px]">
            <div onClick={() => navigate("/")} className="cursor-pointer flex-none">
              <img
                src="/lyfetrip_vector_icon 1.png"
                className="h-[52px] w-[156px]"
                alt="Logo"
              />
            </div>
            <div className="flex items-center gap-6 flex-none">
              <div className="hidden md:flex items-center cursor-pointer gap-2">
                <img
                  className="h-[18px] w-[18px]"
                  src="/ix_support.png"
                  alt="Support Icon"
                />
                <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
                  Support
                </Typography>
              </div>
              <div className="hidden md:flex items-center cursor-pointer gap-2" onClick={() => navigate("/trip-details")}>
                <img
                  className="h-[18px] w-[18px]"
                  src="/material-symbols-light_airplane-ticket-outline.png"
                  alt="Trips Icon"
                />
                <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
                  Trips
                </Typography>
              </div>
              <div className="hidden md:flex items-center cursor-pointer gap-2">
                <img
                  className="h-[18px] w-[18px]"
                  src="/material-symbols-light_notification-sound-outline.png"
                  alt="Notification Icon"
                />
                <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
                  Notification
                </Typography>
              </div>
              <Button 
                onClick={() => navigate("/login")} 
                className="flex-none"
                style={{ 
                  height: "30px", 
                  width: "80px", 
                  border: "1px solid #191E3B",
                  padding: "0 8px"
                }}
              >
                <Typography style={{ fontWeight: "500", fontSize: "13px" }}>
                  Sign In
                </Typography>
                <img 
                  className="h-[18px] w-[18px]" 
                  src="/prime_sign-in (2).png" 
                  alt="Sign In Icon" 
                />
              </Button>
            </div>
          </div>
        </div>
        <hr className="" style={{
  border: "none",
  height: "1px",
  backgroundColor: "#BABABA",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
  width: "100%"
}} />
      </div>
      {/* <div className="h-16"></div> */}
    </>
  );
};

export default Header;

