import "./SpecialOffers.css";
import pizzaImg from "../../images/iteration-2-images/cta/kart-1.png";
import burgerImg from "../../images/iteration-2-images/cta/kart-2.png";
import courierImg from "../../images/iteration-2-images/cta/kart-3.png";

export default function SpecialOffers() {
  return (
    <div className="offers-grid">
      <div className="offer-card red">
        <img src={pizzaImg} alt="pizza" className="offer-img" />
        <div className="offer-content">
          <h3 className="lezzetus">
            Özel <br />
            Lezzetus
          </h3>
          <p>Position Absolute Acı Burger</p>
          <button>Sipariş Ver</button>
        </div>
      </div>

      <div className="offer-card dark">
        <img src={burgerImg} alt="burger" className="offer-img" />
        <div className="offer-content">
          <h3 className="barlow">
            Hackathlon
            <br /> Burger Menü
          </h3>
          <button>Sipariş Ver</button>
        </div>
      </div>

      <div className="offer-card yellow">
        <img src={courierImg} alt="courier" className="offer-img" />
        <div className="offer-content">
          <h3 className="npm-class">
            Çooook hızlı
            <br /> npm gibi kurye
          </h3>
          <button>Sipariş Ver</button>
        </div>
      </div>
    </div>
  );
}
