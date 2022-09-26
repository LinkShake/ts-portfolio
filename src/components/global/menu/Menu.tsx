import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../style/Menu.css";
import { NavBar } from "./NavBar";

export const Menu: React.FC = () => {
  const [newRoute, setNewRoute] = useState<string | null>(
    window.location.pathname
  );
  const [menuState, setMenuState] = useState<boolean>(false);

  if (menuState)
    return (
      <div className="menu">
        <Link to="/home">
          <button
            onClick={() => setMenuState(false)}
            className={`${newRoute === "/home" && "btn--active"}`}
          >
            Home
          </button>
        </Link>
        <Link to="/skills">
          <button
            onClick={() => setMenuState(false)}
            className={`${newRoute === "/skills" && "btn--active"}`}
          >
            Skills
          </button>
        </Link>
        <Link to="/projects">
          <button
            onClick={() => setMenuState(false)}
            className={`${newRoute === "/projects" && "btn--active"}`}
          >
            Projects
          </button>
        </Link>
        <button onClick={() => setMenuState(false)} className="btn--close-menu">
          &times;
        </button>
      </div>
    );
  return <NavBar menuState={menuState} changeMenuState={setMenuState} />;
};
