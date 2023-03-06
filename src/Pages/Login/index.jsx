import React from 'react'
import { Link } from 'react-router-dom'
import sass from "../../Pages/Login/index.module.scss"
function Login() {
  return (
    <div className={sass.login}>
        <h2>MY ACCOUNT</h2>
        <div className={sass.account}>
            <h3>LOGIN</h3>
            <div className={sass.enter}>
                <p>Please enter your e-mail address and password.</p>
                <form action="">
                    <input type="text"  placeholder= "E-mail address"/>
                    <input type="text" placeholder='Password' />
                    <div className={sass.buttons}>
                      <Link to="/users2">  <button >LOGIN</button></Link>
                        <Link to="/users2">Forgot your password?</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
  )
}

export default Login