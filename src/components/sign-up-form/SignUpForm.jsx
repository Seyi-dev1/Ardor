import "./SignUpForm.scss";
import CButton from "../CButton/CButton";
import CInput from "../CInput/CInput";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { signUpStart } from "../../redux/user/userReducer";
import { selectCurrentUser, selectError } from "../../redux/user/userSelector";
import { motion } from "framer-motion";
const SignUp = () => {
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    occupation: "",
    balance: "",
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
            <h1 className="title">Create User</h1>
            <p className="subtitle"> Input the user details here...</p>
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
              <CInput
                type="text"
                handleChange={handleChange}
                name="balance"
                value={inputs.balance}
                required={true}
                id="balance"
                label="Account balance"
                placeholder="e.g $20,000"
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

              <CButton type="submit" text="Create account" className="button" />
              {error && <h1 className="error">{error.message}</h1>}
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
