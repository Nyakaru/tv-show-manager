//@ts-check
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useMutation } from "react-apollo";
import {
  useErrorHandler,
  ErrorMessageContainer,
} from "../components/helpers/errorHandler";
import { signUpMutation } from "../server/mutations/users";

import "../components/helpers/login.scss";

function SignUp() {
  const [userName, setuserName] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { error, showError } = useErrorHandler(null);
  // @ts-ignore
  const history = useHistory();

  const [authMutation] = useMutation(signUpMutation, {
    errorPolicy: "none",
    fetchPolicy: "no-cache",
  });
  const authHandler = async () => {
    
    try {
      setLoading(true);
      const { data } = await authMutation({
  variables: { name: userName, email: userEmail, password: userPassword },
      });
      const { token } = data?.signup;
      window.localStorage.setItem('token', token)
        history.push("/shows");

    } catch (err) {
      console.log(err, "err");
      setLoading(false);
      // throw an error message, user does not exist, or wrong password
      showError("Authentication failed!");
    }
  };

  /**
   * @param {{ preventDefault: () => void; }} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    authHandler();
  };

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
    <div style={{ marginTop: "150px" }}>
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
            onClick={onSubmit}
          >
            {loading ? renderSpinner() : "Sign Up"}
          </button>
          <br />
          <br />
          {error && <ErrorMessageContainer errorMessage={error} />}
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
