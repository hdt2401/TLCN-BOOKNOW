import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import carService from "../services/car.service";
import { useParams } from "react-router-dom";

function TicketBooking() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);

  const getCar = (id) => {
    carService.getCar(id)
      .then((response) => {
        setSeats(response.data.data.car.carseats);
        console.log(response.data.data.car.carseats);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getCar(id);
  }, [id]);
  
  return (
    <section className="ticket-booking pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Số vé</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div class="text-success">
                  <h6 class="my-0">Product 1</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div class="text-success">
                  <h6 class="my-0">Product 2</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div class="text-success">
                  <h6 class="my-0">Product 3</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Tổng giá (VND)</span>
                <strong>1.000.000</strong>
              </li>
            </ul>
          </div>
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Thông tin thanh toán</h4>
            <form class="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6"></div>
              </div>
              <div class="row">
                <div class="plane">
                  <div class="cockpit">
                    <h1>Please select a seat</h1>
                  </div>
                  <div class="exit exit--front fuselage"></div>
                  <ol class="cabin fuselage">
                    {
                      seats && seats.map((seat, index) => (
                        <li class="row row--1">
                          <ol class="seats" type="A">
                            <li class="seat">
                              <input type="checkbox" id={seat.name} disabled={seat.status ? true : false}/>
                              <label for={seat.name}>{seat.name}</label>
                            </li>
                          </ol>
                        </li>
                      ))
                    }
                    {/* <li class="row row--1">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="1A" />
                          <label for="1A">1A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="1B" />
                          <label for="1B">1B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="1C" />
                          <label for="1C">1C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" disabled id="1D" />
                          <label for="1D">Occupied</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="1E" />
                          <label for="1E">1E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="1F" />
                          <label for="1F">1F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--2">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="2A" />
                          <label for="2A">2A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="2B" />
                          <label for="2B">2B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="2C" />
                          <label for="2C">2C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="2D" />
                          <label for="2D">2D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="2E" />
                          <label for="2E">2E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="2F" />
                          <label for="2F">2F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--3">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="3A" />
                          <label for="3A">3A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="3B" />
                          <label for="3B">3B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="3C" />
                          <label for="3C">3C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="3D" />
                          <label for="3D">3D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="3E" />
                          <label for="3E">3E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="3F" />
                          <label for="3F">3F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--4">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="4A" />
                          <label for="4A">4A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="4B" />
                          <label for="4B">4B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="4C" />
                          <label for="4C">4C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="4D" />
                          <label for="4D">4D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="4E" />
                          <label for="4E">4E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="4F" />
                          <label for="4F">4F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--5">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="5A" />
                          <label for="5A">5A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="5B" />
                          <label for="5B">5B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="5C" />
                          <label for="5C">5C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="5D" />
                          <label for="5D">5D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="5E" />
                          <label for="5E">5E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="5F" />
                          <label for="5F">5F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--6">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="6A" />
                          <label for="6A">6A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="6B" />
                          <label for="6B">6B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="6C" />
                          <label for="6C">6C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="6D" />
                          <label for="6D">6D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="6E" />
                          <label for="6E">6E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="6F" />
                          <label for="6F">6F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--7">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="7A" />
                          <label for="7A">7A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="7B" />
                          <label for="7B">7B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="7C" />
                          <label for="7C">7C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="7D" />
                          <label for="7D">7D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="7E" />
                          <label for="7E">7E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="7F" />
                          <label for="7F">7F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--8">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="8A" />
                          <label for="8A">8A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="8B" />
                          <label for="8B">8B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="8C" />
                          <label for="8C">8C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="8D" />
                          <label for="8D">8D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="8E" />
                          <label for="8E">8E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="8F" />
                          <label for="8F">8F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--9">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="9A" />
                          <label for="9A">9A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="9B" />
                          <label for="9B">9B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="9C" />
                          <label for="9C">9C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="9D" />
                          <label for="9D">9D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="9E" />
                          <label for="9E">9E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="9F" />
                          <label for="9F">9F</label>
                        </li>
                      </ol>
                    </li>
                    <li class="row row--10">
                      <ol class="seats" type="A">
                        <li class="seat">
                          <input type="checkbox" id="10A" />
                          <label for="10A">10A</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="10B" />
                          <label for="10B">10B</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="10C" />
                          <label for="10C">10C</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="10D" />
                          <label for="10D">10D</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="10E" />
                          <label for="10E">10E</label>
                        </li>
                        <li class="seat">
                          <input type="checkbox" id="10F" />
                          <label for="10F">10F</label>
                        </li>
                      </ol>
                    </li> */}
                  </ol>
                  <div class="exit exit--back fuselage"></div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="fullname">Họ tên</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullname"
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value=""
                    required
                  />
                  <div class="invalid-feedback">Vui lòng nhập họ tên</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="phone">Số điện thoại</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    placeholder="Ví dụ: 0982686868"
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Vui lòng nhập số điện thoại
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cmnd">Số CMND/CCCD người đi</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cmnd"
                    placeholder="Ví dụ: 215593851"
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Vui lòng nhập số chứng minh nhân dân/Căn cước công dân người
                    đi
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="email">Địa chỉ E-mail</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Ví dụ: nguyenvana@gmail.com"
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Vui lòng nhập địa chỉ E-mail
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address">Nơi đón khách</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    value=""
                    placeholder="Ngã 3 Cây ổi"
                    required
                  />
                  <div class="invalid-feedback">
                    Vui lòng nhập nơi bạn muốn lên xe
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2">Nơi trả khách</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address2"
                    value=""
                    placeholder="Bến xe Suối Tiên"
                    required
                  />
                  <div class="invalid-feedback">
                    Vui lòng nhập nơi bạn muốn xuống xe
                  </div>
                </div>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">
                Thanh toán
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketBooking;
