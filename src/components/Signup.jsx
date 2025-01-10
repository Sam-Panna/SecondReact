import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Login from './Login';

const Signup = () => {

    const[ischecked, setIsChecked] = useState(false);

    const handleCheckbox = (event)=>{
        setIsChecked(event.target.checked);
    };
  return (
    <>
    <div className='h-[100vh] w-[full] bg-slate-500 flex items-center justify-center'>
        <div className='h-[85%] w-[60%] shadow-purple-950  shadow-2xl bg-purple-400 rounded-md flex items-center justify-center flex-col gap-6'>
            <p className='font-bold text-4xl text-slate-700'>Sign Up</p>
                      <div>< FaPenToSquare className='size-12 text-slate-800'/></div>
                      <div className='relative'>
                      <span className='absolute p-1 text-slate-700'><FaRegUser/></span>
                      <input type="text" placeholder='Full Name' className='px-6'  />
                      </div>

                      <div className='relative'>
                      <span className='absolute p-1 text-slate-700'><MdOutlineMail /></span>
                      <input type='email' placeholder='Email Address' className='px-6'/>
                      </div>

                      <div className='relative'>
                      <span className='absolute p-1 text-slate-700'><BiWorld/></span>
                      <input type='text' placeholder='Country' className='px-6'/>
                      </div>

                      <div className='relative'>
                      <span className='absolute p-1 text-slate-700'><FaPhoneAlt/></span>
                      <input type='number' placeholder='Phone' className='px-6'/>
                      </div>

                      <div className='relative'>
                      <span className='absolute p-1 text-slate-700'><RiLockPasswordFill/></span>
                      <input type='password' placeholder='Password' className='px-6'/>
                      </div>

                      <div className='flex flex-row gap-9 text-sm text-slate-900'>
          <label className='flex gap-1 items-center'>
            <input
              type="checkbox"
              checked={ischecked}
              onChange={handleCheckbox} className='size-3'
            />
            I accept all the terms and conditions.
          </label>
         
          </div>
          <button className='bg-slate-600 w-[14rem] rounded-lg text-white  hover:bg-purple-950'>Create Account</button>
        
          <footer className='w-[20rem]'>
            <hr />
            <p className='flex items-center justify-center gap-2 text-slate-900'>Already have an account?<Link to="/Login" className='hover:scale-125 transition-transform'>Sign In</Link></p>
          </footer>
        </div>
             
        </div>
       
    
    </>
  )
}

export default Signup