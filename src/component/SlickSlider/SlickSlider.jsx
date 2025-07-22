import React from "react";
import Slider from "react-slick";
import { Typography } from "antd";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import "../App.css";

const { Title, Text } = Typography;

const offers = [
  { image: "../Images/destination/paris.png", name: "Paris", tours: "400" },
  {
    image: "../Images/destination/Singapore.png",
    name: "Singapore",
    tours: "500",
  },
  { image: "../Images/destination/Roma.png", name: "Roma", tours: "100" },
  { image: "../Images/destination/Bangkok.png", name: "Bangkok", tours: "300" },
  { image: "../Images/destination/Bali.png", name: "Bali", tours: "400" },
  { image: "../Images/destination/Phuket.png", name: "Phuket", tours: "100" },
  { image: "../Images/destination/Tokyo.png", name: "Tokyo", tours: "600" },
  { image: "../Images/destination/paris.png", name: "Paris", tours: "200" },
  { image: "../Images/destination/Phuket.png", name: "Phuket", tours: "700" },
];

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 7 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto my-10 pl-[98px] pr-[82px]">
      <div className=" mx-auto">
        <Title level={3} style={{ fontWeight: "bold", marginBottom: "30px", fontSize:"22px" }}>
          Trending Destinations
        </Title>
        <Slider {...settings}>
          {offers.map((place, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Box
                sx={{
                  width: 115,
                  height: 115,
                  borderRadius: "50%",
                  overflow: "hidden",
                  mb: 2,
                }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: 500 }}>
                  {place.name}
                </Text>
                <Text type="secondary" style={{ fontSize: 13 ,paddingBottom:"40px", color:"#05073C"}}>
                  {place.tours}+ Tours
                </Text>
              </Box>
            </Box>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SlickSlider;
