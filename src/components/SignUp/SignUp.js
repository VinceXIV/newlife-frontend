import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [dob, setDOB] = useState("");
  // const [bloodGroup, setBloodGroup] = useState("");
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState("");
  // const errors = [
  //   'Password does not match',
  //   'Password does not match',
  //   'Password does not match',
  //   'Password does not match',
  // ];

  function handleSignupSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch(`http://localhost:3000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: firstName,
        // last_name: lastName,
        // phone,
        // dob,
        // blood_group: bloodGroup,
        // height,
        // weight,
        email,
        password,
        password_confirmation: cPassword,
      }),
    });
  }

  return (
    <div className="signup-main-container">
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <h1>Signup</h1>
          <p>Register as a patient</p>
          <input
            type='text'
            placeholder='User Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <input
            type='text'
            placeholder='Last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='tel'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            type='date'
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
          <input
            type='text'
            placeholder='Blood group eg O-'
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <input
            type='text'
            placeholder='Height'
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type='text'
            placeholder='Weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          /> */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
        <br />
        {errors ? (
          <div className="signup-error-display">
            {errors.map((error) => {
              console.log(error);
              return (
                <li key={error} style={{ color: "red" }}>
                  {error}
                </li>
              );
            })}
          </div>
        ) : (
          <div className="already">
            <hr />
            <p>
              Already have an account? &nbsp;
              <Link to={`/login`}>
                <button type="button">Log In</button>
              </Link>
            </p>
          </div>
        )}
      </div>
      <div className="signup-img"></div>
    </div>
  );
}

export default SignUp;
