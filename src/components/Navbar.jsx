import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-2 border-black '>
        <nav  className='bg-green-300'>
          <div>
            <ul className='flex items-center flex-row justify-between ml-[50rem]'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/service'>services</Link></li>

                <div>
                <button className='bg-blue-500 m-4' ><Link to='/login'>Login</Link></button>
                <button className='bg-orange-500 m-4'><Link to='/signup'>Signup</Link></button>
                </div>
                
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar