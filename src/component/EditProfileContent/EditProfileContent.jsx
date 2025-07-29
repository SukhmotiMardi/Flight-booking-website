import { DatePicker } from "antd";
import React, { useState } from "react";
 
const EditProfileContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    mobileNumber: "",
    email: "",
    passportNo: "",
    panCard: "",
  });
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
 
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[1440px] mx-auto my-4 pl-[58px] pr-[58px] bg-white rounded-lg mb-10 ">
      {/* General Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#063D5E] mb-4">General Information</h2>
        {/* First row: First Name and Last Name */}
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">First Name</label>
            <input type="text" required name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border border-gray-300 font-normal text-sm placeholder:font-normal rounded px-2 py-1 placeholder:text-sm" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Last Name</label>
            <input type="text" required name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border border-gray-300 font-normal text-sm  placeholder:font-normal rounded px-2 py-1 placeholder:text-sm" />
          </div>
        </div>
        {/* Second row: Gender, Date of Birth, Nationality */}
        <div className="grid grid-cols-3 gap-6 mb-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Gender</label>
            <select name="gender" required value={formData.gender} onChange={handleChange} className="border border-gray-300 font-normal text-sm  rounded px-2 py-1 placeholder:font-normal placeholder:text-sm max-w-xs">
              {/* <option value="">Select</option> */}
              <option value="Male" className="text-sm font-normal">Male</option>
              <option value="Female" className="text-sm font-normal">Female</option>
              <option value="Other" className="text-sm font-normal">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Date of Birth</label>
            <input type="date"  required name="dateOfBirth" placeholder="DD-MM-YYYY" value={formData.dateOfBirth} onChange={handleChange} className="border border-gray-300 font-normal text-sm  rounded px-2 placeholder:font-normal py-1 placeholder:text-sm max-w-xs" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Nationality</label>
            <input type="text" required name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Indian" className="border border-gray-300 font-normal text-sm  rounded px-2 py-1 placeholder:text-sm max-w-xs" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Address</label>
          <input type="text" required name="address" value={formData.address} onChange={handleChange} placeholder="Type address" className="border font-normal text-sm  border-gray-300 rounded placeholder:font-normal p-2 placeholder:text-sm" />
        </div>
      </div>
      {/* Contact Details */}
      <div className="border-t border-gray-200 pt-6 mb-8">
        <div className="flex items-center mb-2">
          <span className="text-[#063D5E] text-base font-semibold mr-2">Contact Details</span>
        </div>
        <p className="text-xs text-[#063D5E] mb-4">Add contact information to receive booking details & other alerts</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Mobile Number</label>
            <input type="number" required maxLength={"10"} name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" className="border border-gray-300 rounded px-2 py-1 placeholder:text-sm font-normal text-sm  placeholder:font-normal" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Email ID</label>
            <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="Add email id" className="border border-gray-300 rounded px-2 py-1 placeholder:font-normal  font-normal text-sm placeholder:text-sm" />
          </div>
        </div>
      </div>
      {/* Documents Details */}
      <div className="border-t border-gray-200 pt-6 mb-8">
        <div className="flex items-center mb-2">
          <span className="text-[#063D5E] text-base font-semibold mr-2">Documents Details</span>
        </div>
        <p className="text-xs text-[#063D5E] mb-4">NOTE: <span className="text-[#063D5E]">Your PAN No. will only be used for international bookings as per RBI Guidelines</span></p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Passport Details</label>
            <input type="text" name="passportNo" value={formData.passportNo} onChange={handleChange} placeholder="Passport No" className="border font-normal text-sm  border-gray-300 rounded px-2 py-1 placeholder:text-sm placeholder:font-normal" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Pan Card Number</label>
            <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} placeholder="Type Pan Number" className="border font-normal text-sm  border-gray-300 rounded px-2 py-1 placeholder:text-sm placeholder:font-normal" />
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button type="button" className="border  text-sm  border-[#063D5E] w-[140px] text-[#063D5E] rounded px-6 py-2 font-medium">Cancel</button>
        <button type="submit" className="bg-[#063D5E] text-sm  text-white rounded  py-2 w-[140px] font-medium">Save</button>
      </div>
    </form>
  );
};
 
export default EditProfileContent;