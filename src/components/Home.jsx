import { Link } from "react-router-dom";
import "./Home.css";
import Categories from "./Categories";
import SpecialOffers from "./SpecialOffers";
import PopularMenus from "./PopularMenus";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main-class">
      <section className="home">
        <div className="home-content">
          <h2 className="home-title">fırsatı kaçırma</h2>
          <h1>
            KOD ACIKTIRIR <br /> PİZZA, DOYURUR
          </h1>
          <Link to="/secenekler">
            <button className="cta-btn">ACIKTIM</button>
          </Link>
        </div>
      </section>

      <Categories />
      <SpecialOffers />
      <Categories />
      <PopularMenus />
    </main>
  );
}
