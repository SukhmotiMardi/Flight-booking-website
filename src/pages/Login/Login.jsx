// import { Button, Checkbox, Form, Input, message } from "antd";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         grant_type: "client_credentials",
//         client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
//         client_secret: "au8GvIRzYHWRH1of",
//       };
//       console.log("payload", payload);
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
//         // message.success("Token retrieved successfully");
//         navigate("/");
//         console.log("Token:", response.data.access_token);
//         console.log("response", response);
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       message.error(
//         "Error retrieving token: " +
//           (error.response?.data?.error_description || "Unknown error")
//       );
//     }
//   };

//   return (
//     <>
//       <div className="flex  pl-[98px] pr-[82px]">
//         <div className="h-[796px]">
//           <img src="./Jumbo jet flying in the sky.png" />
//         </div>
//         <div>
//           <Form
//             name="basic"
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 16 }}
//             style={{ maxWidth: 600 }}
//             initialValues={{ remember: true }}
//             onFinish={handleSubmit}
//             // onFinishFailed={onFinishFailed}
//             autoComplete="off"
//           >
//             <Form.Item
//               label="Email"
//               name="username"
//               //   rules={[
//               //     { required: true, message: "Please input your username!" },
//               //   ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               //   rules={[
//               //     { required: true, message: "Please input your password!" },
//               //   ]}
//             >
//               <Input.Password />
//             </Form.Item>

//             {/* <Form.Item name="remember" valuePropName="checked" label={null}>
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item> */}

//             <Form.Item label={null}>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//           <img src="./Group 688.png" />
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;


// import React from "react";
// import { Input, Button, Divider, Form, message } from "antd";
// import {
//   MailOutlined,
//   LockOutlined,
//   GoogleOutlined,
//   FacebookOutlined,
//   AppleOutlined,
// } from "@ant-design/icons";
 
//  import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
 
// const Login = () => {
//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         grant_type: "client_credentials",
//         client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
//         client_secret: "au8GvIRzYHWRH1of",
//       };
//       console.log("payload", payload);
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
//         // message.success("Token retrieved successfully");
//         navigate("/");
//         console.log("Token:", response.data.access_token);
//         console.log("response", response);
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       message.error(
//         "Error retrieving token: " +
//           (error.response?.data?.error_description || "Unknown error")
//       );
//     }
//   };
 
//   return (
//     <div className=" flex items-center justify-center ">
//       <div className="bg-white rounded-xl shadow-lg flex max-w-6xl w-full overflow-hidden">
//         <div className="w-1/2">
//           <img
//             src="./Jumbo jet flying in the sky.png"
//             alt="Airplane"
//             className="object-cover h-full w-full"
//           />
//         </div>
 
//         <div className="w-1/2  flex flex-col justify-center">
//           <div className="text-center mb-6">
//             <div className="flex justify-center mt-4">
//               <img
//                 src="./Untitled design (2) 1.png"
//                 alt="Lyfetrip Logo"
//                 className="  w-[180px] h-[80px]"
//               />
//             </div>
//             <div className="text-3xl font-semibold text-blue-900">
//               Welcome to Lyfetrip
//             </div>
//             <p className="text-gray-500 mt-1">
//               Please Login/Register using your Email/Mobile to continue
//             </p>
//           </div>
 
//           {/* Form Fields */}
//           <div className="space-y-4 p-10">
//             <Form
//               name="basic"
           
//               // style={{ maxWidth: 600 }}
//               initialValues={{ remember: true }}
//               onFinish={handleSubmit}
             
//               autoComplete="off"
//             >
//               <Form.Item
//                 name="email"
//                 rules={[
//                   { required: true, message: "Please input your username!" },
//                 ]}
//               >
//                 <Input
//                   size="large"
//                   placeholder="Mobile Number / Email Id"
//                   prefix={<MailOutlined />}
//                 />
//               </Form.Item>
 
//               <Form.Item
//                 name="password"
//                 rules={[
//                   { required: true, message: "Please input your password!" },
//                 ]}
//               >
//                 <Input.Password
//                   size="large"
//                   placeholder="Password"
//                   prefix={<LockOutlined />}
//                 />
//               </Form.Item>
//               <div className="text-right text-gray-600 text-sm cursor-pointer hover:underline ">
//                 Forgot your password?
//               </div>
 
//               <Form.Item label={null}>
//                 <Button
//                   type="primary"
//                   size="large"
//                   className="  p-5 bg-blue-800 hover:bg-blue-900 "
//                   htmlType="submit"
//                 >
//                   LOGIN
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
 
//           {/* OR Divider */}
//           <div className="text-3xl font-semibold text-blue-900 ">
//             <Divider variant="dotted" style={{ borderColor: "#4d4b4bff" }}>
//               OR
//             </Divider>
//           </div>
 
//           {/* Social Logins */}
//           <div className="flex justify-center gap-4 mb-6">
//             <Button shape="circle" icon={<GoogleOutlined />} />
//           </div>
 
//           {/* Register Link */}
//           <div className="text-center text-sm ">
//             Don’t have account?{" "}
//             <span className="text-blue-900 hover:underline cursor-pointer ">
//               Register Now
//             </span>
//           </div>
 
//           {/* Footer */}
//           <div className="text-center mt-6 text-xs text-gray-400">
//             By proceeding, you agree to Lyfetrip{" "}
//             <span className="text-blue-900 cursor-pointer hover:underline">
//               Privacy Policy
//             </span>{" "}
//             and{" "}
//             <span className="text-blue-900 cursor-pointer hover:underline">
//               T&Cs
//             </span>
//           </div>
 
       
 
//           <div
//             className="flex justify-center mt-4"
//             style={{ position: "relative", width: 500 }}
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
//                 left: "40%",
 
//                 color: "white",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Login;

// import React from "react";
// import { Input, Button, Divider, Form, message, Row, Col } from "antd";
// import {
//   LockOutlined,
//   GoogleOutlined,
//   MobileOutlined,
// } from "@ant-design/icons";
 
// //import logo from "./Group 682.svg";
 
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
 
// const Login = () => {
//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     try {
//       const payload = {
//         grant_type: "client_credentials",
//         client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
//         client_secret: "au8GvIRzYHWRH1of",
//       };
//       console.log("payload", payload);
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
//         // message.success("Token retrieved successfully");
//         navigate("/");
//         console.log("Token:", response.data.access_token);
//         console.log("response", response);
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       message.error(
//         "Error retrieving token: " +
//           (error.response?.data?.error_description || "Unknown error")
//       );
//     }
//   };
 
//   return (
//     <>
//       <div className=" max-w-[1440px]  my-10 pl-[98px] pr-[82px] mx-auto flex items-center justify-center ">
//         <div className="bg-white rounded-xl shadow-lg flex  w-full overflow-hidden  relative ">
 
 
 
//           <Row>
//             <Col span={12}>
//               <div className="">
//                 <img
//                   src="./Jumbo jet flying in the sky.png"
//                   alt="Airplane"
//                   className="object-cover h-full w-full"
//                 />
//               </div>
//             </Col>
//             <Col span={12}>
//               <div className="  flex flex-col justify-center">
//                 <div className="text-center mb-2">
//                   <div className="flex justify-center mt-8">
//                     <img
//                       src="./Untitled design (2) 1.png"
//                       alt="Lyfetrip Logo"
//                       className="  w-[180px] h-[70px]"
//                     />
//                   </div>
//                   <div className="text-3xl font-semibold text-blue-900">
//                     Welcome to Lyfetrip
//                   </div>
//                   <p className="text-gray-500 mt-8">
//                     Please Login/Register using your Email/Mobile to continue
//                   </p>
//                 </div>
 
//                 {/* Form Fields */}
//                 <div className="space-y-4 p-10  ">
 
//                  <FormControl  name="basic"
//                     initialValues={{ remember: true }}
//                     onFinish={handleSubmit}
//                     autoComplete="off"
//                     style={{marginTop:"30px",}}
//                     >
//                   <TextField
//           required
//           id="outlined-required"
//           label="Mobile Number "
 
//            sx={{ width: "550px",marginBottom:"20px" }}
//           defaultValue="+91"
//         />
 
//          <TextField
//                         //id="outlined-password-input"
//                         sx={{ width: "550px" }}
//                         label="Password"
//                         type="password"
//                         autoComplete="current-password"
//                         slotProps={{
//                           input: {
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <LockOutlined />
//                               </InputAdornment>
//                             ),
//                           },
//                         }}
//                       />
 
//                       <div className="text-right text-gray-600 text-sm cursor-pointer hover:underline mt-5 ">
//                       Forgot your password?
//                     </div>
 
//                     <div className="flex justify-center  ">
                     
//                         <Button
//                           type="primary"
//                           size="large"
//                           className="  p-5 bg-blue-800 hover:bg-blue-900 "
//                           htmlType="submit"
//                         >
//                           LOGIN
//                         </Button>
                     
//                     </div>
       
//         </FormControl> 
 
 
//                   {/* <Form
//                     name="basic"
//                     initialValues={{ remember: true }}
//                     onFinish={handleSubmit}
//                     autoComplete="off"
//                   >
//                     <Form.Item
//                       name="email"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your Mobile number!",
//                         },
//                       ]}
//                     >
//                       <TextField
//                         sx={{ width: "550px" }}
//                         // id="outlined-required"
//                         label="Mobile Number "
//                         defaultValue="+91 "
//                         slotProps={{
//                           input: {
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <MobileOutlined />
//                               </InputAdornment>
//                             ),
//                           },
//                         }}
//                       />
                     
//                     </Form.Item>
//                     <Form.Item
//                       name="password"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your Password!",
//                         },
//                       ]}
//                     >
//                       <TextField
//                         //id="outlined-password-input"
//                         sx={{ width: "550px" }}
//                         label="Password"
//                         type="password"
//                         autoComplete="current-password"
//                         slotProps={{
//                           input: {
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <LockOutlined />
//                               </InputAdornment>
//                             ),
//                           },
//                         }}
//                       />
//                     </Form.Item>
//                     <div className="text-right text-gray-600 text-sm cursor-pointer hover:underline ">
//                       Forgot your password?
//                     </div>
 
//                     <div className="flex justify-center  ">
//                       <Form.Item label={null}>
//                         <Button
//                           type="primary"
//                           size="large"
//                           className="  p-5 bg-blue-800 hover:bg-blue-900 "
//                           htmlType="submit"
//                         >
//                           LOGIN
//                         </Button>
//                       </Form.Item>
//                     </div>
//                   </Form> */}
//                 </div>
 
//                 {/* OR Divider */}
//                 <div className="text-1xl font-semibold text-blue-900 flex justify-center  ml-[220px] w-[200px]">
//                   <Divider
//                     variant="dotted"
//                     style={{ borderColor: "#4d4b4bff" }}
//                   >
//                     OR
//                   </Divider>
//                 </div>
 
//                 <div className="flex justify-center gap-4 mb-4 ">
//                   <img src="./Group 682.svg" alt="" />
//                 </div>
 
//                 {/* Register Link */}
//                 <div className="text-center text-sm ">
//                   Don’t have account?{" "}
//                   <span className="text-blue-900 font-semibold hover:underline cursor-pointer ">
//                     Register Now
//                   </span>
//                 </div>
 
//                 {/* Footer */}
//                 <div className="text-center mt-6 text-xs text-gray-400">
//                   By proceeding, you agree to Lyfetrip{" "}
//                   <span className="text-blue-900 cursor-pointer font-bold  hover:underline">
//                     Privacy Policy
//                   </span>{" "}
//                   and{" "}
//                   <span className="text-blue-900 font-bold cursor-pointer hover:underline">
//                     T&Cs
//                   </span>
//                 </div>
 
//                 <div
//                   className="flex justify-center mt-0"
//                   style={{  width: 640 }}
//                 >
//                   <img
//                     src="./Group 688.png"
//                     alt="Lyfetrip Logo"
//                     width={600}
//                     height={175}
//                     preview={false}
//                     style={{
//                       marginTop: "40px",
//                       position: "absolute",
//                       // cursor: "pointer",
//                       objectFit: "cover",
//                       bottom:"0px"
//                     }}
//                   />
//                   <img
//                     src="/lyfetrip_vector_icon 1.png"
//                     alt="Lyfetrip Logo"
//                     width={70}
//                     height={40}
//                     preview={false}
//                     style={{
//                       position: "absolute",
//                       bottom: "60px",
//                       left: "42%",
//                       color: "white",
//                     }}
//                   />
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// };
 
// export default Login;


import React from "react";
import { Input, Button, Divider, Form, message, Row, Col } from "antd";
import {
  LockOutlined,
  GoogleOutlined,
  MobileOutlined,
  GoogleCircleFilled,
} from "@ant-design/icons";
 
//import logo from "./Group 682.svg";
 
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
 
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const payload = {
        grant_type: "client_credentials",
        client_id: "EbmYPUonmffe61mx4rhs3zhhc7k5qqFx",
        client_secret: "au8GvIRzYHWRH1of",
      };
      console.log("payload", payload);
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
        // message.success("Token retrieved successfully");
        navigate("/");
        console.log("Token:", response.data.access_token);
        console.log("response", response);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      message.error(
        "Error retrieving token: " +
          (error.response?.data?.error_description || "Unknown error")
      );
    }
  };
 
  return (
    <>
      <div className=" max-w-[1440px]  my-10 pl-[98px] pr-[82px] mx-auto flex items-center justify-center ">
        <div className="bg-white  h-[700px] rounded-xl shadow-lg flex  w-full overflow-hidden  ">
          <Row>
            <Col span={12}>
              <div className="h-[700px]  w-auto p-0 mr-0 rounded-[26px] ">
                <img
                  src="./Jumbo jet flying in the sky.png"
                  alt="Airplane"
                  className="object-cover h-[700px]"
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="  flex flex-col justify-center">
                <div className="text-center mb-2">
                  <div className="flex justify-center ">
                    <img
                      src="./Untitled design (2) 1.png"
                      alt="Lyfetrip Logo"
                      className="  w-[180px] h-[70px]"
                    />
                  </div>
                  <div className="text-3xl font-semibold text-blue-900">
                    Welcome to Lyfetrip
                  </div>
                  <p className="text-gray-500 mt-3">
                    Please Login/Register using your Email/Mobile to continue
                  </p>
                </div>
 
                {/* Form Fields */}
                <div className="space-y-4 m-4 ">
                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    autoComplete="off"
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Mobile number!",
                        },
                      ]}
                    >
                      <TextField
                        style={{ width: "100%", font: "12px" }}
                        // id="outlined-required"
                        label="Mobile Number "
                        defaultValue="+91 "
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <MobileOutlined />
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <TextField
                        //id="outlined-password-input"
                        sx={{ width: "100%" }}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        slotProps={{
                          input: {
                            startAdornment: (
                              <InputAdornment position="start">
                                <LockOutlined />
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Form.Item>
                    <div className="text-right text-gray-600 text-sm cursor-pointer hover:underline ">
                      Forgot your password?
                    </div>
 
                    <div className="flex justify-center  ">
                      <Form.Item label={null}>
                        <Button
                          type="primary"
                          size="large"
                          className="  p-5 bg-blue-800 hover:bg-blue-900 "
                          htmlType="submit"
                        >
                          LOGIN
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
 
                  <Divider
                    variant="dotted"
                    style={{ borderColor: "#4d4b4bff" }}
                  >
                    OR
                  </Divider>
 
                  <div className="flex justify-center">
                    <GoogleCircleFilled className="text-blue-600 text-4xl"/>
                  </div>
 
                  {/* Register Link */}
                  <div className="  text-center text-sm ">
                    Don’t have account?{" "}
                    <span className="text-blue-900 font-semibold hover:underline cursor-pointer ">
                      Register Now
                    </span>
                  </div>
                       
                  {/* Footer */}
                  <div className="text-center  text-xs text-gray-400">
                    By proceeding, you agree to Lyfetrip{" "}
                    <span className="text-blue-900 cursor-pointer font-bold  hover:underline">
                      Privacy Policy
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-900 font-bold cursor-pointer hover:underline">
                      T&Cs
                    </span>
                  </div>
                </div>
 
                <div
                  className=" flex justify-center mt-0  overflow-hidden"
                  style={{ width: 640 }}
                >
                  <img
                    src="./Group 688.png"
                    alt="Lyfetrip Logo"
                    width={900}
                    height={175}
                    preview={false}
                    style={{
                      position: "absolute",
 
                      objectFit: "contain",
                      left: "0px",
                      bottom: "0px",
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
                      bottom: "60px",
                      left: "40%",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
 
export default Login;