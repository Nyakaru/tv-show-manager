//@ts-check
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

import "../components/helpers/login.scss";

function Login() {
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
          <h3>Sign In</h3>

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

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="button"
            disabled={loading}
            className="btn btn-block submit-button"
          >
            {loading ? renderSpinner() : "Sign In"}
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Login;
