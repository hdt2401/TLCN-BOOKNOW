import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Login() {
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

  // console.log(watch());

  // console.log(errors.name)
  const loginStyle = {
    borderRadius : '20px',
    backgroundColor: '#FFF'
  }
  const backgroundStyle = {
    backgroundColor: '#EEE'
  }
  const btnStyle = {
    height: '40px'
  }

  return (
    <div className="container-fluid pt-5 vh-100" style={backgroundStyle}>
      <div className="row justify-content-sm-center pt-5 ">
        <div className="col-sm-6 col-lg-3 shadow round pb-3 " style={loginStyle}>
          <h1 className="text-center pt-3 text-secondary">Đăng nhập</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
            <div className="form-group">
              <label className="col-form-label">Tên đăng nhập:</label>
              <input
                type="text"
                className={`form-control ${errors.username && "invalid"}`}
                {...register("username", {
                  required: "Nhập tên đăng nhập của bạn",
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </div>
            {/* Password */}
            <div className="form-group">
              <label className="col-form-label">Mật khẩu:</label>
              <input
                type="password"
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "Nhập mật khẩu của bạn",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu có độ dài tối thiểu 8 ký tự",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>

            {/* Terms check */}
            <div className="form-group col justify-content-md-center" style={btnStyle}>
              <input
                type="submit"
                className="btn btn-primary my-3 w-100"
                value="Đăng nhập"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
