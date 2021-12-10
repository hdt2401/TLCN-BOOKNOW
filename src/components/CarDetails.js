import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import CarService from "../services/car.service";
import FeedbackService from "../services/feedback.service";
import AuthService from "../services/auth.service";

function CarDetails(props) {
  const [car, setCar] = useState(
    { id: 1, name: "Quang Minh", capacity: 24, station: "BX Miền Đông", start:"Sài Gòn", end: "Hà Nội", time_start:"14:00", time_end:"5:00" }
  );
  const [feedbacks, setFeedbacks] = useState([
    {
      content: "em dep lam",
      rating: 5,
      feedbacks: { username: "Tèo" }
    },
    {
      content: "Xe đẹp lắm",
      rating: 5,
      feedbacks: {
        username: "Trần Hồng Thịnh"
      }
    },
    {
      content: "em dep lam",
      rating: 5,
      feedbacks: {
        username: "Nguyễn Tấn Đạt"
      }
    },
    {
      content: "em dep lam",
      rating: 4,
      feedbacks: {
        username: "Trần Hữu Ân"
      }
    },
    {
      content: "Pin sạc đầy để qua đêm sụt 8% dù đã tắt hết ứng dụng, mạng.1h đồng hồ chỉ mở đt lên xem giờ sụt 5%. Mình đang dùng note 10 chuyển sang dùng nên khá thất vọng về pin. Còn n thứ khác thì ok vì cái giá thành của nó khá cao nếu k ok thì chắc rất tệ",
      rating: 3,
      feedbacks: {
        username: "Nguyễn Thị Tý"
      }
    }
  ]);
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
    <div className="car-details">
      <div className="container">
        <h1 className="heading-title">Nhà xe {car.name}</h1>
        <div className="car-desc mb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://static.vexere.com/production/images/1589432483289.jpeg"
                  alt={car.name} />
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-auto">
                      <h2 className="card-title">Nhà xe {car.name}</h2>
                      <p className="mb-0">{car.station}</p>
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        activeColor="#fb6e2e"
                      />
                    </div>
                    <div className="col-auto">
                      <Link to={`/booking/${car.id}`} className="btn btn-primary">
                        Đặt ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2>Thông tin chi tiết về nhà xe</h2>
              <ul className="info-car-list p-0">
                <li className="info-car-item d-flex">
                  <p className="info-title">Tuyến:</p>
                  <div className="info-content">{car.start} - {car.end}</div>
                </li>
                <li className="info-car-item d-flex">
                  <p className="info-title">Số lượng ghế:</p>
                  <div className="info-content">{car.capacity} ghế</div>
                </li>
                <li className="info-car-item d-flex">
                  <p className="info-title">Khởi hành:</p>
                  <div className="info-content">{car.time_start}</div>
                </li>
                <li className="info-car-item d-flex">
                  <p className="info-title">Kết thúc:</p>
                  <div className="info-content">{car.time_end}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="car-feedbacks">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div class="card-header">Danh sách đánh giá</div>
                <div className="card-body">
                  <div className="list-group list-group-flush">
                    {feedbacks ? (
                      feedbacks.map((feedback, index) => (
                        <a key={index} href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                          <p className="feedback-username">{feedback.feedbacks.username}</p>
                          <ReactStars
                            count={5}
                            value={feedback.rating}
                            size={18}
                            activeColor="#fb6e2e"
                          />
                          <p className="feedback-content">{feedback.content}</p>
                          <small className="feedback-time text-muted">3 ngày trước</small>
                        </a>
                      ))
                    ) : (
                      <div> Chưa có đánh giá.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div class="card-header">Đánh giá</div>
                <div className="card-body">
                  {(
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="mb-0" for="feedbackContent">Mời bạn chia sẻ thêm một số cảm nhận ...</label>
                        <ReactStars
                          count={5}
                          value={star}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#fb6e2e"
                        />
                        <textarea
                          className="form-control"
                          id="feedbackContent"
                          rows="3"
                          name="content"
                          value={feedback}
                          onChange={handleInputChange}>
                        </textarea>
                      </div>
                      <button type="submit" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Gửi</button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default CarDetails;
