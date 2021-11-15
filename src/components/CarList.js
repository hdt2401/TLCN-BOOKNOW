import React, { useState, useEffect } from "react";
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
      <div class="card-group">
        {cars.map((car, index) => (
          <div class="card">
            <img
              class="card-img-top"
              src="https://static.vexere.com/production/images/1589432483289.jpeg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{car.name}</h5>
              <p class="card-text">{car.station}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">{car.capacity}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
