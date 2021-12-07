import { FC } from "react";
import { Link } from "react-router-dom";
import {
  GameControllerOutline,
  AddOutline,
  MusicalNotesOutline,
  RocketOutline,
  HomeOutline,
  HeartCircleOutline,
} from "react-ionicons";
import "components/menu/menu.scss";
import { CSSProperties } from "react";

const Menu: FC = () => {
  const menus = [
    {
      icon: (
        <Link to="/">
          <HomeOutline color="#e32b79" />
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/music">
          <MusicalNotesOutline color="#e32b79" />
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/playground">
          <RocketOutline color="#e32b79" />
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/interests">
          <HeartCircleOutline color="#e32b79" />
        </Link>
      ),
    },
    {
      icon: (
        <Link to="/games">
          <GameControllerOutline color="#e32b79" />
        </Link>
      ),
    },
  ];

  const handleMenu = () => {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("active");
  };

  return (
    <>
      <div
        className="menu"
        style={{ "--length": menus.length } as CSSProperties}
      >
        <div className="toggle" onClick={handleMenu} role="button">
          <AddOutline color="#e32b79" />
        </div>

        {menus.map((item, index) => (
          <li
            key={index}
            style={{ "--i": index } as CSSProperties}
            role="button"
          >
            {item.icon}
          </li>
        ))}
      </div>
    </>
  );
};

export default Menu;
