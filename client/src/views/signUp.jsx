//@ts-check
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

import "../components/helpers/login.scss";

function SignUp() {
  const [userName, setuserName] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const renderSpinner = () => {
    return (
      <Spinner
        className="login-spinner"
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  };

  return (
    <div>
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="string"
              name="name"
              value={userName}
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={userEmail}
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userPassword}
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button
              type="button"
              disabled={loading}
              className="btn btn-block submit-button"
            >
              {loading ? renderSpinner() : "Sign Up"}
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
