import React from "react";

function NotFound(props) {
  return (
    <section className="contact-us">
      <div className="container">
        <h1 className="heading-title">Liên hệ với chúng tôi</h1>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters mb-5">
                <div class="col-md-7">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <div id="form-message-warning" class="mb-4"></div>
                    <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="label" for="name">Họ tên</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="label" for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="subject">Chủ đề</label>
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="#">Nội dung</label>
                            <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="submit" value="Gửi" class="btn btn-primary" />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div id="map" className="map-us">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4842318813585!2d106.76973361533442!3d10.850726660783625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1639147807576!5m2!1svi!2s"
                      allowfullscreen=""
                      width={100 + "%"}
                      height={100 + "%"}
                      loading="lazy"></iframe>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker"></span>
                    </div>
                    <div class="text">
                      <p><span>Địa chỉ:</span> Số 1 Đ. Võ Văn Ngân, Linh Chiểu, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone"></span>
                    </div>
                    <div class="text">
                      <p><span>Số điện thoại:</span> <a href="tel:0123456789">0123456789</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane"></span>
                    </div>
                    <div class="text">
                      <p><span>Email:</span> <a href="mailto:booknow@gmail.com"><span class="__cf_email__">booknow@gmail.com</span></a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-globe"></span>
                    </div>
                    <div class="text">
                      <p><span>Website</span> <a href="#">yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
