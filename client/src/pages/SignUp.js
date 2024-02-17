import React, { useState } from "react";
import "./Sign.css";
import { NavLink, useNavigate } from "react-router-dom";
import { signup } from "../utils/ApiUtils";

function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordAgain: "",
  });
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    if (userData.password === userData.passwordAgain) {
      let temp = userData;
      delete temp.passwordAgain;
      signup(temp)
        .then((res) => {
          // console.log(res.data);
          navigate("/signin");
          alert(res.data.msg);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("password did not match");
      setUserData({ ...userData, password: "", passwordAgain: "" });
    }
  };
  const handleChange = (e) => {
    // console.log(e.target.id);
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form onSubmit={handlesubmit}>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Atleast 3 chracters "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={userData.username}
                />
              </div>
              <div className="form_data">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@domain.com"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={userData.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={userData.phone}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 6 character"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={userData.password}
                />
              </div>
              <div className="form_data">
                <label htmlFor="passwordAgain">Password Again</label>
                <input
                  type="password"
                  name="asswordAgain"
                  id="passwordAgain"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={userData.passwordAgain}
                />
              </div>
              <button className="signin_btn">Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="../signin">Signin</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
