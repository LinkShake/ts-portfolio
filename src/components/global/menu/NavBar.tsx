import React from "react";
import "../../../style/NavBar.css";

interface NavBarProps {
  menuState: boolean;
  changeMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar: React.FC<NavBarProps> = ({
  menuState,
  changeMenuState,
}) => {
  return (
    <nav className="menu--nav">
      <a className="btn--menu" onClick={() => changeMenuState(!menuState)}>
        <span className="btn--menu-el"></span>
        <span className="btn--menu-el"></span>
        <span className="btn--menu-el"></span>
      </a>
    </nav>
  );
};
