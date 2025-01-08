import React from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";
import { useState } from 'react';

const Model = () => {
    const[open, setOpen] = useState(false);
     
    const handleClick = () =>{
        setOpen(true);
       
    }

    const handleCancel = () =>{
        setOpen(false);
    }

    


  return (
    <div className='border-2 border-black rounded-sm h-[100vh] flex items-center justify-center '>
        <button onClick={handleClick}  className='relative rounded-md bg-blue-400'>Open</button>
         {
         open && <div className='h-[20rem] w-[20rem] absolute border-2 border-black bg-white rounded-md flex flex-col justify-center items-center '>
            
           
            <div className='absolute top-0 right-0' onClick={handleCancel}><MdOutlineCancelPresentation className='size-7 rounded-md '/></div>
            <h2>Are You Sure?</h2>
            <div className='flex space-x-4'>
                <button className='bg-blue-400 rounded-md'>Yes</button>
                <button onClick={handleCancel}  className='bg-blue-400 rounded-md'>Cancel</button>
            </div>
            </div>
       
        }
    </div>
  )
}

export default Model