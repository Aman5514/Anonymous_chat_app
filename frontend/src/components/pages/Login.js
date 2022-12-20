import React from "react";
import Styled from "styled-components";
import {
  Input,
  Image,
  InputRightElement,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import { useCookies } from "react-cookie";
import Footer from "../common/Footer";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );
      if (response.status === 200) {
        setCookie("user", response.data.data, { path: "/" });
        toast({
          title: response.data.message,
          description: "Redirecting to chatting section",
          status: "success",
          duration: 2000,
        });
        setLoading(false);
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      }
    } catch (error) {
      toast({
        title: error.response.data.message,
        status: "error",
        duration: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Header login={false} isLogined={false} />
      <LoginWrapper>
        <LoginContainer>
          <Input
            placeholder="Email Address"
            size="md"
            variant="filled"
            onChange={handleChange}
            name="email"
            required
          />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              variant="filled"
              type={show ? "text" : "password"}
              placeholder="password"
              onChange={handleChange}
              name="password"
              required
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            color="white"
            bg="black"
            variant="outline"
            width="full"
            isLoading={loading}
            onClick={loginRequest}
            _hover={{ bg: "black" }}
          >
            Login
          </Button>
        </LoginContainer>
      </LoginWrapper>
      <Footer/>
    </>
  );
};

export default Login;

const LoginWrapper = Styled("div")`
display:flex;
justify-content:center;
align-items:center;
height:calc(100vh - 133px);
`;

const LoginContainer = Styled(LoginWrapper)`
flex-direction:column;
width: 500px;
height: 300px;
gap:25px;
padding: 30px;
border-radius: 12px;
box-shadow: 0px 0px 100px rgba(49,151,149,0.3)
`;
