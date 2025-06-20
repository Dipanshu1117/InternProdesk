import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[errors, setErrors] = useState({});

    const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
      setErrors(validationErrors);
  };



  return (
    <div className='flex flex-col items-center justify-center h-143 border-1 bg-gray-700 w-full'>
       <form onSubmit={handleSubmit} className='flex flex-col border-amber-50 border-2 w-[300px] h-1/2 items-center rounded-2xl bg-purple-300' >
            <h1 className='font-bold text-center text-2xl'>Login</h1>
            <div className='flex flex-col w-[260px] mt-1 h-40 ' >
                <div className='flex flex-col w-[260px] mt-1 h-18'>
                    <label htmlFor="email" className=''>Email</label>
                    <input type="email"
                    placeholder='  username'
                    name='email' 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className='rounded-2xl bg-pink-200'
                    />
                    {errors.email && (
                    <p className="text-red-500 text-xs mt-1 border-1">{errors.email}</p>)}
               </div>
               <div className='flex flex-col w-[260px] h-15'>
                    <label htmlFor="password" className=''>Password</label>
                    <input type="Password"
                        placeholder='  Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='rounded-2xl bg-pink-200' 
                    />
                    {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>)}
               </div>
                 <div className='flex justify-end'><Link className='text-sm text-blue-600 '>Forget Password</Link></div>
            </div>
          <div className='flex flex-col items-center gap-2'>
            <button className='w-[200px] border-1 rounded-2xl mt-3 bg-pink-400'>Login</button>
            <Link to="/register" >Create Account</Link>
          </div>
        </form>
    </div>
  )
}

export default Login
