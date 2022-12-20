import { Container } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/chat" element={<Layout />} />
      </Routes>
    </Router>
  );
};

export default App;
