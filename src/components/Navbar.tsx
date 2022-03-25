import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./css/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  // scroll

  const [show, handelShow] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();
  const scrollFunction = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else handelShow(false);
  };
  
  const toggle = (e :MouseEvent) => {
      e.preventDefault();
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <div className={`nav ${show || toggleMenu ? "nav_black" : "nav_transparent"} ${toggleMenu && "show"}`} >
      <button className="nav_burger" onClick={(e) => toggle}>
        <MenuIcon />
      </button>
      <img
        onClick={() => navigate("/")}
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <nav className="nav_links">
        <a href="" className="nav_link">
          Accueil
        </a>
        <a href="" className="nav_link">
          Series
        </a>
        <a href="" className="nav_link">
          Movies
        </a>
        <a href="" className="nav_link">
          Most watched novelties
        </a>
        <a href="" className="nav_link">
          My list
        </a>
      </nav>
      <div className="nav_actions">
        <a href="#" className="nav_action">
          <SearchIcon />
        </a>
        <a href="#" className="nav_action">
          DIRECT
        </a>
        <a href="#" className="nav_action">
          <CardGiftcardIcon />
        </a>
        <a href="#" className="nav_action">
          <NotificationsIcon />
        </a>
        <a href="#" className="nav_action">
          <img
            onClick={() => navigate("/whoswatching")}
            className="nav_avatar"
            src="./images/avatar_yellow.png"
            alt="avatar"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
