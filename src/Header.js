import React from "react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import './style.css'

function Header() {
  return (
    <header>
        <Logo/>
        <HeaderMenu/>
    </header>
  );
}

export default Header
