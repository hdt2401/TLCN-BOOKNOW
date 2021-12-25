import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import authService from "../../services/auth.service";


function NewPassword() {


  // form validation rules 
  const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'newPassword must be at least 6 characters')
        .required('newPassword is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const {confirmationCode} = useParams();
    console.log(confirmationCode);

    function onSubmit(data) {
        authService.reset(confirmationCode, data)
        .then((response) => {
            console.log(response.data);
            alert("Thành Công");
            reset();
        })
        .catch((e) => {
            console.log(e);
        });
        // UserService.NewPassword(data).then(
        //     (response) => {
        //     setMessage("");
        //     setSuccessful(false);
        //     alert("Update Password Sucessfully.");
        //     reset();
        //     },
        //     (error) => {
        //     const resMessage =
        //         (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||
        //         error.message ||
        //         error.toString();
        //     setMessage(resMessage);
        //     setSuccessful(false);
        //     }
        // );
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }
  return (
    <div className="co-opration-company">
      <div className="container">
        <div>
          <h1 className="heading-title text-center">Thay Đổi Mật Khẩu</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                  <label htmlfor="password">New Password</label>
                  <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div class="form-group">
                  <label htmlfor="confirmPassword">Confirm Password</label>
                  <input name="confirmPassword" type="password" {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                  <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                </div>
                <button type="submit" className="btn btn-primary"><i class="fas fa-paper-plane"></i>Tạo Mật Khẩu Mới</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;