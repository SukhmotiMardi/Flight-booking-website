import React from "react";

import { Row, Col, Typography, Image } from "antd";
import { Card } from "@mui/material";

const { Title, Text } = Typography;

const CardItem = ({ imageSrc, altText, promoText }) => {
  return (
    <>
      <Card
        elevation={0}
        style={{
          backgroundColor: "#F6F6F6", 
        }} 
      >
        <div style={{ position: "relative", width: 200 }}>
          <Image
            src={imageSrc}
            alt={altText}
            width={280}
            height={153}
            preview={false}
            style={{
              borderRadius: "10px",
              marginBottom: "20px",
              cursor: "pointer",
              objectFit: "contain",
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
            {promoText}
          </Text>
        </div>
      </Card>
    </>
  );
};

const Cards = () => {
  const offers = [
    {
      imageSrc: "../Images/flights/flight1.png",
      altText: "Flight Image 1",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight2.png",
      altText: "Desert Image",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight3.png",
      altText: "Flight Image 2",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight4.png",
      altText: "Flight Image 3",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight5.png",
      altText: "Lotus Image",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight6.png",
      altText: "Place Image",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight7.png",
      altText: "Flight Image 4",
      promoText: "",
    },
    {
      imageSrc: "../Images/flights/flight8.png",
      altText: "Flight Image 5",
      promoText: "",
    },
  ];

  return (
    <>
      <section className="w-full mt-4 mx-auo">
        <div
          className="bg-[#F6F6F6] pt-[20px] pb-[30px]"
          // style={{ paddingTop: "20px" }}
        >
          <Title
            level={3}
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              marginTop: "25px",
            }}
          >
            Enjoy hassle free flight ticket bookings at lowest airfare
          </Title>
          <Row gutter={[30, 4]}>
            {offers.map((offer, index) => (
              <Col xs={24} sm={12} md={8} lg={6} key={index}>
                <CardItem
                  imageSrc={offer.imageSrc}
                  altText={offer.altText}
                  promoText={offer.promoText}
                />
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Cards;
