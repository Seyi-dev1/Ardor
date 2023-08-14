import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Loader from "../../components/loader/Loader";
import AboutUs from "../../components/about/AboutUs";
import { useLocation } from "react-router-dom";
import "./Home.scss";
import Leaderboard from "../../components/leaderboard/Leaderboard";

const LoginForm = lazy(() => import("../../components/LoginForm/LoginForm"));
const SignUp = lazy(() => import("../../components/sign-up-form/SignUpForm"));
const PasswordReset = lazy(() =>
  import("../../components/password reset/PasswordReset")
);
const Homepage = lazy(() => import("../Homepage/Homepage"));
const Home = () => {
  const location = useLocation();
  return (
    <div className="home">
      <Suspense fallback={<Loader />}>
        <div
          className="nav"
          style={{ backgroundColor: location.pathname !== "/" && "black" }}
        >
          <Navbar />
        </div>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account-recovery" element={<PasswordReset />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/customers" element={<Leaderboard />} />
        </Routes>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
