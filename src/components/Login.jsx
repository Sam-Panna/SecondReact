import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [ischecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div className='h-[100vh] w-full bg-slate-500 flex items-center justify-center'>
        <div className='h-[64%] w-[64%] shadow-purple-950  shadow-2xl bg-purple-400 rounded-md flex items-center justify-center flex-col gap-6'>


          <p className='font-bold text-4xl text-slate-700'>Login Form</p>
          <div><FaUserCircle className='size-16 text-slate-800'/></div>
          <div className='relative'>
          <span className='absolute left-0 top-1 text-slate-700'><FaRegUser/></span>
          <input type="text" placeholder='UserName' className='px-6'  />
          </div>
          <div className='relative'>
          <span className='absolute left-0 top-1 text-slate-700'><RiLockPasswordFill/></span>
          <input type='password' placeholder='Password' className='px-6'/>
          </div>
          <div className='flex flex-row gap-9 text-sm text-slate-900'>
          <label className='flex items-center' >
            <input
              type="checkbox"
              checked={ischecked}
              onChange={handleCheckbox} className='size-3'
            />
            Remember Me
          </label>
          <p>Forgot Your Password?</p>
          </div>
          <button className='bg-slate-600 w-[6rem] rounded-lg text-white hover:bg-purple-950'>Login</button>
        
          <footer className='w-[20rem]'>
            <hr />
            <p className='flex items-center justify-center gap-2 text-slate-900'>Don't have an account? <Link to="/signup" className='hover:scale-125 transition-transform'>Sign Up</Link></p>
          </footer>
        </div>
      </div>


    </>


  )
}

export default Login