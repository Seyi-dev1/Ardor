import React, {Suspense, lazy} from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/loader/Loader";
import AboutUs from "../../components/about/AboutUs";

const LoginForm = lazy(()=> import("../../components/LoginForm/LoginForm"))
const SignUp = lazy(()=> import("../../components/sign-up-form/SignUpForm"))
const PasswordReset = lazy(()=>import("../../components/password reset/PasswordReset"))
const Homepage = lazy(()=>import("../Homepage/Homepage"))
const Home = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account-recovery" element={<PasswordReset />} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
