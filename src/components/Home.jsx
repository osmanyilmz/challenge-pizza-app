import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR
        </h1>
        <Link to="/secenekler">
          <button className="cta-btn">ACIKTIM</button>
        </Link>
      </div>
    </section>
  );
}
