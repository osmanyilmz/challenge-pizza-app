import "./Header.css";
import logo from "../../images/iteration-1-images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Teknolojik Yemekler Logo" />
        </div>
      </div>
    </header>
  );
}
