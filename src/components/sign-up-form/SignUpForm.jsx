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
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    occupation: "",
    confirmPassword: "",
    accountCharge: 0,
    bonus: 0,
    totalDeposit: 0,
    profitBalance: 0,
    investmentBalance: 0,
    plan: 2.3,
  });

  console.log(inputs);
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
    user && navigate("/dashboard/account");
    window.localStorage.setItem("user", JSON.stringify(user));
    window.scrollTo(0, 0);
  }, [user, navigate]);

  const options = [
    { label: "Tier 1($1,000-9,999, max 2.3% ROI)", value: 2.3 },
    { label: "Tier 2($10,000-49,999, max 3.3% ROI)", value: 3.3 },
    { label: "Tier 3($50,000-199,999, max 4.3% ROI)", value: 4.3 },
    { label: "Tier 4($200,000-1,000,000, max 6.5% ROI)", value: 6.5 },
  ];
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
                label="First Name"
                placeholder="first name"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="middleName"
                value={inputs.middleName}
                required={true}
                id="middleName"
                label="Middle Name"
                placeholder="middle name"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="lastName"
                value={inputs.lastName}
                required={true}
                id="lastName"
                label="Last Name"
                placeholder="last name"
              />
              <CInput
                type="email"
                handleChange={handleChange}
                name="email"
                value={inputs.email}
                required={true}
                id="email"
                label="Email Address"
                placeholder="your email"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="address"
                value={inputs.address}
                required={true}
                id="address"
                label="Home Address"
                placeholder="your address"
              />
              <CInput
                type="text"
                handleChange={handleChange}
                name="occupation"
                value={inputs.occupation}
                required={true}
                id="occupation"
                label="Occupation"
                placeholder="your occupation"
              />
              <Dropdown
                label="Choose a plan"
                options={options}
                value={inputs.plan}
                onChange={handleChange}
                name="plan"
                required={true}
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
                  label="Confirm Password"
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
                ← Already have an account?
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
const Dropdown = ({ label, value, options, onChange, name }) => {
  return (
    <div className="dropdown">
      <label className="label">{label}</label>
      <select
        value={value}
        name={name}
        onChange={onChange}
        className="select"
        required={true}
      >
        {options.map((option) => (
          <option
            style={{ border: "1px solid goldenrod", padding: "2px 10px" }}
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SignUp;
