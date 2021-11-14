import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm();

  const password = useRef();
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="register">
      <div className="form-register">
        <h1 className="form-title">Đăng ký</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Họ:</label>
              <input
                type="text"
                id="lastName"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("lastName", {
                  required: "Nhập họ của bạn",
                  pattern: {
                    value: /^([^0-9]*)$/,
                    message: "Không được chứa số",
                  },
                })}
                onKeyUp={() => {
                  trigger("lastName");
                }}
              />
              {errors.lastName && (
                <small className="text-danger">
                  {errors.lastName.message}
                </small>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="first-name">Tên:</label>
              <input
                type="text"
                id="first-name"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("firstName", {
                  required: "Nhập tên của bạn",
                  pattern: {
                    value: /^([^0-9]*)$/,
                    message: "Không được chứa số",
                  },
                })}
                onKeyUp={() => {
                  trigger("firstName");
                }}
              />
              {errors.firstName && (
                <small className="text-danger">
                  {errors.firstName.message}
                </small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Nhập email của bạn",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="text"
                id="phone"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Nhập số điện thoại của bạn",
                  pattern: {
                    value:
                      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Tên đăng nhập:</label>
            <input
              type="text"
              id="username"
              className={`form-control ${errors.username && "invalid"}`}
              {...register("username", {
                required: "Nhập tên đăng nhập của bạn",
                pattern: {
                  value: /^[a-zA-Z0-9_]{0,}[a-zA-Z]+[0-9]*$/,
                  message:
                    "Username phải chứa ít nhất 1 chữ cái, không chứa khoảng cách, ký tự đặc biệt ngoại trừ dấu gạch dưới (_)",
                },
              })}
              onKeyUp={() => {
                trigger("username");
              }}
            />
            {errors.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu:</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "Nhập mật khẩu của bạn",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu có độ dài tối thiểu 8 ký tự",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                    message:
                      "Mật khẩu phải chứa ít nhất 1 chữ cái in hoa, 1 chữ cái in thường, 1 chữ số, không chứa khoảng cách và ký tự đặc biệt.",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="btnPassword">
                  <span class="fas fa-eye"></span>
                </button>
              </div>
            </div>
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="re-password">Nhập lại mật khẩu:</label>
            <div className="input-group">
              <input
                type="password"
                id="re-password"
                className={`form-control ${errors.confirmPassword && "invalid"
                  }`}
                {...register("confirmPassword", {
                  required: "Nhập lại mật khẩu của bạn",
                  validate: (value) =>
                    value === password.current || "Mật khẩu không trùng khớp",
                })}
                onKeyUp={() => {
                  trigger("confirmPassword");
                }}
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="btnRePassword">
                  <span class="fas fa-eye"></span>
                </button>
              </div>
            </div>
            {errors.confirmPassword && (
              <small className="text-danger">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary btn-register"
              value="Đăng ký"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
