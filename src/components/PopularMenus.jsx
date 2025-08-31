import "./PopularMenus.css";
import { useNavigate } from "react-router-dom";
import pizza1 from "../../images/iteration-2-images/pictures/food-1.png";
import pizza2 from "../../images/iteration-2-images/pictures/food-2.png";
import burger from "../../images/iteration-2-images/pictures/food-3.png";

export default function PopularMenus() {
  const navigate = useNavigate();

  const menus = [
    {
      img: pizza1,
      name: "Terminal Pizza",
      price: "60₺",
      rating: 4.9,
      count: 200,
    },
    {
      img: pizza2,
      name: "Position Absolute Acı Pizza",
      price: "85₺",
      rating: 4.9,
      count: 829,
    },
    {
      img: burger,
      name: "useEffect Tavuklu Burger",
      price: "75₺",
      rating: 4.9,
      count: 462,
    },
  ];

  const handleClick = (menuName) => {
    navigate("/secenekler", { state: { menuName } });
  };

  return (
    <section className="popular-menus">
      <h2>en çok paketlenen menüler</h2>
      <p>Acıktıran Kodlara Doyuran Lezzetler</p>
      <div className="menu-grid">
        {menus.map((menu, idx) => (
          <div
            key={idx}
            className="menu-card"
            onClick={() => handleClick(menu.name)}
          >
            <img src={menu.img} alt={menu.name} />
            <h3>{menu.name}</h3>
            <p className="rating">
              ⭐ {menu.rating} ({menu.count})
            </p>
            <span className="price">{menu.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
