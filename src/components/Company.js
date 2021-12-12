import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../firebase";
import companyService from "../services/company.service";


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
          .required('Address is required')
    });   
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    const [file, setFile] = useState();
    //const [fileName, setFileName] = useState();

    const handleImageChange = (e) => {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      //setFileName(e.target.files[0].name);
    };


    function onSubmit(data) {
        const storageRef = ref(storage, 'companies/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(
                    async (downloadURL) => {
                        // const payload = data;
                        // payload.image = downloadURL;
                        data.image = downloadURL;
                        console.log(data);
                        companyService.create(data)
                        .then((response) => {
                          console.log(response.data);
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                        // const result = await createServiceApi(payload);
                        // if (result.code === 201) {
                        //     notifySuccess('Đã tạo dịch vụ mới');
                        //     history.push('/business-dashboard/services');
                        // } else {
                        //     notifyError(result.message);
                        // }
                    }
                );
            }
        );
      // display form data on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
      // return false;
    }
  return (
    <div className="co-opration-company">
      <div className="container">
        <h1 className="heading-title text-center">Đăng ký trở thành đối tác</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group">
                <label htmlFor="company-name">Tên nhà xe</label>
                <input id="company-name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
              <div class="form-group">
                <label htmlFor="company-phone">Số điện thoại nhà xe</label>
                <input id="company-phone" type="text" {...register('phone')} className={`form-control ${errors.phone ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.phone?.message}</div>
              </div>
              <div class="form-group">
                <label htmlFor="company-email">Email</label>
                <input id="company-email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div class="form-group">
                <label htmlFor="company-address">Địa chỉ nhà xe</label>
                <input id="company-address" type="text" {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.address?.message}</div>
              </div>
              <label htmlFor="company-image">Ảnh nhà xe</label>
              <input
                type="file"
                class="form-control-file mb-4"
                id="company-image"
                onChange={handleImageChange}
              />
              <button type="submit" className="btn btn-primary"><i class="fas fa-paper-plane"></i> Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
