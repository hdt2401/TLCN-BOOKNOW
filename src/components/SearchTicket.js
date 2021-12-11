import "../style.css";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import vi_VN from "./vi_VN";
import Select from "react-select";
function SearchTicket() {
  const options = [
    { value: "Bình Định", label: "Bình Định" },
    { value: "Bình Dương", label: "Bình Dương" },
    { value: "Tp Hồ Chí Minh", label: "Tp Hồ Chí Minh" },
    { value: "Hà Nội", label: "Hà Nội" },
  ];
  const styleDatePicker = {
    width: "100%",
    height: "38px",
    borderRadius: "4px",
    fontSize: "14px",
    textAlign: "center",
  };
  const today = Date.now();
  console.log(today);
  const [datePicker, setDatePicker] = useState(new Date());
  function handleDatePicker(datePicker) {
    setDatePicker(datePicker);
  }

  console.log(datePicker);
  return (
    <div className="search">
      <div className="container">
        <div className="search-title">
          <h1>Book now - Trang web đặt vé xe tiện lợi nhất Việt Nam</h1>
        </div>
        <form className="form-search">
          <div className="row">
            <div className="col-4">
              <div className="form-selection">
                <i className="fas fa-bus"></i>
                <h2>Xe giường nằm</h2>
              </div>
            </div>
            <div className="col-4">
              <div className="form-selection">
                <i className="fas fa-chair"></i>
                <h2>Xe ghế mềm</h2>
              </div>
            </div>
            <div className="col-4">
              <div className="form-selection">
                <i className="fas fa-archive"></i>
                <h2>Gửi hàng</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div id="from" className="form-option">
                <label htmlFor="">Điểm đi</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={options[0]}
                  name="location"
                  options={options}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-option">
                <label>Điểm đến</label>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={options[0]}
                  name="location"
                  options={options}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-option">
                <label>Thời gian</label>
                <DatePicker
                  containerStyle={{
                    width: "100%",
                  }}
                  style={styleDatePicker}
                  value={datePicker}
                  minDate={today}
                  locale={vi_VN}
                  format="DD-MMMM-YYYY"
                  animations={[transition()]}
                  onChange={handleDatePicker}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-option">
                <button type="submit" className="btn-search button-submit">
                  Tìm chuyến
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchTicket;
