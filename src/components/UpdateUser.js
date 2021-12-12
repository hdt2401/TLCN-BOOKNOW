import React, { useState } from "react";
import UserService from "../services/user.service";

function UpdateUser(props) {
  const initialCategoryState = {
    id: null,
    firstname: "",
    fullname: "",
    phone: "",
    address: "",
  };
  const [user, setUser] = useState(initialCategoryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const saveUser = () => {
    var data = {
      firstname: user.firstname,
      fullname: user.fullname,
      phone: user.phone,
      address: user.address,
    };

    UserService.update(data)
      .then((response) => {
        
        setSubmitted(true);
        alert("You have updated profile successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div className="submit-form">
            {submitted ? (
              <div>
                <h4>You have updated profile successfully!</h4>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label htmlFor="firstname">Firt Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    required
                    value={user.firstname}
                    onChange={handleInputChange}
                    name="firstname"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    required
                    value={user.fullname}
                    onChange={handleInputChange}
                    name="fullname"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    required
                    value={user.phone}
                    onChange={handleInputChange}
                    name="phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                    value={user.adress}
                    onChange={handleInputChange}
                    name="address"
                  />
                </div>

                <button onClick={saveUser} className="btn btn-success">
                  Create
                </button>
              </div>
            )}
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default UpdateUser;
