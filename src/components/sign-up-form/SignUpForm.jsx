import "./SignUpForm.scss";
import CButton from "../CButton/CButton";
import CInput from "../CInput/CInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { signUpStart } from "../../redux/user/userReducer";
import { selectCurrentUser, selectError } from "../../redux/user/userSelector";
import { motion } from "framer-motion";
import { SyncLoader } from "react-spinners";
import { selectIsLoading } from "../../redux/user/userSelector";
const SignUp = () => {
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    occupation: "",
    confirmPassword: "",
  });
  const [passwordShown, setPasswordShown] = React.useState(false);

  const userSelector = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser
  );

  const errorSelector = createSelector([selectError], (error) => error);
  const error = useSelector((state) => errorSelector(state));
  const user = useSelector((state) => userSelector(state));
  const navigate = useNavigate();
  const isLoading = useSelector((state) => selectIsLoading(state));
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
    user && navigate("/");
  }, [user, navigate]);

  return (
    <div className="signup_con">
      <motion.div
        className="signup-page"
        initial={{ x: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="signup_container">
          <div className="signup_content">
            <h1 className="title">Getting Started</h1>
            <p className="subtitle">Tell us about you...</p>
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
              <CInput
                type="text"
                handleChange={handleChange}
                name="address"
                value={inputs.address}
                required={true}
                id="address"
                label="Address"
                placeholder="your address"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="occupation"
                value={inputs.occupation}
                required={true}
                id="occupation"
                label="occupation"
                placeholder="your occupation"
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
                  placeholder="should include numerals and alphabets"
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
              <div className="password">
                <CInput
                  type={passwordShown ? "text" : "password"}
                  handleChange={handleChange}
                  name="confirmPassword"
                  value={inputs.confirmPassword}
                  required={true}
                  id="confirmPassword"
                  label="Confirm password"
                  placeholder="*******"
                />
              </div>
              {isLoading ? (
                <div className="loader_con">
                  <SyncLoader color="#000" margin={3} size={12} />
                </div>
              ) : (
                <CButton
                  type="submit"
                  text="Create account"
                  className="button"
                />
              )}

              {error === "Firebase: Error (auth/email-already-in-use)." && (
                <h1 className="error">Email already in use!</h1>
              )}
              {error === "Firebase: Error (auth/network-request-failed)." && (
                <h1 className="error">
                  Check your internet connection and try agin!
                </h1>
              )}
              <Link to="/login" className="login_here">
                ← Go back to login
              </Link>
              <Link to="/" className="login_here">
                ← Back to Home
              </Link>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
