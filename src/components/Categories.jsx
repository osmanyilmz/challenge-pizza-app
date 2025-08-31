import "./Categories.css";
import { useNavigate } from "react-router-dom";
import ramenIcon from "../../images/iteration-2-images/icons/1.svg";
import pizzaIcon from "../../images/iteration-2-images/icons/2.svg";
import burgerIcon from "../../images/iteration-2-images/icons/3.svg";
import friesIcon from "../../images/iteration-2-images/icons/4.svg";
import fastfoodIcon from "../../images/iteration-2-images/icons/5.svg";
import drinkIcon from "../../images/iteration-2-images/icons/6.svg";

export default function Categories() {
  const navigate = useNavigate();

  const items = [
    { icon: ramenIcon, label: "YENİ! Kore" },
    { icon: pizzaIcon, label: "Pizza" },
    { icon: burgerIcon, label: "Burger" },
    { icon: friesIcon, label: "Kızartmalar" },
    { icon: fastfoodIcon, label: "Fast food" },
    { icon: drinkIcon, label: "Gazlı İçecek" },
  ];

  const handleClick = (category) => {
    navigate("/secenekler", { state: { category } });
  };

  return (
    <section className="categories">
      <div className="categories-container">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="category-item"
            onClick={() => handleClick(item.label)}
          >
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
