import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CarService from "../services/car.service";

function CarList(props) {
  // const [cars, setCars] = useState([]);
  // useEffect(() => {
  //   retrieveCars();
  //   console.log(cars);
  // }, []);

  // const retrieveCars = () => {
  //   CarService.getCarList()
  //     .then((response) => {
  //       //setCategories(response.data);
  //       setCars(response.data.data.cars);
  //       console.log(response.data.data.cars);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const cars = [
    {
      id: 1,
      name: "Quang Minh",
      capacity: 24
    },
    {
      id: 2,
      name: "Đức Tâm",
      capacity: 36
    },
    {
      id: 3,
      name: "Ngọc Đức",
      capacity: 16
    },
    {
      id: 4,
      name: "Trí Hà",
      capacity: 24
    },
    {
      id: 5,
      name: "Chín Nghĩa",
      capacity: 36
    },
    {
      id: 6,
      name: "Thiện Quyên",
      capacity: 27
    },

  ]

  return (
    <div className="car-list">
      <div className="container">
        <h1 className="heading-title">Danh sách nhà xe</h1>
        <div className="page-body">
          <div className="row">
            {cars.map((car, index) => (
              <div key={index} className="col-lg-3 col-md-4 mb-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://static.vexere.com/production/images/1589432483289.jpeg"
                    alt={car.name}
                  />
                  <div className="card-body">
                    <div className="text-center">
                      <h2 className="car-name">{car.name}</h2>
                      <p1>Số lượng ghế: {car.capacity}</p1>
                    </div>
                  </div>
                  <div className="card-footer pb-4 border-top-0 bg-transparent">
                    <div className="text-center">
                      <Link to={`/booking/${car.id}`} className="btn btn-primary mr-2">
                        Đặt ngay
                      </Link>
                      <Link to={`/carlist/${car.id}`} className="btn btn-success">
                        Chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>        
        </div>
      </div>      
      {/* <div className="row">
        <div class="card-group">
          {cars.map((car, index) => (
            <div className="card" key={index}>
              <img
                className="card-img-top"
                src="https://static.vexere.com/production/images/1589432483289.jpeg"
                alt={car.name}
              />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-title">{car.station}</p>
                <div className="row">
                  <div className="col-8">
                    <Link to={`/carlist/${car.id}`} className="btn btn-success">
                      Details
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to={`/booking/${car.id}`} className="btn btn-primary">
                      Booking
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default CarList;
