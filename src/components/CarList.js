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
      capacity: 24,
      img: "https://firebasestorage.googleapis.com/v0/b/vexere-image.appspot.com/o/cars%2Fxe5.jpeg?alt=media&token=9d86741c-24d3-4694-a068-1a0747879cf2&fbclid=IwAR0mQRy6yp9khPIrAW_CAgqjGsD5DGoBT-AybSDLstyxH3Pm2VGUWR5o3-0"
    },
    {
      id: 2,
      name: "Đức Tâm",
      capacity: 36,
      img: "https://firebasestorage.googleapis.com/v0/b/vexere-image.appspot.com/o/cars%2Fxe6.jpeg?alt=media&token=2a68ec0e-df3d-45d6-aa49-9b194d8a6d10&fbclid=IwAR3cK9jj6g6sODs3iFvrQB5UPbjzgzqsFhdC2nVyOYYJNhTgS5eHsm2e0Yo"
    },
    {
      id: 3,
      name: "Đức Tâm",
      capacity: 36,
      img: "https://firebasestorage.googleapis.com/v0/b/vexere-image.appspot.com/o/cars%2Fxe3.jpeg?alt=media&token=064dc863-1f56-4eb9-ac97-ca015be2ef25&fbclid=IwAR1iaunESF8lKGXGLVMYSIFtNFgc3UtfjbypnX5xN9fgoC4lkaxVDQ0KtdI"
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
                  <div className="carlist-img">
                    <img
                      className="card-img-top"
                      src={car.img}
                      alt={car.name}
                    />
                  </div>
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
