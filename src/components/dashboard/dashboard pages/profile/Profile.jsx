import React from "react";
import CInput from "../../../CInput/CInput";
import "./profile.scss";
import Copyright from "../../../copyright/Copyright";
import { FaCloudUploadAlt } from "react-icons/fa";

const Profile = () => {
  const user = window.localStorage.getItem("user");

  const { email, firstName, lastName, address } = JSON.parse(user);

  const [file, setFile] = React.useState("");
  const [inputs, setInputs] = React.useState({
    firstName: firstName,
    lastName: lastName,
    email: email,
    address: address,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="intro">
          <h3>Personal Information</h3>
          <p>
            Here's what we know about you. Please update it if there have been
            any recent changes.
          </p>
        </div>
        <div className="profile-pic">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="profile"
            className="pic"
          />
          <label htmlFor="file" className="file_upload">
            {file ? <span>edit image</span> : <span>upload image</span>}{" "}
            <FaCloudUploadAlt />
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            id="file"
            style={{ display: "none", visibility: "hidden" }}
          />
        </div>
        <div className="input-field">
          <form onSubmit={handleSubmit}>
            <div className="grid-inputs">
              <CInput
                type="text"
                name="firstName"
                value={inputs.firstName}
                required={true}
                id="fullName"
                label="First Name"
                handleChange={handleChange}
                className="input"
                disabled={true}
              />
              <CInput
                type="text"
                name="lastName"
                value={inputs.lastName}
                required={true}
                id="fullName"
                label="Last Name"
                handleChange={handleChange}
                className="input"
                disabled={true}
              />
              <CInput
                type="text"
                name="address"
                value={inputs.address}
                required={true}
                id="address"
                label="Location/Address"
                handleChange={handleChange}
                className="input"
              />
            </div>
            <div className="email">
              <CInput
                type="email"
                name="email"
                value={inputs.email}
                required={true}
                id="email"
                label="Email"
                handleChange={handleChange}
                disabled={true}
              />
              <div className="buttons">
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Profile;
