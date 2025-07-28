import React from "react";
import InfoCard from "../../component/infoCard/InfoCard";
import FlightSearchInterface from "../../component/bookingCard/BookingCard";
import SlickSlider from "../../component/SlickSlider/SlickSlider";
import DomesticCards from "../../component/DomesticCards/DomesticCards";
import Cards from "../../component/Cards";
import { Image } from "antd";
import InternationalCards from "../../component/InternationalCard/InternationalCards";

const HomePage = () => {
  return (
    <>
      <div className="rounded-xl bg-white shadow-sm p-6 border border-gray-200 mb-6">
        <FlightSearchInterface />
        <InfoCard />

        <Cards />
        <section className="w-full max-w-[1440px] mx-auto  pl-[98px] pr-[82px]">
          <div className=" mx-auto">
            <Image
              src="../Images/island.png"
              preview={false}
              alt="image1"
              width="100%"
              height={260}
              style={{
                borderRadius: "10px",
                background: "#f5f5f5",
                cursor: "pointer",
              }}
            />
          </div>
        </section>
        <SlickSlider />
        <DomesticCards />
        <InternationalCards />
        </div>
    </>
  );
};

export default HomePage;
