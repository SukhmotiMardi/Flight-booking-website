import {
  Button,
  Typography,
  InputNumber,
  Slider,
  Row,
  Col,
  Checkbox,
} from "antd";
import { AlignCenterIcon, icons } from "lucide-react";
import React, { useState } from "react";
 
const { Text } = Typography;
 
const DynamicLucideIcon = ({ name, ...props }) => {
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};
 
 
const offers = [
  {
    imageSrc: "../Images/time/early.svg",
    altText: "Early Morning",
    promoText: "Before 6 AM",
  },
  {
    imageSrc: "../Images/time/morning.svg",
    altText: "Morning",
    promoText: "06:00 AM to 12 PM",
  },
  {
    imageSrc: "../Images/time/mid-day.svg",
    altText: "Mid Day",
    promoText: "12:00 PM to 06 PM",
  },
  {
    imageSrc: "../Images/time/night.svg",
    altText: "Night",
    promoText: "After 06:00 PM",
  },
];
const items = [
  { iconName: "Sunrise", title: "Early Morning", time: `Before 06:00 AM` },
  { iconName: "Sun", title: "Morning", time: `06:00 AM to 12 PM` },
  { iconName: "CloudSun", title: "Mid Day", time: `12 PM to 06:00 PM` },
  { iconName: "CloudMoon", title: "Night", time: `After 06:00 PM` },
];
 
const CheckboxGroup = Checkbox.Group;
const airlineOptions = [
  "Akasha Airline",
  "Air India",
  "IndiGo",
  "Spice Jet",
  "Air India Express",
];
const stops = ["One Stop", "Two Stop", "Non Stop"];
 
const defaultCheckedList = ["Akasha Airline", "Air India"];
 
const FlightListFliter = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
 
  const [checkedList, setCheckedList] = useState("");
  const checkAll = airlineOptions.length === checkedList.length;
  const handleChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? airlineOptions : []);
  };
 
  const [stopList, setStopList] = useState("");
  const onStopChange = (list) => {
    setStopList(list);
  };
 
  return (
    <>
      <div className="w-[270px]">
        <div className=" mt-3 mb-5">
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Departure Time
          </Text>
        </div>
        <div className="w-[full] flex flex-wrap mb-[10px]  ">
          {offers.map((place, index) => (
      // <Button className="w-[110px] h-[70px] mr-3 mb-5 bg-gray-100   justify-center ">
         <Button className="w-[110px] gap-0 flex flex-col h-[70px] mr-3 mb-3 bg-gray-100 rounded-lg ">
       
          <img
            src={place.imageSrc}
            alt={place.altText}
            preview={false}
style={{
  width: "60px",
  height: "30px",
  justifyContent: "center",
  objectFit:"cover"
}}
          />
 
<Text
  style={{
    fontSize: "12px",
    fontWeight: "bold",
  }}
>
  {place.altText}
</Text>
<Text
  style={{
    fontSize: "12px",
  }}
>
  {place.promoText}
</Text>
       
      </Button>
    ))}
        </div>
        <div className="w-[250px] mb-[20px] ">
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Price Range</Text>
          <Slider
            min={1}
            max={10000}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
          <Row>
            <Col span={12}>
              <InputNumber
                min={1}
                max={10000}
                style={{ margin: "0", width: "100px" }}
                value={inputValue}
                onChange={onChange}
              />
            </Col>
          </Row>
        </div>
 
        <div className=" flex flex-col mb-[20px] ">
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginBottom: "10px" }}
          >
            Airline
          </Text>
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            All
          </Checkbox>
 
          <CheckboxGroup
            className=" flex flex-col"
            options={airlineOptions}
            value={checkedList}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col ">
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginBottom: "10px" }}
          >
            Stops
          </Text>
          <CheckboxGroup
            className=" flex flex-col"
            options={stops}
            value={stopList}
            onChange={onStopChange}
          />
        </div>
      </div>
    </>
  );
};
 
export default FlightListFliter;