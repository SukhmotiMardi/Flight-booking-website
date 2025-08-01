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
      <div className="flex justify-center w-full mt-24 ">
        <div className="max-w-[1280px] w-full mx-auto px-4 lg:px-8 xl:px-12">
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
                height={300}
                style={{
                  borderRadius: "10px",
                  background: "#f5f5f5",
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            </div>
          </section>
          <SlickSlider />
        </div>
      </div>
      <div className="w-full bg-[#FEF6F6]">
        <div className="max-w-[1280px] w-full mx-auto px-4 lg:px-8 xl:px-12">
          <DomesticCards />
        </div>
        <div
          className="w-full bg-[#FFFFF3]"
          style={{ boxShadow: "2px 2px 8px #D9D9D9" }}
        >
          <div className="max-w-[1280px] w-full mx-auto px-4 lg:px-8 xl:px-12">
            <InternationalCards />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomePage;
