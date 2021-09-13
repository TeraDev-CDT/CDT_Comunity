
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/NavBar';
import Trusted from './component/Trusted';
import Banner from './component/Banner';
import Footer from './component/Footer';
import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './Pages/User/Login';
import Home from './Pages/Home/Home'
import NewNavBar from './component/NewNavBar';
import Forum from './Pages/Forum/Forum';



function App() {
  return (
  <div className="App">
    
    <div ClassName ="Container>">
    
    
    
    <Router>
    <NewNavBar/>
    
      <main>
        <Switch>
        <Route path= '/' exact component ={Home}/>
        <Route path='/Home' component = {Home} />
        <Route path="/Login" component ={Login} />
        <Route path="/Forum" component ={Forum} />
          
        </Switch>
        </main>
      </Router>
      
      
     
    
     </div>
     </div>
      
      
  )
}

export default App;
