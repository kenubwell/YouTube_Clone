import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className= "login-contain">
          <div>
            <label className="login-label">Username:{" "}</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
          </div>
          <div>
            <label className="login-label">Password:{" "}</label>
              <input type="text" name="password" value={formData.password} onChange={handleInputChange}/>
            {isServerError ? (
              <p className="error">Login failed, incorrect credentials!</p>
            ) : null}
          </div>
        </div>
        <div className="login-button-contain">
          <div>
            <button className="login-button">Login</button>
          </div>
        </div>
        <div className="login-register">
          <Link to="/register" ><b>Click to Register</b></Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
