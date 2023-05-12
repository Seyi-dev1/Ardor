import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import LoginForm from "../../components/LoginForm/LoginForm";
import Navbar from "../../components/Navbar/Navbar";
import SignUp from "../../components/sign-up-form/SignUpForm";
import Homepage from "../Homepage/Homepage";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
