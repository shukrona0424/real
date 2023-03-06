import React from 'react'
import { Link } from 'react-router-dom'
import sass from "../Register/index.module.scss"
import { useContext } from 'react'
import { context } from '../Context'
import { useNavigate } from 'react-router-dom'
function Register() {
    const {login, getData, getUser} = useContext(context)
    const nav = useNavigate()
    const submit =(a)=>{
      a.preventDefault()
      const fd = new FormData(a.target)
      getData([...login, {
        auth: true,
        name: fd.get('name'),
        email: fd.get('email')
      }])

      getUser({
        auth: true,
        name: fd.get('name'),
        email: fd.get('email')
      })

      nav('/users')
    }
  return (
    <div className={sass.register}>
    <h2>REGISTRATION FORM</h2>
    <div className={sass.account}>
        <h3>REGISTER</h3>
        <div className={sass.enter}>
            <p>Please enter your e-mail address and password.</p>
            <form onSubmit={submit} action="">
                <input name='name' type="text" placeholder='Name' />
                <input type="text" placeholder='UserName' />
                <input name='email' type="text"  placeholder= "E-mail address"/>
                 <div className={sass.buttons}>
                <button >SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register