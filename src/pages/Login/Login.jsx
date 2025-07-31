// import { Input, Button, Divider, Form, message, Checkbox } from "antd";
// import {
//   LockOutlined,
//   GoogleOutlined,
//   MobileOutlined,
// } from "@ant-design/icons";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
 
// const Login = () => {
//   const navigate = useNavigate();
 
//   const handleSubmit = async (values) => {
//     try {
//       const payload = {
//         grant_type: "client_credentials",
//         client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
//         client_secret: "au8GvIRzYHWRH1of",
//       };
 
//       const response = await axios.post(
//         "https://test.api.amadeus.com/v1/security/oauth2/token",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//           },
//         }
//       );
 
//       if (response.status === 200) {
//         Cookies.set("access_token", response.data.access_token, {
//           expires: response.data.expires_in / 86400,
//         });
//         navigate("/");
//       }
//     } catch (error) {
//       message.error(
//         "Error retrieving token: " +
//           (error.response?.data?.error_description || "Unknown error")
//       );
//     }
//   };
 
//   return (
//     <section className="w-full max-w-[1440px] pl-[98px] pr-[82px] mx-auto my-28">
//       <div className="bg-white  border border-gray-300  flex max-w-6xl">
//         <div className="w-1/2 flex mt-20 justify-center ">
//           <img
//             src="./Jumbo jet flying in the sky.png"
//             alt="Airplane"
//             className="object-cover h-[560px] w-[500px] rounded-[32px] "
//           />
//         </div>
 
//         <div className="w-1/2 flex flex-col justify-center px-10 py-8">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <img
//                 src="./Untitled design (2) 1.png"
//                 alt="Lyfetrip Logo"
//                 className="w-[180px] h-[80px]"
//               />
//             </div>
//             <h1 className="text-3xl font-semibold text-blue-900 mb-2">
//               Welcome to Lyfetrip
//             </h1>
//             <p className="text-gray-500">
//               Please Login/Register using your Email/Mobile to continue
//             </p>
//           </div>
 
//           <div className="flex flex-col items-center mb-6">
//             <Form
//               name="login"
//               initialValues={{ remember: true }}
//               onFinish={handleSubmit}
//               autoComplete="off"
//               className="w-full max-w-md"
//             >
//               <Form.Item
//                 name="identifier"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your Email Id / Mobile Number!",
//                   },
//                 ]}
//               >
//                 <Input
//                   // prefix={<MobileOutlined />}
//                   prefix={<img className="w-6" src="./proicons_phone.png" alt="mobileicon"/>}
//                   size="large" 
//                   placeholder="Email Id / Mobile Number"
//                   className="w-full h-12 border-blue-950"
//                 />
//               </Form.Item>
 
//               <Form.Item name="otpToggle" valuePropName="checked">
//                 <Checkbox style={{ borderColor: "green" }}>
//                   <div className=" text-[#606268]">
//                     We have sent you an{" "}
//                     <span className="text-[#313646] font-semibold">
//                       One Time Password (OTP)
//                     </span>
//                   </div>
//                 </Checkbox>
//               </Form.Item>
 
//               <Form.Item className="flex  justify-center mb-0">
//                 <Button
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="h-12 bg-[#063D5E] font-medium text-lg w-[450px]"
//                 >
//                   CONTINUE
//                 </Button>
//               </Form.Item>
 
//               {/* <Form.Item className="flex justify-center mb-0">
//                 <Button
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   style={{ height: '48px', backgroundColor: '#1E3A8A', fontWeight: '600', fontSize: '18px', width: '100%' }}
//                 >
//                   CONTINUE
//                 </Button>
//               </Form.Item> */}
//             </Form>
//           </div>
 
//           <Divider size="large" style={{ borderColor: "gray" }}>
//             <span className="text-blue-900 font-semibold">OR</span>
//           </Divider>
 
//           <div className="flex justify-center mb-6">
//             <Button
//               shape="rectangle"
//               style={{ width: "80px", height: "40px", border: "none" }}
//               size="large"
//               className="w-12 h-12 flex items-center justify-center bg-[#E7F2F5]"
//             >
//               <img src="./google.png" alt="google logo" className="w-5" />
//             </Button>
//           </div>
 
//           <div className="text-center text-sm mb-6">
//             Don't have an account?{" "}
//             <span className="text-blue-900 hover:underline cursor-pointer font-medium">
//               Register Now
//             </span>
//           </div>
 
//           <div className="text-center text-xs text-gray-400 mb-6">
//             By proceeding, you agree to Lyfetrip{" "}
//             <span className="text-blue-900 cursor-pointer hover:underline">
//               Privacy Policy
//             </span>{" "}
//             and{" "}
//             <span className="text-blue-900 cursor-pointer hover:underline">
//               T&Cs
//             </span>
//           </div>
 
//           {/* Additional Images */}
//           <div
//             className="flex justify-center items-center mt-4"
//             style={{ position: "relative" }}
//           >
//             <img
//               src="./Group 688.png"
//               alt="Lyfetrip Logo"
//               width={380}
//               height={190}
//               preview={false}
//               style={{
//                 cursor: "pointer",
//                 objectFit: "cover",
//               }}
//             />
//             <img
//               src="/lyfetrip_vector_icon 1.png"
//               alt="Lyfetrip Logo"
//               width={70}
//               height={40}
//               preview={false}
//               style={{
//                 position: "absolute",
//                 top: "10%",
//                 left: "42%",
//                 color: "white",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
 
// export default Login;
 
 










 
import { Input, Button, Divider, Form, message, Checkbox } from "antd";
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
 
  const handleSubmit = async (values) => {
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
    <section className="w-full max-w-[1440px] pl-[98px] pr-[82px] mx-auto mt-36">
      <div className="bg-white   border border-gray-300 pb-10 flex max-w-7xl">
        <div className="w-1/2 flex mt-10 justify-center ">
          <img
            src="./Jumbo jet flying in the sky.png"
            alt="Airplane"
            className="object-cover h-[520px] w-[480px] rounded-[32px] "
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
                name="identifier"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Id / Mobile Number!",
                  },
                ]}
              >
                <Input
                  // prefix={<MobileOutlined />}
                  prefix={<img className="w-6" src="./proicons_phone.png" alt="mobileicon"/>}
                  size="large"
                  placeholder="Email Id / Mobile Number"
                  className="w-full h-12 border-blue-950"
                />
              </Form.Item>
 
              {/* <Form.Item name="otpToggle" valuePropName="checked">
                <Checkbox style={{ borderColor: "green" }}>
                  <div className=" text-[#606268]">
                    We have sent you an{" "}
                    <span className="text-[#313646] font-semibold">
                      One Time Password (OTP)
                    </span>
                  </div>
                </Checkbox>
              </Form.Item> */}
 
              <Form.Item className="flex  justify-center mb-0">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="h-12 bg-[#063D5E] font-medium text-lg w-[450px]"
                >
                  CONTINUE
                </Button>
              </Form.Item>
 
              {/* <Form.Item className="flex justify-center mb-0">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  style={{ height: '48px', backgroundColor: '#1E3A8A', fontWeight: '600', fontSize: '18px', width: '100%' }}
                >
                  CONTINUE
                </Button>
              </Form.Item> */}
            </Form>
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
           By proceeding, you agree to Lyfetrip {" "}
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
 