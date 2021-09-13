import React from 'react'
import  './NavBar.css'
import {Link, NavLink, BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'






export default function NavBar() {
    return (
      
        
      <><div className="navBar">
        

        

          <nav className="navbar navbar-expand-lg">
            <div class="container">
              <Router>
                <NavLink className="navbar-brand" Redirect to="/"><h2>CDT  <em>Comunity</em> </h2> </NavLink>
              </Router>

              <div class="collapse navbar-collapse id= navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    
                      <Router>
                    <Link className="nav-link" to="/Homes">Home</Link>

                    </Router>
                    
                  </li>
                  <li className="nav-item">
                    <Router>
                    <Link class="nav-link" to="/">Services</Link>
                    </Router>
                  </li>
                  <li className="nav-item">
                    <Router>
                    <Link className="nav-link" to="/">About Us</Link>
                    </Router>
                  </li>
                  <Router>
                  <li className="nav-item">
                    
                    <NavLink className="nav-link" to ="/Homes">Login</NavLink>
                    
                  </li>
                  </Router>

                </ul>
              </div>
              <div className="functional-buttons">
                <ul>
                  <div>
                  <Router>
                    
                    <li><Link to="/Login">Iniciar Secion </Link>  </li>
                    
                  </Router>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
          

       


      </div>
      </>
        
        
    )
}
