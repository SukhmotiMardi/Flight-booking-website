import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  Divider,
  Typography,
  DatePicker,
} from "antd";

const { Title, Text } = Typography;

const EditProfileContent = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="max-w-[1340px] w-full mx-auto px-4 lg:px-8 xl:px-12 bg-white rounded-lg mb-10">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="mb-8">
          <Title level={4} style={{ color: "#063D5E", marginBottom: "16px" }}>
            General Information
          </Title>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  // { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  placeholder="Enter First Name"
                  size="large"
                  className="border-blue-950"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  // { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  placeholder="Enter Last Name"
                  size="large"
                  className="border-blue-950"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  // { required: true, message: "Please select your gender!" },
                ]}
              >
                <Select
                  placeholder="Select Gender"
                  size="large"
                  style={{
                    borderColor: "#063D5E" ,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderStyle: "solid",
                  }}
                  className="ant-select-selector"
                  options={[
                    { value: "1", label: "Male" },
                    { value: "2", label: "Female" },
                    { value: "3", label: "Other" },
                  ]}
                />
              
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Date of Birth"
                name="dateOfBirth"
                rules={[
                  {
                    // required: true,
                    // message: "Please select your date of birth!",
                  },
                ]}
              >
                <DatePicker
                  placeholder="DD-MM-YYYY"
                  format="DD-MM-YYYY"
                  size="large"
                  className="border-blue-950 w-full"
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Nationality"
                name="nationality"
                rules={[
                  // { required: true, message: "Please input your nationality!" },
                ]}
              >
               <Select
                  placeholder="Select Nationality"
                  size="large"
                  style={{
                    borderColor: "#063D5E" ,
                    borderWidth: 1,
                    borderRadius: 8,
                    borderStyle: "solid",
                  }}
                  className="ant-select-selector"
                  options={[
                    { value: "1", label: "Indian" },
                    // { value: "2", label: "Female" },
                    // { value: "3", label: "Other" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Address"
            name="address"
            // rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input
              placeholder="Enter Address"
              size="large"
              className="border-blue-950"
            />
          </Form.Item>
        </div>
        <Divider />
        <div className="mb-8">
          <Title level={4} style={{ color: "#063D5E", marginBottom: "8px" }}>
            Contact Details
          </Title>
          <Text
            type="secondary"
            style={{
              fontSize: "12px",
              color: "#063D5E",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Add contact information to receive booking details & other alerts
          </Text>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Mobile No."
                name="mobileNumber"
                rules={[
                  // {
                  //   required: true,
                  //   message: "Please input your mobile number!",
                  // },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit mobile number!",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Mobile No."
                  maxLength={10}
                  className="border-blue-950"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Email ID"
                name="email"
                rules={[
                  // { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Enter email id"
                  className="border-blue-950"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Divider />
        <div className="mb-8">
          <Title level={4} style={{ color: "#063D5E", marginBottom: "8px" }}>
            Documents Details
          </Title>
          <Text
            style={{
              fontSize: "12px",
              color: "#063D5E",
              display: "block",
              marginBottom: "16px",
            }}
          >
            NOTE:{" "}
            <span style={{ color: "#063D5E" }}>
              Your PAN No. will only be used for international bookings as per
              RBI Guidelines
            </span>
          </Text>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="Passport No." name="passportNo">
                <Input
                  placeholder="Enter Passport No."
                  className="border-blue-950"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="PAN"
                name="panCard"
                rules={[
                  {
                    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                    message:
                      "Please enter a valid PAN number (e.g., ABCDE1234F)",
                  },
                ]}
              >
                <Input
                  placeholder="Enter PAN"
                  maxLength={10}
                  className="border-blue-950"
                  size="large"
                />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <Form.Item style={{ textAlign: "right", marginBottom: 0}}>
           <div className='flex gap-5 justify-end mt-4'>
          <Button
            className="border-[#063D5E] w-24 p-1"
            onClick={() => form.resetFields()}
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#063D5E] border w-24 p-1"
          >
            Save
          </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProfileContent;
