import React from 'react'
import { Link } from 'react-router-dom'
import './login.css';


export const LoginPage = () => {
  return (
    <div className='login-page'>
        <form action="">
          <input type="text" placeholder='Pon un usuario' />
          <button type="submit">
            Login
          </button>
        </form>
        <Link to={"/"}>Iniciar sesion</Link>
    </div>
  )
}
