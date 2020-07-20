//@ts-check
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useMutation } from "react-apollo";
import {
  useErrorHandler,
  ErrorMessageContainer,
} from "../components/helpers/errorHandler";
import { loginMutation } from "../server/mutations/users";

import "../components/helpers/login.scss";

export const renderSpinner = () => {
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

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { error, showError } = useErrorHandler(null);
  // @ts-ignore
  const history = useHistory();
  // useEffect(() => {
  //   // @ts-ignore
  //   if (getStoredUserAuth()) {
  //     history.push("/shows");
  //   }
  // });

  const [authMutation] = useMutation(loginMutation, {
    errorPolicy: "none",
    fetchPolicy: "no-cache",
  });
  const authHandler = async () => {
    
    try {
      setLoading(true);
      const { data } = await authMutation({
        variables: { email: userEmail, password: userPassword },
      });
      console.log(data?.login, "data");
      const { token } = data?.login;
      window.localStorage.setItem('token', token)
        // localStorage.setItem("token", token);
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

  return (
    <div style={{ marginTop: "150px" }}>
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
            onClick={onSubmit}
          >
            {loading ? renderSpinner() : "Sign In"}
          </button>
          <br />
          <br />
          {error && <ErrorMessageContainer errorMessage={error} />}
        </form>
      </div>
    </div>
  );
}

export default Login;
