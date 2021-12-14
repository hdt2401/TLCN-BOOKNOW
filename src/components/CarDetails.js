import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import CarService from "../services/car.service";
import FeedbackService from "../services/feedback.service";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

function CarDetails(props) {
  const [car, setCar] = useState(
    {
      id: 1, name: "Quang Minh",
      capacity: 24, station: "BX Miền Đông",
      start: "Sài Gòn", end: "Hà Nội",
      time_start: "14:00",
      time_end: "5:00",
      images: [
        {
          src: "https://lh3.googleusercontent.com/proxy/_3yRLSjLYlRFznqGpKGpcfSgcbQ2zqG3V5W77Twud3ntZhW9a-xTifwrvqTjv73YF9HmZ7bGLwo86lweO7TMh15vXgZ_UFG7m-X7cjqvfuvGshmb6SFjprL3jUjnWH8hTuaacVSfDgA0ZlEdaI7JODcpCKQ5vo6VLbijsM1SikzL2GXHGw",
          alt: "a"
        },
        {
          src: "https://lh3.googleusercontent.com/proxy/UTawm2QjtON521c1CqQ9f7RnWu1jp-qCYUxKuQqWNqbTcROXXDDNVX5qxkcIJwngSmPSsuNwdj5jB3ibQ4PIT5AD1PgiaCBTJ7hQZmYs68bcijTCjG02dBUQAeRDo1HdIAQjFym9W12JzpexY-ok-nORt9II4cGPCWPpAxd_oDlbu2T2lLt_",
          alt: "b"
        },
        {
          src:"https://storage.googleapis.com/blogvxr-uploads/2018/10/xe-dung-tien1-VeXeRe-bSfyo2a-1000x600-752x440.jpg",
          alt: "c"
        }
      ]

    }
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
                <div id="demo" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                  </div>
                  <div class="carousel-inner">
                    {car.images.map((image, index) => (
                      <img
                        key={index}
                        className={index==1 ? "carousel-item active" : "carousel-item"}
                        src={image.src}
                        alt={image.alt} />
                    ))}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                  </button>
                </div>
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
