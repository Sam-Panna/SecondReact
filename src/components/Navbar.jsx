import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 border-black '>
        <nav  className='bg-green-300'>
            <ul className='flex flex-row justify-between ml-[50rem]'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>services</li>
                
            </ul>

        </nav>
    </div>
  )
}

export default Navbar