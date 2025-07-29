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
 <div className="flex justify-center w-full mt-24 border-b border-gray-800">
 <div className="max-w-[1340px] w-full mx-auto px-4 lg:px-8 xl:px-12">
        <FlightSearchInterface />
        <InfoCard />
        <Cards />
        <section className="w-full mx-auto">
          <div className="mx-auto">
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
                objectFit: "cover"
              }}
            />
          </div>
        </section>
        <SlickSlider />
        <DomesticCards />
        <InternationalCards />
</div>
</div>

    </>
  );
};

export default HomePage;
