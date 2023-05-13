import { useState } from "react";
import "./LoginForm.scss";
import CInput from "../CInput/CInput";
import CButton from "../CButton/CButton";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../redux/user/userReducer";
import {
  selectCurrentUser,
  selectIsLoading,
  selectError,
} from "../../redux/user/userSelector";
import { createSelector } from "reselect";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLock2Fill } from "react-icons/ri";
import ZELLE from "../../Images/Zelle.png";
import GOLDMAN from "../../Images/Goldman.png";
import FDIC from "../../Images/Member-FDIC.png";
import GEICO from "../../Images/geico.png";
import SyncLoader from "react-spinners/SyncLoader";
const LoginForm = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = React.useState(false);
  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );
  const isLoadingSelector = createSelector(
    [selectIsLoading],
    (isLoading) => isLoading
  );
  const user = useSelector((state) => userSelector(state));
  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const isLoading = useSelector((state) => isLoadingSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/login");
    try {
      dispatch(emailSignInStart(info));
    } catch (err) {
      navigate("/login");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  React.useEffect(() => {
    user && setTimeout(() => navigate("/dashboard/Account"), 2000);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.scrollTo(0, 0);
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="login-page">
        <div className="login_container">
          <div className="login_content">
            <h1 className="title">
              <RiLock2Fill /> Secure Online Banking Login
            </h1>
            <p className="subtitle">
              {" "}
              Please enter your Online User EmailID and Password.
            </p>
            <form onSubmit={handleSubmit} className="form">
              <CInput
                type="email"
                handleChange={handleChange}
                name="email"
                value={info.email}
                required={true}
                id="email"
                label="Email"
                placeholder="Email Address"
              />
              <div className="password">
                <CInput
                  type={passwordShown ? "text" : "password"}
                  handleChange={handleChange}
                  name="password"
                  value={info.password}
                  required={true}
                  id="password"
                  label="Password"
                  placeholder="Password"
                />
                {passwordShown ? (
                  <AiOutlineEyeInvisible
                    onClick={togglePassword}
                    className="password-toggle"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={togglePassword}
                    className="password-toggle"
                  />
                )}
              </div>
              <Link to="/account-recovery" className="subtitle1">
                forgot password? Reset Password here.
              </Link>
              {isLoading ? (
                <div className="loader_con">
                  <SyncLoader color="#000" margin={3} size={12} />
                </div>
              ) : (
                <CButton type="submit" text="Sign In" />
              )}
              {error === "Firebase: Error (auth/wrong-password)." && (
                <h1 className="error">wrong password!</h1>
              )}
              {error === "Firebase: Error (auth/user-not-found)." && (
                <h1 className="error">Wrong email or password</h1>
              )}
              <Link to="/signup" className="signup_here">
                create an account here →
              </Link>
              <Link to="/" className="signup_here">
                ← Back to Home
              </Link>
            </form>
            <div className="partners">
              <img src={FDIC} alt="partner" className="partner_logos" />
              <img src={ZELLE} alt="partner" className="partner_logos" />
              <img src={GOLDMAN} alt="partner" className="partner_logos" />
              <img src={GEICO} alt="partner" className="partner_logos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
