import React from 'react'
import {NavLink,BrowserRouter as Router} from 'react-router-dom'



export default function Login() {
    return (
        <div className="Container">
            <form style= {{padding:"30px"}}>
                <label>
                    User:
                    <input className="user" type ="text" name="name" />
                </label>
                 <label>
                     Password:
                    <input type ="password" name="name" />
                </label>
                <input type ="submit" value="Log in" />
                </form>

             <NavLink to="/Forum">
            <h1 className="text-center" style = {{padding:"30px"}}> Login </h1>
            </NavLink>
        </div>
    )
  

}


