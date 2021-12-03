import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import CarService from "../services/car.service";
import FeedbackService from "../services/feedback.service";
import AuthService from "../services/auth.service";

function CarDetails(props) {
  const [car, setCar] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [feedback, setFeedback] = useState("");
  const [star, setStar] = useState(1);
  const [message, setMessage] = useState("");

  const getCar = (id) => {
    CarService.getCar(id)
      .then((response) => {
        setCar(response.data.data.car);
        console.log(response.data.data.car);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(car);

  const getFeedbacks = (id) => {
    FeedbackService.getFeedbacks(id)
      .then((response) => {
        setFeedbacks(response.data.data.feedback.feedbacks);
        console.log(response.data.data.feedback.feedbacks);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(feedbacks.feedbacks);

  useEffect(() => {
    getCar(props.match.params.id);
    getFeedbacks(props.match.params.id);
    console.log(props.match.params.id);
  }, [props.match.params.id]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
    console.log(user);
  }, []);
  const ratingChanged = (newRating) => {
    setStar(newRating);
    console.log(newRating);
  };
  const handleInputChange = (e) => {
    const content = e.target.value;
    setFeedback(content);
    console.log(feedback);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const data = {
      content: feedback,
      rating: star,
    };
    console.log(data);
    FeedbackService.create(id, data)
      .then((response) => {
        setMessage("ok");
        console.log(response.data);
        setStar(1);
        setFeedback("");
        getFeedbacks(props.match.params.id);
        console.log("Create ok");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container">
      <h1>{car.name}</h1>
      <div class="row">
        <div class="col-sm-6">
          <div className="card">
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
                  <ReactStars
                    count={5}
                    value={4}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="col-4">
                  <Link to={`/booking/${car.id}`} className="btn btn-primary">
                    Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h3>Description</h3>
          <div>
            <p>Route</p>
            <p>Capacity</p>
            <p>Start</p>
            <p>Destination</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h3>Rating List</h3>
          <div className="list-group">
            {feedbacks ? (
              feedbacks.map((feedback, index) => (
                <a
                  key={index}
                  href="/"
                  className="list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{feedback.feedbacks.username}</h5>
                    <small className="text-muted">3 days ago</small>
                  </div>
                  <ReactStars
                    count={5}
                    value={feedback.rating}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-1">{feedback.content}</p>
                </a>
              ))
            ) : (
              <div> Chưa có đánh giá.</div>
            )}
          </div>
        </div>
        <div className="col-sm-6">
          <h3>Rating</h3>
          {currentUser ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Rating</label>
                <ReactStars
                  count={5}
                  value={star}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="content"
                  value={feedback}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group row">
                <div className="col-sm">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div>Vui lòng đăng nhập để đánh giá.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
