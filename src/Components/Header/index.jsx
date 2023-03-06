import React from "react";
import { NavLink } from "react-router-dom";
import sass from "../Header/index.module.scss";

function Header() {
  return (
    <div className={sass.header}>
      <div className={sass.left}>
        <img
          width="200"
          src="https://logos-world.net/wp-content/uploads/2020/10/Hugo-Boss-Logo.png"
          alt=""
        />
      </div>
      <div className={sass.center}>
        <ul>
          <NavLink to="/">
            {" "}
            <li>HOME</li>
          </NavLink>
          <NavLink to="/about">
            {" "}
            <li>ABOUT</li>
          </NavLink>
          <NavLink to="/users">
            {" "}
            <li>USERS</li>
          </NavLink>
        </ul>
      </div>
      <div className={sass.right}>
        <ul>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>
            <i class="fa-regular fa-heart"></i>
          </li>
          <li>
            <i class="fa-solid fa-bag-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
