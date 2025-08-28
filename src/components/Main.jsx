import "./Main.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Main() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const basePrice = 85.5;
  const extraPrice = 5;

  const options = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk parçaları",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];

  const handleExtraChange = (item) => {
    if (extras.includes(item)) {
      setExtras(extras.filter((i) => i !== item));
    } else {
      if (extras.length < 10) {
        setExtras([...extras, item]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz!");
      }
    }
  };

  const totalPrice = (basePrice + extras.length * extraPrice) * quantity;

  return (
    <div className="product-container">
      <h2 className="product-title">Position Absolute Acı Pizza</h2>
      <p className="product-price">85.50₺</p>
      <p className="product-desc">
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>

      {/* Seçenekler */}
      <div className="options">
        <div className="option-group">
          <label className="option-label">Boyut Seç *</label>
          <div>
            <label>
              <input
                type="radio"
                name="size"
                value="Küçük"
                checked={size === "Küçük"}
                onChange={(e) => setSize(e.target.value)}
              />
              Küçük
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="size"
                value="Orta"
                checked={size === "Orta"}
                onChange={(e) => setSize(e.target.value)}
              />
              Orta
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="size"
                value="Büyük"
                checked={size === "Büyük"}
                y
                onChange={(e) => setSize(e.target.value)}
              />
              Büyük
            </label>
          </div>
        </div>

        <div className="option-group">
          <label className="option-label">Hamur Seç *</label>
          <select>
            <option>Hamur Kalınlığı</option>
            <option>İnce</option>
            <option>Orta</option>
            <option>Kalın</option>
          </select>
        </div>
      </div>
      <div className="additional-group">
        <h3 className="additional-label">Ek Malzemeler</h3>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>

      <div className="checkbox-grid">
        {options.map((option, index) => (
          <label key={index} className="checkbox-item">
            <input type="checkbox" onChange={() => handleExtraChange(option)} />
            {option}
          </label>
        ))}
      </div>

      <div className="section">
        <h3>Sipariş Notu</h3>
        <input
          type="text"
          placeholder="Siparişinize eklemek istediğiniz not var mı?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="note-input"
        />
      </div>

      <div className="quantity-box">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      <div className="order-summary">
        <h3>Sipariş Toplamı</h3>
        <p>Seçimler: {extras.length * extraPrice}₺</p>
        <p className="total">Toplam: {totalPrice.toFixed(2)}₺</p>
      </div>
      <Link to="/success">
        <button className="order-button">SİPARİŞ VER</button>
      </Link>
    </div>
  );
}
