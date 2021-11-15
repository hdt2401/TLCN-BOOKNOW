import React, { useState, useEffect } from "react";
import logo from "../img/logo-book-now.png";
import "../style.css";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
    console.log(user);
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/#">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/cars"} className="nav-link">
                  Nhà xe
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/routes"} className="nav-link">
                  Tuyến xe
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Liên hệ
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link">
                  Về chúng tôi
                </Link>
              </li>
              {currentUser ? (
                <ul className="navbar-nav navbar-register">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link" onClick={logOut}>
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav navbar-register">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Đăng nhập
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/signup"} className="nav-link">
                      Đăng ký
                    </Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
