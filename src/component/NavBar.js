import React from 'react'
import  './NavBar.css'



export default function NavBar() {
    return (
        <div className="navBar">
            <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html"><h2>CDT <em>Comunity</em></h2></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Acerca de Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contactanos</a>
              </li>
            </ul>
          </div>
          <div class="functional-buttons">
            <ul>
              <li><a href="#">Iniciar Secion</a></li>
              <li><a href="#">Registrate</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        </div>
        
    )
}
