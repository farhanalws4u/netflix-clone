import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
      />
    </div>
  );
};

export default Nav;
