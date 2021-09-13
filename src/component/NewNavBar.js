import React from 'react'
import {NavLink} from 'react-router-dom'
import './NewBar.css'
import icon from '../Asset/icon.ico'

export default function NewNavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-mainbg">
          <NavLink className="navbar-brand navbar-logo "  to="/"> 
            <img className="img" src= {icon} /> Comunity
          </NavLink>
          <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fa fa-bars text-black"></i>
          </button>
          <div className="collapse navbar-collapse"
          id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="right"></div>
                <div className="left"></div>

              </div>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-tachometer-alt"> Home</i>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Login">
                  <i className="fas fa-tachometer-alt"> Login</i>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">
                  <i className="fas fa-tachometer-alt"> About Us</i>
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Home">
                  <i className="fas fa-tachometer-alt"> Services</i>
                </NavLink>
              </li>
              
            </ul> {/* Boton de Login*/}
            <div className="functional-buttons">
              <ul>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/Login">
                   Sing Up
                </NavLink>
              </li>
              
              </ul>
              </div>
          </div>

     
        </nav>
        </>
    )
}


