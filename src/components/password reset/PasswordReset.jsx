import React from "react";
import { Link } from "react-router-dom";
import CButton from "../CButton/CButton";
import CInput from "../CInput/CInput";
import "./passwordreset.scss";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { GrStatusGood } from "react-icons/gr";

const PasswordReset = () => {
  const [recoveryMail, setRecoveryMail] = React.useState({
    email: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);
  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = recoveryMail;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(errorMessage);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecoveryMail((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="password_page">
      <span className="password_title">PASSWORD RESET</span>
      <span className="password_subtitle">
        Let us send you a password reset mail to help you back on board!
      </span>
      <CInput
        type="email"
        handleChange={handleChange}
        name="email"
        value={recoveryMail.email}
        required={true}
        id="email"
        label="Email Address"
        placeholder="your email"
        small="small"
      />
      {errorMessage === "Firebase: Error (auth/missing-email)." && (
        <h1 className="error">Wrong Email, check Email and try again.</h1>
      )}
      {errorMessage === "Firebase: Error (auth/user-not-found)." && (
        <h1 className="error">
          User does not exist, check email and try again!
        </h1>
      )}
      {errorMessage === "Firebase: Error (auth/invalid-email)." && (
        <h1 className="error">Invalid Email!!!</h1>
      )}
      {successMessage && (
        <span className="success">
          Password reset link sent to {recoveryMail.email} successfully.{" "}
          <GrStatusGood className="success_icon" />
        </span>
      )}
      <CButton handleClick={handleSubmit} background="black" text="Submit" />

      <Link className="back" to="/login">
        ←Back to Login
      </Link>
    </div>
  );
};

export default PasswordReset;
