import React, { useRef, useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? linksRef.current.getBoundingClientRect().height + "px"
      : "0px",
  };
  return (
    <nav className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>

      <div className="links-container" style={linkStyles}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
