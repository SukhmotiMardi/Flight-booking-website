import React from "react";
import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text } = Typography;

const destinations = [
  {
    name: " Playa del Carmen",
    description: "Quintana Roo, Mexico",
    price: "Rs. 6580",
    image: "../Images/domestic/Mumbai.png",
  },
  {
    name: "Bangkok",
    description: " Bangkok Province, Thailand",
    price: "Rs. 11500",
    image: "../Images/International/bangkok.jpg",
  },
  {
    name: "Pattaya",
    description: "Chonburi Province, Thailand",
    price: "Rs. 6580",
    image: "../Images/International/Pattaya.jpg",
  },
  {
    name: "Patong ",
    description: "Phuket Province, Thailand",
    price: "Rs. 6580",
    image: "../Images/International/Phuket.jpg",
  },
];

const InternationalCards = () => {
 return (
     <>
       <div
         style={{
          //  backgroundColor: "#FFFFF3",
          //  width: "100%",
           // padding: "30px 0px",
//  boxShadow: "2px 2px 08px #d9d9d9",
         }}
         className="py-8"
       >
         <section className="w-full max-w-7xl mx-auto">
           <div className="bg-[#FFFFF3]  mx-auto">
             <Title
               level={3}
               style={{ fontWeight: "bold", marginBottom: "30px" , fontSize:"22px" }}
             >
               Explore International Destinations
             </Title>
             <Row gutter={16}>
               {destinations.map((destination, index) => (
                 <Col span={6} key={index}>
                   <Card
                     hoverable
                     style={{
                       borderRadius: "5%",
                       height: "310px",
                       backgroundColor: "#FFFFF3",
                       padding: "10px",
                       borderColor: "#E7E6E6",
                     }}
                     cover={
                       <>
                         <img
                           alt={destination.name}
                           src={destination.image}
                           style={{
                             height: "180px",
                             width: "100%",
                             objectFit: "cover",
                             borderRadius: "10px",
                             padding: "0px",
                           }}
                         />
 
                         <img
                           alt="favicon"
                           src="../faviconCard.png"
                           style={{
                             position: "absolute",
                             bottom: "105px",
                             right: "30px",
                             height: "32px",
                             width: "32px",
                             objectFit: "contain",
                             borderRadius: "5px",
                             backgroundColor: "white",
                             boxShadow: "0px 3px 6px rgba(58, 51, 51, 0.5)",
                             padding: "2px",
                           }}
                         />
 
                         <Text
                           style={{
                             display: "block",
                             marginTop: "10px",
                             fontSize: "11px",
                             color: "#8c8c8c",
                           }}
                         >
                           {destination.description}
                         </Text>
 
                         <Title
                           level={5}
                           style={{
                             color: "#191E3B",
                             fontSize: "15px",
                             margin: "6px 0 0px 0",
                           }}
                         >
                           {destination.name}
                         </Title>
 
                         <Divider
                           style={{
                             margin: "10px 0",
                             backgroundColor: "#E7E6E6",
                           }}
                         />
 
                         <Row
                           style={{
                             display: "flex",
                             justifyContent: "space-between",
                           }}
                         >
                           <Col span={12}>
                             <Text style={{ fontSize: "14px" }}>
                               Average Price:
                             </Text>
                           </Col>
                           <Col
                             span={12}
                             style={{ textAlign: "right", float: "right" }}
                           >
                             <Text style={{ fontSize: "14px" }}>
                               {destination.price}
                             </Text>
                           </Col>
                         </Row>
                       </>
                     }
                   ></Card>
                 </Col>
               ))}
             </Row>
             {/* </div> */}
           </div>
         </section>
       </div>
     </>
   );
};

export default InternationalCards;
