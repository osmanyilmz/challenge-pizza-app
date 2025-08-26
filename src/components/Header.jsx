import "./Header.css";
import logo from "../../images/iteration-1-images/logo.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Teknolojik Yemekler Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" end>
                Anasayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/secenekler">Seçenekler</NavLink>
            </li>
            <li>
              <NavLink to="/siparis" className="highlight">
                Sipariş Oluştur
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
