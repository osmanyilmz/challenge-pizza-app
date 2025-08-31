import "./Order.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  const isFormValid = size && dough && quantity > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const payload = {
      boyut: size,
      hamur: dough,
      malzemeler: extras,
      özel: note,
      adet: quantity,
      toplam: totalPrice.toFixed(2),
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "https://reqres.in/api/users",
        payload,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", response.data);
      alert("Sipariş gönderildi! API response konsola yazıldı.");
      navigate("/success", { state: { ...payload, response: response.data } });
    } catch (err) {
      console.error(
        "Sipariş gönderilirken hata oluştu:",
        err.response?.data || err.message
      );
      alert("Bir hata oluştu, tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="product-container" onSubmit={handleSubmit}>
      <h2 className="product-title">Position Absolute Acı Pizza</h2>
      <p className="product-price">85.50₺</p>
      <p className="product-desc">
        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre...
      </p>

      <div className="options">
        <div className="option-group">
          <h3>Boyut Seç *</h3>
          <div>
            {["Küçük", "Orta", "Büyük"].map((s, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={(e) => setSize(e.target.value)}
                />
                <span>{s === "Küçük" ? "S" : s === "Orta" ? "M" : "L"}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="option-group-dough">
          <h3>Hamur Seç *</h3>
          <select value={dough} onChange={(e) => setDough(e.target.value)}>
            <option value="">--Hamur Kalınlığı Seç --</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
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
            <input
              type="checkbox"
              checked={extras.includes(option)}
              onChange={() => handleExtraChange(option)}
            />
            <span className="checkmark"></span>
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
        <div className="divider"></div>
      </div>

      <div className="actions-row">
        <div className="order-summary">
          <h3>Sipariş Toplamı</h3>
          <p>Seçimler: {(extras.length * extraPrice).toFixed(2)}₺</p>
          <p className="total">Toplam: {totalPrice.toFixed(2)}₺</p>

          <button
            type="submit"
            className="order-button desktop-order-btn"
            disabled={!isFormValid || loading}
          >
            {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
          </button>
        </div>

        <div className="quantity-button-row">
          <div className="quantity-box">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity(quantity + 1)}>
              +
            </button>
          </div>
          <button
            type="submit"
            className="order-button mobile-order-btn"
            disabled={!isFormValid || loading}
          >
            {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
          </button>
        </div>
      </div>
    </form>
  );
}
