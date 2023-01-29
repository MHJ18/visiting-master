import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div>
      <footer className="footer__main">
        <main className="footer__main-section">
          <picture className="footer__main-section-img">
            <source
              srcset="logo-g.png 3x ,nat-3.jpg 2x"
              media="(max-width:42em)"
            />
            <img src="logo-g.png" alt="" />
          </picture>
          {/* <div className="footer__main-section-img">
            <img src="logo-g.png" alt="" />
          </div> */}
          <div className="footer__main-info">
            <div className="footer__main-info-top">
              <a href="/" className="footer__main-info-p">
                Company
              </a>
              <a href="/" className="footer__main-info-p">
                Contact us
              </a>
              <a href="/" className="footer__main-info-p">
                careers
              </a>
              <a href="/" className="footer__main-info-p">
                privacy policy
              </a>
              <a href="/" className="footer__main-info-p">
                terms
              </a>
            </div>
            <div className="footer__main-contact">
              <p className="footer__main-contact-cc">
                Built by ME for just showcase of my designing skills and for the
                sake of practice and learn something new. You are 100% allowed
                to use this webpage for both personal and commercial uses,but
                not to claim it s your own design. credit to the orignal author,
                <span className="author"> M.Hassaan Javed</span>
              </p>
            </div>
          </div>
        </main>
      </footer>
    </div>
  );
};

export default Footer;
