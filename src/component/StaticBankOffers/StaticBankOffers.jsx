import React from "react";
 
import { Row, Col, Typography, Image } from "antd";
 
const { Title, Text } = Typography;
 
const offers = [
  {
    imageSrc: "../Images/offers/Group 30.svg",
    altText: "Flight Image 1",
    promoText: "",
  },
  {
    imageSrc: "../Images/offers/Group 31.svg",
    altText: "Flight Image 1",
    promoText: "",
  },
  {
    imageSrc: "../Images/offers/Group 32.svg",
    altText: "Flight Image 1",
    promoText: "",
  },
  {
    imageSrc: "../Images/offers/Group 33.svg",
    altText: "Flight Image 1",
    promoText: "",
  },
];
 
const StaticBankOffers = () => {
  return (
    <>
   
        <div className="  " style={{ paddingTop: "20px" }}>
          <Row gutter={[ 24]}>
            {offers.map((place, index) => (
              <Col key={index} span={6}>
                <div style={{ position: "relative" }}>
                  <Image
                    src={place.imageSrc}
                    alt={place.altText}
                    preview={false}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <Text
                    style={{
                      position: "absolute",
                      top: "10%",
                      left: "40%",
                      transform: "translate(-50%)",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {place.promoText}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
   
    </>
  );
};
 
export default StaticBankOffers;