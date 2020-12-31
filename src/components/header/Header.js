import React from 'react';
import logo from '../../img/logoMonkey.svg'
import './Header.css'

export default function Header () {
  return (
    <header>
      <div className = "header">
        <div className = "logo">
        <img src={logo} alt="LOGO" />
        <p><span>Strong</span> together</p>
        </div>
      </div>
    </header>
  );
}