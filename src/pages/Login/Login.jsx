import React from "react";
import { Input, Button, Divider, Form, message } from "antd";
import {
  LockOutlined,
  GoogleOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    try {
      const payload = {
        grant_type: "client_credentials",
        client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
        client_secret: "au8GvIRzYHWRH1of",
      };
      
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
 
      if (response.status === 200) {
        Cookies.set("access_token", response.data.access_token, {
          expires: response.data.expires_in / 86400,
        });
        navigate("/");
      }
    } catch (error) {
      message.error(
        "Error retrieving token: " +
          (error.response?.data?.error_description || "Unknown error")
      );
    }
  };
 
  return (
    <section className="w-full max-w-[1440px] pl-[98px] pr-[82px] mx-auto my-28">
      <div className="bg-white rounded-4xl shadow-lg flex max-w-6xl">
        <div className="w-1/2">
          <img
            src="./Jumbo jet flying in the sky.png"
            alt="Airplane"
            className="object-cover h-full w-full rounded-l-4xl"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center px-10 py-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="./Airplane.png"
                alt="Lyfetrip Logo"
                className="w-[180px] h-[80px]"
              />
            </div>
            <h1 className="text-3xl font-semibold text-blue-900 mb-2">
              Welcome to Lyfetrip
            </h1>
            <p className="text-gray-500">
              Please Login/Register using your Email/Mobile to continue
            </p>
          </div>

          <div className="flex flex-col items-center mb-6">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
              className="w-full max-w-md"
            >
              <Form.Item
                name="mobile"
                rules={[
                  {
                    required: true,
                    message: "Please input your mobile number!",
                  },
                ]}
              >
                <Input
                  prefix={<MobileOutlined />}
                  size="large"
                  placeholder="Mobile Number"
                  defaultValue="+91 "
                  className="w-full"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  size="large"
                  placeholder="Password"
                  className="w-full"
                />
              </Form.Item>

              <div className="text-right mb-4">
                <span className="text-gray-600 text-sm cursor-pointer hover:underline">
                  Forgot your password?
                </span>
              </div>

              <Form.Item className="flex justify-center mb-0">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full h-12 bg-blue-800 hover:bg-blue-900 font-semibold text-lg"
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
          </div>

          <Divider className="my-6">
            <span className="text-blue-900 font-semibold">OR</span>
          </Divider>

          <div className="flex justify-center mb-6">
            <Button 
              shape="circle" 
              icon={<GoogleOutlined />} 
              size="large"
              className="w-12 h-12 flex items-center justify-center"
            />
          </div>

          <div className="text-center text-sm mb-6">
            Don't have account?{" "}
            <span className="text-blue-900 hover:underline cursor-pointer font-medium">
              Register Now
            </span>
          </div>

          <div className="text-center text-xs text-gray-400 mb-6">
            By proceeding, you agree to Lyfetrip{" "}
            <span className="text-blue-900 cursor-pointer hover:underline">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-900 cursor-pointer hover:underline">
              T&Cs
            </span>
          </div>

          <div
            className="flex justify-center items-center mt-4"
            style={{ position: "relative" }}
          >
            <img
              src="./Group 688.png"
              alt="Lyfetrip Logo"
              width={380}
              height={190}
              preview={false}
              style={{
                cursor: "pointer",
                objectFit: "cover",
              }}
            />
            <img
              src="/lyfetrip_vector_icon 1.png"
              alt="Lyfetrip Logo"
              width={70}
              height={40}
              preview={false}
              style={{
                position: "absolute",
                top: "10%",
                left: "42%",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;