import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Company(props) {
  // form validation rules 
    const validationSchema = Yup.object().shape({
    name: Yup.string()
          .required('Name is required'),
    phone: Yup.string()
          .required('Phone is required'),
    email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
    address: Yup.string()
          .required('Address is required'),
    image: Yup.string()
          .required('Image is required'),
    });   
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const handleImageChange = (e) => {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };


    function onSubmit(data) {
      // display form data on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      return false;
    }
  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlfor="name">Name</label>
              <input name="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div class="form-group col-md-6">
              <label htmlfor="phone">phone</label>
              <input name="phone" type="text" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.phone?.message}</div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label htmlfor="email">Email</label>
              <input name="email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div class="form-group col-md-6">
              <label htmlfor="address">Address</label>
              <input name="address" type="text" {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} />
              <div className="invalid-feedback">{errors.address?.message}</div>
            </div>
          </div>
          <label for="image">Compay Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            name="image"
            onChange={handleImageChange}
          />
          <button type="submit" className="btn btn-primary mr-1">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Company;
