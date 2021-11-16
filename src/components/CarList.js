import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CarService from "../services/car.service";

function CarList(props) {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    retrieveCars();
    console.log(cars);
  }, []);

  const retrieveCars = () => {
    CarService.getCarList()
      .then((response) => {
        //setCategories(response.data);
        setCars(response.data.data.cars);
        console.log(response.data.data.cars);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <h2>Danh sách nhà xe</h2>
      <div className="row">
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
                    <Link to={"/booking"} className="btn btn-primary">
                      Booking
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarList;
