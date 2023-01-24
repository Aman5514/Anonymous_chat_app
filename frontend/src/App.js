import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/chat" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
