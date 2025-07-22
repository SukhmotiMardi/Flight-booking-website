import { Button, Checkbox, Form, Input, message } from "antd";
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
      <div className="flex  pl-[98px] pr-[82px]">
        <div className="h-[796px]">
          <img src="./Jumbo jet flying in the sky.png" />
        </div>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="username"
              //   rules={[
              //     { required: true, message: "Please input your username!" },
              //   ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              //   rules={[
              //     { required: true, message: "Please input your password!" },
              //   ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <img src="./Group 688.png" />
        </div>
      </div>
    </>
  );
};
export default Login;
