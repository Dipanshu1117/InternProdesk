import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from './Register'
import Home from './Home'



const Navbar = () => {
  return (
    <div className='h-14 bg-blue-400 pt-4 flex gap-110 '>
      <div><Link to="/" className='font-bold text-4xl text-white px-4 pt-1'>Navbar</Link></div>
      <div className='w-150'>
      <ul className='flex justify-end text-white text-lg'>
        <li className='mr-100 hover:text-blue-950  '>
            <NavLink to='/'>Home</NavLink>
        </li>
        
        <li className='pr-5  hover:text-blue-950' >
            <NavLink to="/login">Login</NavLink>
        </li>
         <li className='pr-2  hover:text-blue-950'>
            <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
