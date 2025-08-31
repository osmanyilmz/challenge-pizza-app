import "./Success.css";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const {
    boyut: size = "-",
    hamur: dough = "-",
    malzemeler: extras = [],
    özel: note = "",
    adet: quantity = 1,
    toplam: totalPrice = 0,
  } = location.state || {};

  return (
    <div className="order-container">
      <h2 className="order-title">Lezzetin yolda</h2>
      <h1 className="order-subtitle"> SİPARİŞİNİZ ALINDI</h1>
      <div className="divider-success"></div>

      <div className="order-details">
        <p>
          <strong>Boyut:</strong> {size}
        </p>
        <p>
          <strong>Hamur:</strong> {dough}
        </p>
        <p>
          <strong>Ek Malzemeler:</strong>{" "}
          {extras.length > 0 ? extras.join(", ") : "Yok"}
        </p>
        {note && (
          <p>
            <strong>Not:</strong> {note}
          </p>
        )}
        <p>
          <strong>Adet:</strong> {quantity}
        </p>
      </div>

      <div className="order-summary-success">
        <h2>Sipariş Toplamı</h2>
        <p>
          <strong>Seçimler:</strong> {(extras.length * 5).toFixed(2)}₺
        </p>
        <p>
          <strong>Toplam:</strong> {totalPrice}₺
        </p>
      </div>
    </div>
  );
}
