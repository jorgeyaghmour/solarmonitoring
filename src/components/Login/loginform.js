import React from 'react'
//import Dashboard from "./Dashboard";
import { useState } from 'react'
import "./loginform.css"

const Loginform = () => {

  //animating the log in validation
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
      showPopup("login-popup")
      setTimeout(() => showPopup("hide"),3000)
    } 

  /*  //log in validation

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{ username: "Admin", password: "testpassword" }];
    const handleSubmit = (e) => {
      e.preventDefault()
      const account = users.find((user) => user.username === username);
      if (account && account.password === password) {
          setauthenticated(true)
          localStorage.setItem("authenticated", true);
      }
    };    

      return (
//log in form 
    <div className="cover">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input
        type="text" placeholder="username" value={username} onChange={(e) => setusername(e.target.value)} />
        
        <input type="password" placeholder="password" onChange={(e) => setpassword(e.target.value)} />
        
        <div className="login-btn" onClick={popup}> Login</div>
       
        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
        </form>
    </div>
  )
}

export default Loginform

*/
  return (
//log in form 
<div className="cover">
<h1>Login</h1>
<input type="text" placeholder="username" />
<input type="password" placeholder="password" />

<div className="login-btn" onClick={popup}> Login</div>

<div className={popupStyle}>
  <h3>Login Failed</h3>
  <p>Username or password incorrect</p>
</div>

</div>
)
}

export default Loginform