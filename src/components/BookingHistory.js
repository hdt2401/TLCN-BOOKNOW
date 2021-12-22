import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import reservationService from "../services/reservation.service";

function BookingHistory(props) {
    const { id } = useParams();
    const [books, setBooks] = useState([]);
    const getHistory = (id) => {
        reservationService.getBooking(id)
          .then((response) => {
            setBooks(response.data.data.reservation);
          })
          .catch((e) => {
            console.log(e);
          });
    };
    useEffect(() => {
        getHistory(id);
      }, [id]);

    console.log(books);
    
    return (
        <section className="car-line">
      <div className="container">
        <h1 className="heading-title">Danh sách Lịch Sử Đặt Vé: </h1>
        {books.map((item, index) => (
          <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  src={item.cars.image}
                  class="card-img"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Nhà Xe: {item.cars.name}
                  </h5>
                  <p class="card-text">
                    Mã Vé: {item.receipt_number}
                  </p>
                  <p class="card-text">
                    Số lượng: {item.quantity}
                  </p>
                  <p class="card-text">
                    Tổng Tiền: {item.amount}
                  </p>
                  <p class="card-text">
                    Họ và Tên: {item.fullname}
                  </p>
                  <p class="card-text">
                    Số Điện Thoại: {item.phone}
                  </p>
                  <p class="card-text">
                    Ngày Đặt Vé: {item.createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
}

export default BookingHistory;