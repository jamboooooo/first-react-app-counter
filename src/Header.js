import React from "react";
import logo from './assets/logo.svg'
import './style.css'

function Header() {
  return (
    <header>
      <img src={logo} />
      <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
      </ul>
    </header>
  );
}

export default Header
