import * as React from 'react';
import "./HeaderMenu.scss"

//This is the dropdown menu located in the header
export default function HeaderMenu() {
  
  return (
      <div className="menu-icon">
        <div className="menu-icon-line-top"></div>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line"></div>
      </div>
  );
}