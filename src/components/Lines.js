import React, { useState, useEffect } from "react";

import LineService from "../services/schedule.service";

function Lines(props) {
  const [lines, setLines] = useState([
    {
      id: 1,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 2,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 3,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 4,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 5,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 6,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 7,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 8,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 9,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
    {
      id: 10,
      starting_point: "Sài Gòn",
      destination: "Hà Nội",
      departture_time: "14:00",
      arrival_time: "9:00"
    },
  ]);
  useEffect(() => {
    retrieveLines();
    console.log(lines);
  }, []);

  const retrieveLines = () => {
    LineService.getLines()
      .then((response) => {
        //setCategories(response.data);
        setLines(response.data.data.lines);
        console.log(response.data.data.lines);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <section className="car-line">
      <div className="container">
        <h1 className="heading-title">Danh sách tuyến xe</h1>
        <div className="row">
          {lines.map((line, index) => (
            <div className="col-md-6">
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
                        Tuyến: {line.starting_point} - {line.destination}
                      </h5>
                      <p class="card-text">Nhà xe Thiện Chiến</p>
                      <p class="card-text">
                        Thời gian: {line.departture_time} - {line.arrival_time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Lines;
