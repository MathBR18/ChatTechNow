import React from "react";
import "./header.css";
import Image from "./Logo-technow.png"

const MainHeader = () => {
  return (
    <header>
     <img className="logo" src={Image}></img>
      <nav>
        <ul>
          <li><a href="#FAQ">Perguntas Frequentes</a></li>
          <li><a href="#ABOUT">Sobre Nós</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;

