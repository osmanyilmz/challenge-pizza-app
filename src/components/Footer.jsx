import "./Footer.css";
import insta1 from "../../images/iteration-2-images/footer/insta/li-0.png";
import insta2 from "../../images/iteration-2-images/footer/insta/li-1.png";
import insta3 from "../../images/iteration-2-images/footer/insta/li-2.png";
import insta4 from "../../images/iteration-2-images/footer/insta/li-3.png";
import insta5 from "../../images/iteration-2-images/footer/insta/li-4.png";
import insta6 from "../../images/iteration-2-images/footer/insta/li-5.png";

import locationIcon from "../../images/iteration-2-images/footer/icons/icon-1.png";
import mailIcon from "../../images/iteration-2-images/footer/icons/icon-2.png";
import phoneIcon from "../../images/iteration-2-images/footer/icons/icon-3.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>İletişim</h3>
          <p>
            <img src={locationIcon} alt="Location icon" className="icon" />
            344, Londonderry Road, İstanbul / Türkiye
          </p>
          <p>
            <img src={mailIcon} alt="Mail icon" className="icon" />
            <a href="mailto:aciktim@teknolojikyemekler.com">
              aciktim@teknolojikyemekler.com
            </a>
          </p>
          <p>
            <img src={phoneIcon} alt="Phone icon" className="icon" />
            Telefon: <a href="tel:+902123456787">+90 212 345 67 87</a>
          </p>
        </div>

        {/* Menu Highlights */}
        <div className="footer-section menu-highlights">
          <h3>Sıcaklık Menüler</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Muffin Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Instagram Section */}
        <div className="footer-section instagram-gallery">
          <h3>Instagram</h3>
          <div className="insta-grid">
            <img src={insta1} alt="Yemek görseli 1" />
            <img src={insta2} alt="Yemek görseli 2" />
            <img src={insta3} alt="Yemek görseli 3" />
            <img src={insta4} alt="Yemek görseli 4" />
            <img src={insta5} alt="Yemek görseli 5" />
            <img src={insta6} alt="Yemek görseli 6" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <span className="copyright">© 2025 Teknolojik Yemekler</span>
        <i className="fab fa-twitter social-icon"></i>
      </div>
    </footer>
  );
}
