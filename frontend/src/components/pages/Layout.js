import React from "react";
import { Button, Grid, GridItem, Input } from "@chakra-ui/react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ContactList from "../common/ContactList";
import Chat from "./Chat";

const Layout = () => {
  return (
    <Grid
      templateAreas={`
      "header header"
      "nav main"
      "footer footer"`}
      gridTemplateRows={"70px 1fr 60px"}
      gridTemplateColumns={"320px 1fr"}
      h="100vh"
      color="blackAlpha.700"
      bg="gray.200"
      fontWeight="bold"
      gap={2}
    >
      <GridItem area={"header"}>
        <Header isLogined={true} />
      </GridItem>
      <GridItem borderRadius={12} p={2} bg="white" ml={2} area={"nav"}>
        <ContactList />
      </GridItem>
      <GridItem mr={2} borderRadius={12} p={2} bg="white" area={"main"}>
        <Chat />
      </GridItem>
      <GridItem bg="white" px="25px" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
