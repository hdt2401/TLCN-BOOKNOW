import logo from '../img/logo-book-now.png'
import '../style.css'
function Header() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="/#"><img src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Nhà xe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Tuyến xe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Liên hệ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Về chúng tôi</a>
                            </li>
                            <ul className="navbar-nav navbar-register">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Đăng nhập</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Đăng ký</a>
                                </li>

                            </ul>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>


    );
}

export default Header;