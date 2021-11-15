import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import CarService from "../services/car.service";

function CarDetails(props) {
  //   const [car, setCar] = useState({});
  //   const [message, setMessage] = useState("");

  //   const getCar = (id) => {
  //     CarService.getCategory(id)
  //       .then((response) => {
  //         setCar(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  //   console.log(car);

  //   useEffect(() => {
  //     getCar(props.match.params.id);
  //     console.log(props.match.params.id);
  //   }, [props.match.params.id]);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <ReactStars
        count={5}
        value={4}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
}

export default CarDetails;
