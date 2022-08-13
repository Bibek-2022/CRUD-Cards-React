import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "./LoginAction";
const LoginForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { login } = useSelector((state) => state.login);
  console.log(login);
  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/product";
  useEffect(() => {
    login._id && navigate(origin);
  }, [navigate, login]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(loginAction(form));
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleOnSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleOnChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
