import { useState } from "react";
import "./LoginForm.scss";
import CInput from "../CInput/CInput";
import CButton from "../CButton/CButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart } from "../../redux/user/userReducer";
import {
  selectCurrentUser,
  selectIsLoading,
  selectError,
} from "../../redux/user/userSelector";
import { createSelector } from "reselect";
import React from "react";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLock2Fill } from "react-icons/ri";
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
    navigate("/");
    try {
      dispatch(emailSignInStart(info));
    } catch (err) {
      navigate("/");
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
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="login-page">
        <span className="image">LOGO</span>
        <div className="loaderdiv">
          {isLoading && (
            <SpinnerIcon pulse style={{ fontSize: "3rem", color: "#01cda9" }} />
          )}
        </div>

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
                placeholder="your email"
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
                  placeholder="password"
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
              <a href="*" className="subtitle1">
                {" "}
                forgot password?
              </a>
              <CButton text="Sign In" className="button" />
              {error && <h1 className="error">{error.message}</h1>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
