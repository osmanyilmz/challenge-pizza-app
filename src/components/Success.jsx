import "./Success.css";
import { useLocation } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const {
    size = "-",
    dough = "-",
    extras = [],
    note = "",
    quantity = 1,
    totalPrice = 0,
    extraPrice = 0,
  } = location.state || {};

  return (
    <div className="order-container">
      <h2 className="order-title">Lezzetin yolda</h2>
      <h1 className="order-subtitle"> SİPARİŞİNİZ ALINDI</h1>
      <div className="divider"></div>

      <div className="order-details">
        <h2>Position Absolute Acı Pizza</h2>
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
        <p>
          <strong>Seçimler:</strong> {(extras.length * extraPrice).toFixed(2)}₺
        </p>
        <p>
          <strong>Toplam:</strong> {totalPrice.toFixed(2)}₺
        </p>
      </div>
    </div>
  );
}
