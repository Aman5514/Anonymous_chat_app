import React from "react";
import { Avatar, Button, Flex, Input, Select } from "@chakra-ui/react";
import Styled from "styled-components";
import { RiChatPrivateLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = ({ login, isLogined }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  console.log("cookies", cookies.user);
  const navigate = useNavigate();
  return (
    <DashboardHeader>
      <Title>
        <RiChatPrivateLine size={28} />
        <h1>Anonymous +</h1>
      </Title>
      <HeaderTools>
        {isLogined ? (
          <Flex gap={3}>
            <Avatar
              size="sm"
              name={`${cookies?.user?.firstName} ${cookies?.user?.lastName}`}
            />
            <Button
              onClick={() => {
                navigate("/");
                removeCookie("user", { path: "/" });
              }}
              color="black"
              border="2px"
              borderColor="black"
              _hover={{ bg: "black", color: "white" }}
              variant="outline"
              size="sm"
            >
              Logout
            </Button>
          </Flex>
        ) : (
          <Button
            onClick={() => navigate(login ? "/" : "/registration")}
            color="black"
            border="2px"
            borderColor="black"
            _hover={{ bg: "black", color: "white" }}
            variant="outline"
            size="sm"
          >
            {login ? "Login" : "Registration"}
          </Button>
        )}
      </HeaderTools>
    </DashboardHeader>
  );
};

export default Header;

const DashboardHeader = Styled("div")`
display:flex;
align-items:center;
width:100%;
gap:20px;
justify-content:space-between;
position: sticky;
top: 0px;
padding: 15px 25px;
background: white;
`;

const Title = Styled("div")`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:5px;
  color:black;
  h1{
    font-size:25px;
    letter-spacing:1px;
    font-weight:bold;
  }
`;

const HeaderTools = Styled("div")`
    display:flex;
    align-items:center;
    gap:10px;
`;
