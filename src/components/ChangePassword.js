import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import UserService from "../services/user.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const ChangePassword = (props) => {
  const initialCategoryState = {
    oldPassword: "",
    newPassword: "",
  };

  const form = useRef();
  const checkBtn = useRef();

  const [password, setPassword] = useState(initialCategoryState);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
    console.log(password);
  };

  const handlePassword = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      var data = {
        oldPassword: password.oldPassword,
        newPassword: password.newPassword,
      };
      UserService.changePassword(data).then(
        (response) => {
          setMessage(response.data.data);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <Form onSubmit={handlePassword} ref={form}>
        {!successful && (
          <div>
            <div className="form-group">
              <label htmlFor="oldPassword">Old Password</label>
              <Input
                type="password"
                className="form-control"
                name="oldPassword"
                value={password.oldPassword}
                onChange={handleInputChange}
                validations={[required, vpassword]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <Input
                type="password"
                className="form-control"
                name="newPassword"
                value={password.newPassword}
                onChange={handleInputChange}
                validations={[required, vpassword]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                validations={[required, vpassword]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block">
                Change Password
              </button>
            </div>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default ChangePassword;
