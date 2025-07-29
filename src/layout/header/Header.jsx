// import { Typography } from "@mui/material";
// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate= useNavigate()
//   return (
//     <>
//       <div className="flex  justify-between items-center pl-[98px] pr-[82px] h-[83px] ">
//         <div onClick={()=>navigate("/")} className="cursor-pointer">
//           <img
//             src="/lyfetrip_vector_icon 1.png"
//             className="h-[52px] w-[156px]"
//             alt="Logo"
//           />
//         </div>
//         <div className="flex items-center gap-8 flex-1 justify-end">
//           <div className="flex items-center cursor-pointer gap-[6px]">
//             <img
//               className="h-[18px] w-[18px]"
//               src="/ix_support.png"
//               alt="Support Icon"
//             />
//             <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
//               Support
//             </Typography>
//           </div>
//           <div className="flex items-center cursor-pointer gap-[6px]" onClick={()=>navigate("/trip-details")}>
//             <img
//               className="h-[18px] w-[18px] mb-[4px]"
//               src="/material-symbols-light_airplane-ticket-outline.png"
//               alt="Trips Icon"
//             />
//             <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
//               Trips
//             </Typography>
//           </div>
//           <div className="flex items-center cursor-pointer gap-[6px]">
//             <img
//               className="h-[18px] w-[18px] mb-[4px]"
//               src="/material-symbols-light_notification-sound-outline.png"
//               alt="Notification Icon"
//             />
//             <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
//               Notification
//             </Typography>
//           </div>
//           <div>
//             <Button onClick={()=>navigate("/login")} style={{ height: "30px", width: "80px", border: "1px solid #191E3B", gap:"0"}}>
//               <Typography style={{ fontWeight: "500", fontSize: "13px" }}>
//                 Sign In
//               </Typography>
//               <img className="h-[18px] w-[18px]" src="/prime_sign-in (2).png" alt="Sign In Icon" />
//             </Button>
//           </div>
//         </div>
//       </div>
//       <hr className="mb-3" style={{ 
//   border: "none", 
//   height: "1px", 
//   backgroundColor: "#BABABA",
//   boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)", 
//   width: "100%" 
// }} />

//     </>
//   );
// };

// export default Header;


import { Typography } from "@mui/material";
import {  Button } from "antd";
import { useNavigate } from "react-router-dom";
 
const Header = () => {
 
  const navigate= useNavigate()
  return (
    <>
 
       <section className="w-full max-w-[1440px] mx-auto  pl-[98px] pr-[82px]">
      <div className="flex  justify-between items-center  h-[83px] ">
        <div onClick={()=>navigate("/")} className="cursor-pointer">
          <img
            src="/lyfetrip_vector_icon 1.png"
            className="h-[52px] w-[156px]"
            alt="Logo"
          />
        </div>
        <div className="flex items-center gap-8 flex-1 justify-end">
          <div className="flex items-center cursor-pointer gap-[6px]">
            <img
              className="h-[18px] w-[18px]"
              src="/ix_support.png"
              alt="Support Icon"
            />
            <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
              Support
            </Typography>
          </div>
          <div className="flex items-center cursor-pointer gap-[6px]" onClick={()=>navigate("/trip-details")}>
            <img
              className="h-[18px] w-[18px] mb-[4px]"
              src="/material-symbols-light_airplane-ticket-outline.png"
              alt="Trips Icon"
            />
            <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
              Trips
            </Typography>
          </div>
          <div className="flex items-center cursor-pointer gap-[6px]">
            <img
              className="h-[18px] w-[18px] mb-[4px]"
              src="/material-symbols-light_notification-sound-outline.png"
              alt="Notification Icon"
            />
            <Typography style={{ fontWeight: "500", fontSize: "14px" }}>
              Notification
            </Typography>
          </div>
          <div>
            <Button onClick={()=>navigate("/login")} style={{ height: "30px", width: "80px", border: "1px solid #191E3B", gap:"0"}}>
              <Typography style={{ fontWeight: "500", fontSize: "13px" }}>
                Sign In
              </Typography>
              <img className="h-[18px] w-[18px]" src="/prime_sign-in (2).png" alt="Sign In Icon" />
            </Button>
          </div>
 
        </div>
      </div>
     
 
 </section>
  <hr className="" style={{
  border: "none",
  height: "1px",
  backgroundColor: "#BABABA",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.7)",
  width: "100%"
}} />
    </>
  );
};
 
export default Header;