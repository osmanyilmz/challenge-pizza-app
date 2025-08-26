import "./Main.css";

export default function Header() {
  const options = [
    "Sucuk",
    "Mantar",
    "Zeytin",
    "Mozzarella",
    "Biber",
    "Soğan",
    "Mısır",
    "Ton Balığı",
    "Tavuk",
  ];

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
              <input type="radio" name="size" /> Küçük
            </label>
            <br />
            <label>
              <input type="radio" name="size" /> Orta
            </label>
            <br />
            <label>
              <input type="radio" name="size" /> Büyük
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
            <input type="checkbox" />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}
