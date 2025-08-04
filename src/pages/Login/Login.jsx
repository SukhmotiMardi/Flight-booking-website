import { Input, Button, Divider, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(150);
  const [loadingContinue, setLoadingContinue] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const inputsRef = useRef([]);

  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleSubmit = (values) => {
    setLoadingContinue(true);
    console.log("Sending OTP to:", values.identifier);
    setTimeout(() => {
      setIdentifier(values.identifier);
      setOtpSent(true);
      setTimer(150);
      setLoadingContinue(false);
      message.success("OTP sent successfully!");
    }, 1500);
  };

  const handleVerifyOtp = () => {
    setLoadingSubmit(true);
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);
    setTimeout(() => {
      if (enteredOtp === "123456") {
        message.success("OTP verified successfully!");
        navigate("/");
      } else {
        message.error("Invalid OTP. Please try again.");
      }
      setLoadingSubmit(false);
    }, 1500);
  };

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", "", "", ""]);
    setTimer(150);
    message.info("OTP resent to " + identifier);
  };

  return (
    <section className="w-full max-w-[1440px] pl-[98px] pr-[82px] mx-auto mt-36">
      <div className="bg-white border border-gray-300 pb-10 flex max-w-7xl">
        <div className="w-1/2 flex mt-10 justify-center">
          <img
            src="./Jumbo jet flying in the sky.png"
            alt="Airplane"
            className="object-cover h-[520px] w-[480px] rounded-[32px]"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-10 py-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <img
                src="./Untitled design (2) 1.png"
                alt="Lyfetrip Logo"
                className="w-[180px] h-[80px]"
              />
            </div>
            <h1 className="text-3xl font-semibold text-blue-900 mb-2">
              {otpSent ? "Verify your Account" : "Welcome to Lyfetrip"}
            </h1>
            <p className="text-gray-500">
              {otpSent
                ? `OTP has been sent to ${identifier} (valid for next 15 mins)`
                : "Please Login/Register using your Email/Mobile to continue"}
            </p>
            {otpSent && (
              <div className="text-blue-900 font-semibold mt-2">
                Time left: {formatTime()}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center mb-6">
            {!otpSent ? (
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                autoComplete="off"
                className="w-full max-w-md"
              >
                <Form.Item
                  name="identifier"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email Id / Mobile Number!",
                    },
                    {
                      pattern: /^[6-9]\d{9}$/,
                      message: "Please enter a valid 10-digit mobile number!",
                    },
                  ]}
                >
                  <Input
                    prefix={
                      <img
                        className="w-6"
                        src="./proicons_phone.png"
                        alt="mobileicon"
                      />
                    }
                    size="large"
                    placeholder="Email Id / Mobile Number"
                    className="w-full h-12 border-blue-950"
                  />
                </Form.Item>
                <Form.Item className="flex justify-center mb-0">
                  <Button
                    type="primary"
                    size="large"
                    htmlType="submit"
                    loading={loadingContinue}
                    className="h-12 bg-[#063D5E] font-medium text-lg w-[450px]"
                  >
                    CONTINUE
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <div className="w-full max-w-md">
                <div className="flex justify-between mb-4">
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      maxLength={1}
                      value={digit}
                      onChange={(e) =>
                        handleChange(e.target.value.replace(/\D/, ""), index)
                      }
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(el) => (inputsRef.current[index] = el)}
                      className="w-12 h-12 text-center text-lg border-2 border-[#063D5E] rounded"
                    />
                  ))}
                </div>

                <div className="text-sm text-gray-600 mb-4 text-center">
                  Didn't receive any code?{" "}
                  <span
                    className="text-blue-700 font-semibold cursor-pointer"
                    onClick={handleResend}
                  >
                    RESEND
                  </span>
                </div>
                <Button
                  type="primary"
                  size="large"
                  onClick={handleVerifyOtp}
                  loading={loadingSubmit}
                  className="h-12 bg-[#063D5E] font-medium text-lg w-full"
                >
                  LOGIN
                </Button>
              </div>
            )}
          </div>

          <Divider size="large" style={{ borderColor: "gray" }}>
            <span className="text-blue-900 font-semibold">OR</span>
          </Divider>

          <div className="flex justify-center mb-6">
            <Button
              shape="rectangle"
              style={{ width: "80px", height: "40px", border: "none" }}
              size="large"
              className="w-12 h-12 flex items-center justify-center bg-[#E7F2F5]"
            >
              <img src="./google.png" alt="google logo" className="w-5" />
            </Button>
          </div>

          <div className="text-center text-xs text-gray-400 mb-6">
            By proceeding, you agree to Lyfetrip{" "}
            <span className="text-blue-900 cursor-pointer hover:underline font-bold">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-blue-900 cursor-pointer hover:underline font-bold">
              T&Cs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
