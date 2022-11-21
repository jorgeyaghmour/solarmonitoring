import React from 'react'
//import Dashboard from "./Dashboard";
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./loginform.css"

const Loginform = (props) => {
  // ENG: Initial state of user, there is no user
  // ESP: Estado inicial del usuario, no lo hay
  const noUser = {
    username: "",
    password: "",
  }

  const [popupStyle, showPopup] = useState("hide")
  const [user, setUser] = useState(noUser)
  const [redirect, setRedirect] = useState(false)

  /**
   * Updates information of the current user
   * @param {Event} event  
   */
  // const handleUserInput = event => {
  //   // `name` and `value` gotten from <input/> element props
  //   const {name, value} = event.target
  //   setUser({...user, [name]: value}) // 'name' needs to be in brackes. Otherwise VSCode thinks we're calling the FUNCTION called name
  // }
  
  const login = () => {
    setRedirect(true)
  }

  //animating the log in validation
  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
  } 

  return (redirect ? 
    <Navigate
      to={'/solar-monitor/dashboard'}
      replace
    />
    :
    //log in form 
    <div className="cover">
      <h1>Login</h1>
      <input 
        type="text"
        id='username'
        required
        value={user.username}
        onChange={handleUserInput}
        placeholder="username" 
        name='username'  
      />
      
      {/*ENG: type="password" means the characters inputed will be masked */}
      {/*ESP: type="password" hace que los caracteres sean escondidos en la pantalla*/}
      <input 
        type="password" 
        id='password'
        required
        value={user.password}
        onChange={handleUserInput}
        placeholder="password" 
        name='password'
      />

      {/*ENG: We have two possible functions,
          `login` for a successful login input
          `popup` for a failed login input
          
          Now we need to figure out how to set up the conditions for each
      */}
      {/*ESP: Tenemos dos funciones posibles
          'login' para éxito de login
          'popup' para error de login 
          
          Ahora hay que resolver como configurar las condiciones para cada una
      */}
      <button className="login-btn" onClick={login}> Login</button>
      {/* <button className="login-btn" onClick={login}> Login</button> */}

      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>

    </div>
  )
}

export default Loginform