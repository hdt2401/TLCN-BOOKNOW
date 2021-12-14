import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Search(props) {
    const { data } = props;
    console.log("search", data);
  return (
    <section className="car-line">
      <div className="container">
        <h1 className="heading-title">Danh sách tuyến xe</h1>
        {data.map((item, index) => (
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src="https://static.vexere.com/production/images/1589432483289.jpeg"
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Tuyến: {item.starting_point} - {item.destination}
                  </h5>
                  <p class="card-text">
                    Thời gian: {item.departture_time} - {item.arrival_time}
                  </p>
                  <Link to={`lines/${item.id}`}>
                    <button className="btn btn-primary">Xem Chi Tiết</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Search;
