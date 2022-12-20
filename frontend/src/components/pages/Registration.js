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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
const Registration = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [registrationData, setRegistrationData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const registerNewUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/auth/registration",
        registrationData
      );
      if (response.status === 200) {
        toast({
          title: response.data.message,
          description: "Redirecting to login page",
          status: "success",
          duration: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setLoading(false);
      }
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        duration: 2000,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Header login={true} isLogined={false} />
      <RegistrationWrapper>
        <RegistrationContainer onSubmit={(e) => registerNewUser(e)}>
          <Title>Registration</Title>
          <Input
            placeholder="First Name"
            size="md"
            variant="filled"
            onChange={handleChange}
            name="firstName"
            required
          />
          <Input
            placeholder="Last Name"
            size="md"
            variant="filled"
            onChange={handleChange}
            name="lastName"
            required
          />
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
              placeholder="Enter password"
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
            bg="black"
            color="white"
            variant="outline"
            width="full"
            disabled={loading}
            type="submit"
            _hover={{ bg: "black" }}
          >
            Register
          </Button>
        </RegistrationContainer>
      </RegistrationWrapper>
      <Footer/>
    </>
  );
};

export default Registration;

const RegistrationWrapper = Styled("div")`
display:flex;
justify-content:center;
align-items:center;
height:calc(100vh - 133px);
`;

const RegistrationContainer = Styled("form")`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width: 500px;
height:450px;
gap:20px;
padding: 30px;
border-radius: 12px;
box-shadow: 0px 0px 100px rgba(49,151,149,0.3);
`;

const Title = Styled("h1")`
font-size:28px ;
font-weight:600;
letter-spacing:1px;
`;
