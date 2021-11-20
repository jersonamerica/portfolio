import { FC } from "react";
import { Link } from "react-router-dom";
import {
  GameControllerOutline,
  AddOutline,
  MusicalNotesOutline,
  RocketOutline,
  ConstructOutline,
  HomeOutline,
} from "react-ionicons";
import "components/menu/index.scss";
import { CSSProperties } from "react";

type Props = {
  skillsOnClick: any;
};

const Menu: FC<Props> = ({ skillsOnClick }) => {
  //   console.log("refs: ", refs);
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
        <Link to="/projects">
          <RocketOutline color="#e32b79" />
        </Link>
      ),
    },
    {
      icon: <ConstructOutline color="#e32b79" />,
    },
    {
      icon: (
        <Link to="/games">
          <GameControllerOutline color="#e32b79" />
        </Link>
      ),
      onClick: skillsOnClick,
    },
  ];
  function handleMenu() {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("active");
  }

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
            onClick={item?.onClick}
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