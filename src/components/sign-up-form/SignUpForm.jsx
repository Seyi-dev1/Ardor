import "./SignUpForm.scss";
import CButton from "../CButton/CButton";
import CInput from "../CInput/CInput";
import { Link } from "react-router-dom";
import logo from "../../images/logo_black.png";
import PasswordStrengthBar from "react-password-strength-bar";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { signUpStart } from "../../redux/user/userReducer";
import {
  selectCurrentUser,
  selectIsLoading,
  selectError,
} from "../../redux/user/userSelector";
import { motion } from "framer-motion";
import Loader from "../loader/Loader";
const SignUp = () => {
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
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
  const isLoading = useSelector((state) => isLoadingSelector(state));

  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const user = useSelector((state) => userSelector(state));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpStart(inputs));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  function togglePassword() {
    setPasswordShown(!passwordShown);
  }

  React.useEffect(() => {
    user && navigate("/dashboard/Account/Deposit");
  }, [user, navigate]);

  return (
    <div className="container">
      <motion.div
        className="signup-page"
        initial={{ x: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img className="image" src={logo} alt="logo" />
        <div className="loaderdiv">{isLoading && <Loader />}</div>
        <div className="signup_container">
          <div className="signup_content">
            <h1 className="title">Get Started</h1>
            <p className="subtitle"> Let's start the Journey.</p>
            <form onSubmit={handleSubmit} className="form">
              <CInput
                type="text"
                handleChange={handleChange}
                name="firstName"
                value={inputs.firstName}
                required={true}
                id="firstName"
                label="firstname"
                placeholder="first name"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="lastName"
                value={inputs.lastName}
                required={true}
                id="lastName"
                label="Lastname"
                placeholder="last name"
              />
              <CInput
                type="email"
                handleChange={handleChange}
                name="email"
                value={inputs.email}
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
                  value={inputs.password}
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
              {inputs.password.length ? (
                <PasswordStrengthBar password={inputs.password} />
              ) : null}

              <CButton type="submit" text="Create account" className="button" />
              {error && <h1 className="error">{error.message}</h1>}
              <div className="linker_cont">
                <span className="sub">Already have an account?</span>
                <Link to="/" className="subtitle1">
                  {" "}
                  Sign In!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
