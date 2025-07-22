// import {
//   FacebookOutlined,
//   InstagramOutlined,
//   XOutlined,
// } from "@ant-design/icons";
// import React from "react";

// const Footer = () => {
//   const internationalFlight = [
//     "Delhi Singapore flights",
//     "Delhi Bangkok",
//     "Mumbai Dubai flights",
//     "Delhi Dubai flights",
//     "Delhi to London flights",
//     "Delhi to Toronto flights",
//     "Delhi to New york flights",
//     "Bangalore to Singapore flights",
//     "Delhi to Paris flights",
//     "Mumbai to Paris flights",
//     "Delhi to Hong Kong flights",
//   ];
//   const domesticFlight = [
//     "Delhi Goa flights",
//     "Mumbai Delhi flights",
//     "Delhi Kolkata flights",
//     "Pune Delhi flights",
//     "Bangalore Delhi flights",
//     "Mumbai Bangalore flights",
//     "Chennai Delhi flights",
//     "Kolkata Delhi flights",
//     "Delhi Mumbai flights",
//     "Delhi Bangalore flights",
//     "Mumbai Goa flights",
//   ];
//   const companyLinks = [
//     "About Us",
//     "Lyfetrip Reviews",
//     "Contact Us",
//     "Travel Guides",
//     "Data Policy",
//     "Cookie Policy",
//     "Legal",
//   ];
//   const supportLinks = [
//     "Get in Touch",
//     "Help center",
//     "Live chat",
//     "How it works",
//   ];
//   return (
//     <footer className="bg-white text-gray-900 pl-[98px] pr-[98px] w-full select-none flex flex-col items-center pt-0 pb-6">
//       <div className="w-full flex flex-col items-center">
//         <div className="w-full max-w-[1200px] px-0 mt-0 mb-0">
//           <div className="mb-6 mt-10">
//             <h3 className="font-semibold text-[#191E3B] text-[16px] mb-2">Popular Domestic Flight Routes</h3>
//             <nav className="flex flex-wrap gap-y-5 text-sm text-[#191E3B]">
//               {domesticFlight.map((route, idx) => (
//                 <span key={route}>
//                   <a href="#" className="hover:text-[#1B4CFF]">{route}</a>
//                   {idx < domesticFlight.length - 1 && (
//                     <span aria-hidden="true" className="mx-3 text-[#A0AEC0]">|</span>
//                   )}
//                 </span>
//               ))}
//             </nav>
//           </div>
//           <div className="mb-6">
//             <h3 className="font-semibold text-[#191E3B] text-[16px] mb-2">Popular International Flight Routes</h3>
//             <nav className="flex flex-wrap gap-y-5 text-sm text-[#191E3B] ">
//               {internationalFlight.map((route, idx) => (
//                 <span key={route}>
//                   <a href="#" className="hover:text-[#1B4CFF] " >{route}</a>
//                   {idx < internationalFlight.length - 1 && (
//                     <span aria-hidden="true" className="mx-3 text-[#A0AEC0] ">|</span>
//                   )}
//                 </span>
//               ))}
//             </nav>
//           </div>
//         </div>
//         <hr className="w-full max-w-[1200px] border-t-[1px] border-[#F5C518] my-6" />
//         <div className="w-full max-w-[1200px] flex flex-row justify-between items-start gap-0 pb-12">
//           {/* Left block with logo and text */}
//           <div className="flex flex-row items-start w-[370px] min-w-[320px] max-w-[370px] pr-10 pt-7">
//             <div className="flex flex-col items-start">
//               <div className="flex items-center gap-2 mb-3">
//                 <img src="/lyfetrip_vector_icon 1.png" alt="Lyfetrip logo" className="h-[82px] w-[221px] object-contain" />
//               </div>
//               <h4 className="font-medium text-[#191E3B] text-[18px] mb-5 leading-tight">Ready to start your adventure?</h4>
//               <p className="text-xs text-[#191E3B] w-[290px] leading-[23px]">
//                 So are we. Find the cheapest flight deals to some of the most popular destinations, or pick your favourite airline below.
//               </p>
//             </div>
//             {/* Vertical divider */}
//             <img src="./Line 6.png" alt="" className="h-[270px] ml-16" />
//           </div>
//           {/* Columns */}
//           <div className="flex flex-row flex-1 pt-7 justify-between items-start gap-12">
//             {/* Company */}
//             <div className="flex flex-col min-w-[120px] pl-16">
//               <h5 className="font-semibold mb-3 text-[#191E3B] text-[16px]">Company</h5>
//               <nav className="flex flex-col gap-2 text-[#4A5568] text-[14px]">
//                 {companyLinks.map((item) => (
//                   <a href="#" key={item} className="hover:text-[#1B4CFF] pb-1">{item}</a>
//                 ))}
//               </nav>
//             </div>
//             {/* Support */}
//             <div className="flex flex-col min-w-[120px] pl-[21px]">
//               <h5 className="font-semibold mb-3 text-[#191E3B] text-[16px]">Support</h5>
//               <nav className="flex flex-col gap-2 text-[#4A5568] text-[13px]">
//                 {supportLinks.map((item) => (
//                   <a href="#" key={item} className="hover:text-[#1B4CFF] pb-1">{item}</a>
//                 ))}
//               </nav>
//             </div>
//             {/* Newsletter */}
//             <div className="flex flex-col min-w-[250px] max-w-[300px] pl-1">
//               <h5 className="font-semibold mb-3 text-[#191E3B] text-[16px]">Newsletter</h5>
//               <p className="text-[#4A5568] text-[14px] mb-3 leading-snug">
//                 Subscribe to the free newsletter and stay up to date
//               </p>
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   alert("Subscribed!");
//                 }}
//                 className="flex flex-row gap-2"
//               >
//                 {/* <input
//                   type="email"
//                   placeholder="Your email address"
//                   required
//                   className="flex-grow rounded-md border border-[#E2E8F0] py-2 text-[#191E3B] placeholder-[#A0AEC0] px-2 focus:outline-none focus:ring-2 focus:ring-[#F5C518] text-[14px]"
//                 />
//                 <button
//                   type="submit"
//                   className=" hover:bg-[#E5B716] text-[#191E3B] px-5 py-2 rounded-md font-normal transition text-[14px]"
//                 >
//                   Send
//                 </button> */}

// <div className="relative w-full max-w-md   ">
//   <input
//     type="email"
//     placeholder="Your email address"
//      required
//     className="w-full px-4 py-2 border border-[#E7E6E6]-500 rounded-md pr-24 focus:outline-none p-[20px]"
//   />
//   <button className="absolute right-1 top-1 bottom-1 px-4 bg-900 text-[#191E3B] rounded-md">
//     Send
//   </button>
// </div>

//               </form>
//               <div className="mt-14 flex flex-row space-x-4">
//                 <a
//                   href="#"
//                   aria-label="Visit our X (formerly Twitter) page"
//                   className="text-[#191E3B] hover:text-[#1B4CFF]"
//                 >
//                   <XOutlined style={{ fontSize: '30px' }} />
//                 </a>
//                 <a
//                   href="#"
//                   aria-label="Visit our Facebook page"
//                   className="text-[#191E3B] hover:text-[#1B4CFF]"
//                 >
//                   <FacebookOutlined style={{ fontSize: '30px' }} />
//                 </a>
//                 <a
//                   href="#"
//                   aria-label="Visit our Instagram page"
//                   className="text-[#191E3B] hover:text-[#1B4CFF]"
//                 >
//                   <InstagramOutlined style={{ fontSize: '30px' }} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import {
  FacebookOutlined,
  InstagramOutlined,
  XOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const internationalFlight = [
    "Delhi Singapore flights",
    "Delhi Bangkok",
    "Mumbai Dubai flights",
    "Delhi Dubai flights",
    "Delhi to London flights",
    "Delhi to Toronto flights",
    "Delhi to New york flights",
    "Bangalore to Singapore flights",
    "Delhi to Paris flights",
    "Mumbai to Paris flights",
    "Delhi to Hong Kong flights",
  ];
  const domesticFlight = [
    "Delhi Goa flights",
    "Mumbai Delhi flights",
    "Delhi Kolkata flights",
    "Pune Delhi flights",
    "Bangalore Delhi flights",
    "Mumbai Bangalore flights",
    "Chennai Delhi flights",
    "Kolkata Delhi flights",
    "Delhi Mumbai flights",
    "Delhi Bangalore flights",
    "Mumbai Goa flights",
  ];
  const companyLinks = [
    "About Us",
    "Lyfetrip Reviews",
    "Contact Us",
    "Travel Guides",
    "Data Policy",
    "Cookie Policy",
    "Legal",
  ];
  const supportLinks = [
    "Get in Touch",
    "Help center",
    "Live chat",
    "How it works",
  ];
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "30px 0px",
        }}
      >
        <section className="w-full max-w-[1440px] mx-auto">
          <div className=" pl-[98px] pr-[82px] pt-4 mx-auto">
            <h3 className="font-bold text-[#063D5E] text-[14px] mb-3">
              Popular Domestic Flight Routes
            </h3>
            <nav className="flex flex-wrap gap-y-6 text-xs mb-[25px] text-[#191E3B]">
              {domesticFlight.map((route, idx) => (
                <span key={route}>
                  <a href="#" className="hover:text-[#1B4CFF]">
                    {route}
                  </a>
                  {idx < domesticFlight.length - 1 && (
                    <span aria-hidden="true" className="mx-3 text-[#A0AEC0]">
                      |
                    </span>
                  )}
                </span>
              ))}
            </nav>

            <div className="mb-6">
              <h3 className="font-bold text-[#063D5E] text-[16px] mb-3">
                Popular International Flight Routes
              </h3>
              <nav className="flex flex-wrap gap-y-4 text-xs text-[#191E3B] ">
                {internationalFlight.map((route, idx) => (
                  <span key={route}>
                    <a href="#" className="hover:text-[#1B4CFF] ">
                      {route}
                    </a>
                    {idx < internationalFlight.length - 1 && (
                      <span aria-hidden="true" className="mx-3 text-[#A0AEC0] ">
                        |
                      </span>
                    )}
                  </span>
                ))}
              </nav>

              <hr className="w-full max-w-7xl border-t-[1px] border-[#F5C518] my-6" />
              <div className="w-full max-w-[1200px] flex flex-row justify-between items-start gap-0 pb-12">
                {/* Left block with logo and text */}
                <div className="flex flex-row items-start w-[370px] min-w-[320px] max-w-[370px] pr-10 pt-7">
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-3">
                      <img
                        src="/lyfetrip_vector_icon 1.png"
                        alt="Lyfetrip logo"
                        className="h-[82px] w-[221px] object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-[#191E3B] text-[18px] mb-5 leading-tight">
                      Ready to start your adventure?
                    </h4>
                    <p className="text-xs text-[#191E3B] w-[290px] leading-[23px]">
                      So are we. Find the cheapest flight deals to some of the
                      most popular destinations, or pick your favourite airline
                      below.
                    </p>
                  </div>
                  {/* Vertical divider */}
                  <img src="./Line 6.png" alt="" className="h-[270px] ml-16" />
                </div>
                {/* Columns */}
                <div className="flex flex-row flex-1 pt-5 justify-between items-start gap-12">
                  {/* Company */}
                  <div className="flex flex-col min-w-[120px] pl-16">
                    <h5 className="font-semibold mb-6 text-[#191E3B] text-[18px]">
                      Company
                    </h5>
                    <nav className="flex flex-col gap-2 text-[#191E3B] text-[12px]">
                      {companyLinks.map((item) => (
                        <a
                          href="#"
                          key={item}
                          className="hover:text-[#1B4CFF] pb-1"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                  {/* Support */}
                  <div className="flex flex-col min-w-[120px] pl-[21px]">
                    <h5 className="font-semibold mb-6 text-[#191E3B] text-[18px]">
                      Support
                    </h5>
                    <nav className="flex flex-col gap-2 text-[#191E3B] text-[12px]">
                      {supportLinks.map((item) => (
                        <a
                          href="#"
                          key={item}
                          className="hover:text-[#1B4CFF] pb-1"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                  </div>
                  {/* Newsletter */}
                  <div className="flex flex-col min-w-[220px] max-w-[260px] pl-1">
                    <h5 className="font-semibold mb-6 text-[#191E3B] text-[18px]">
                      Newsletter
                    </h5>
                    <p className="text-[#4A5568] text-[12px] mb-3 leading-snug">
                      Subscribe to the free newsletter and stay up to date
                    </p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Subscribed!");
                      }}
                      className="flex flex-row gap-2 rounded-md border w-[265px]  border-[#E2E8F0] py-2"
                    >
                      <input
                        type="email"
                        placeholder="Your email address"
                        required
                        className="flex-grow  p-2 text-[#191E3B] placeholder-[#A0AEC0]   rounded-md  text-[14px]"
                      />
                      <button
                        type="submit"
                        className="  text-[#191E3B] px-4  py-3 rounded-md font-normal transition text-[14px]"
                      >
                        Send
                      </button>
                    </form>
                    <div className="mt-14 flex flex-row space-x-4">
                      <a
                        href="#"
                        aria-label="Visit our X (formerly Twitter) page"
                        className="text-[#063D5E] hover:text-[black]"
                      >
                        <XOutlined style={{ fontSize: "30px" }} />
                      </a>
                      <a
                        href="#"
                        aria-label="Visit our Facebook page"
                        className="text-[#063D5E] hover:text-[#1B4CFF]"
                      >
                        <FacebookOutlined
                          style={{ fontSize: "30px", backgroundColor: "" }}
                        />
                      </a>
                      <a
                        href="#"
                        aria-label="Visit our Instagram page"
                        className="text-[#063D5E] hover:text-pink-500"
                      >
                        <InstagramOutlined style={{ fontSize: "30px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-[#063D5E] text-[13px] h-[40px] text-white flex justify-center items-center">
        Designed and Developed By 
        <a href="webstep.in">Webstep Technologies Private Limited</a>
      </div>
    </>
  );
};

export default Footer;
