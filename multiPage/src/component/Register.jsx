import React, { useState } from 'react'

const Login = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[newPassword,setNewPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[errors, setErrors] = useState({});

    const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }

    if(!name){
        errors.name = "Please Enter Your Name";
    }

    if (!newPassword) {
      errors.newPassword = "Password is required";
    } else if (newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    if(confirmPassword !== newPassword){
        errors.confirmPassword = "Password donot match";
    }
    return errors;
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
      setErrors(validationErrors);
      console.log("login successfully",{email,newPassword});
  };



  return (
    <div className='flex flex-col items-center justify-center h-157 bg-gray-700 w-full'>
       <form onSubmit={handleSubmit} className='flex flex-col border-2 border-white w-[300px] h-[400px] items-center rounded-2xl bg-purple-300 gap-2' >
            <h1 className='font-bold text-center text-2xl'>Register</h1>
            <div className='flex flex-col w-[260px] mt-1 h-fit gap-1' >
                <label htmlFor="name" className=''>Full Name</label>
                <input type="name"
                   placeholder='  FullName'
                   name='name' 
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                   className='rounded-2xl bg-pink-200'
                />
                 {errors.name && (
                <p className="text-red-500 text-xs py-0">{errors.name}</p>)}

                <label htmlFor="email" className=''>Email</label>
                <input type="email"
                   placeholder='  username'
                   name='email' 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   className='rounded-2xl bg-pink-200'
                />
                 {errors.email && (
                 <p className="text-red-500 text-xs">{errors.email}</p>)}

                <label htmlFor="password" className=''>newPassword</label>
                <input type="newPassword"
                    placeholder='  newPassword'
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                    className='rounded-2xl bg-pink-200' 
                />
                 {errors.newPassword && (
                <p className="text-red-500 text-xs">{errors.newPassword}</p>)}

                <label htmlFor="password" className=''>confirmPassword</label>
                <input type="Password"
                    placeholder='  confirmPassword'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    className='rounded-2xl bg-pink-200' 
                />
                 {errors.confirmPassword && (
                <p className="text-red-500 text-xs">{errors.confirmPassword}</p>)}
            </div>
                <div>
                    <button className='w-[200px] border-1 rounded-2xl mt-3 bg-pink-400'>Register</button>
                </div>
        </form>
    </div>
  )
}

export default Login
