import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer__section">
      <div className="footer__content">
        <div className="footer__row">
          <div className="footer__col">
            <h2 className="footer__logo">
              <a href="#">
                <img
                  src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
                  alt="..."
                />
              </a>
            </h2>
            <p style={{ color: "#4c4c4c", fontSize: "15px" }}>
              We offer high-quality foods and the best delivery service, and the
              food market you can blindly trust
            </p>
            <div className="footer__social">
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="..."
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="..."
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="..."
                  width={20}
                  height={20}
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt="..."
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">About Us</h2>
            <ul className="footer__menu">
              <li className="footer__link">
                <a href="#">About Us</a>
              </li>
              <li className="footer__link">
                <a href="#">Contact us</a>
              </li>
              <li className="footer__link">
                <a href="#">About team</a>
              </li>
              <li className="footer__link">
                <a href="#">Customer Support</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">Our Information</h2>
            <ul className="footer__menu">
              <li className="footer__link">
                <a href="#">Privacy policy update</a>
              </li>
              <li className="footer__link">
                <a href="#">Terms & conditions</a>
              </li>
              <li className="footer__link">
                <a href="#">Return Policy</a>
              </li>
              <li className="footer__link">
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">Community</h2>
            <ul className="footer__menu">
              <li className="footer__link">
                <a href="#">Announcements</a>
              </li>
              <li className="footer__link">
                <a href="#">Answer center</a>
              </li>
              <li className="footer__link">
                <a href="#">Discussion boards</a>
              </li>
              <li className="footer__link">
                <a href="#">Giving works</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="footer__title">Subscribe Now</h2>
            <p style={{ color: "#4c4c4c", fontSize: "15px" }}>
              Subscribe your email for newsletter and featured news based on
              your interest
            </p>
            <div className="footer__subscibe">
              <div className="search-lable" htmlFor="">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Write your email looking ..."
                  style={{ width: "100%" }}
                />
                <i class="fas fa-paper-plane" style={{ color: "#02b291" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright__content">
          <p>© Copyright 2023 RedQ, Inc. All rights reserved</p>
          <div className="copyright-right">
            <a href="#">
              <img src="https://borobazar.vercel.app/assets/images/payment/mastercard.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://borobazar.vercel.app/assets/images/payment/visa.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://borobazar.vercel.app/assets/images/payment/paypal.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://borobazar.vercel.app/assets/images/payment/jcb.svg" alt="" />
            </a>
            <a href="#">
              <img src="https://borobazar.vercel.app/assets/images/payment/skrill.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
