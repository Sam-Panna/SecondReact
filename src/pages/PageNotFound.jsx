import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-[100vh] w-full flex  justify-center items-center flex-col'>
    <div>Sorry. The page you are searching is not found</div>
    <button className='p-2 px-4 bg-green-400 rounded-md'><Link to='/'>Go to Home</Link></button>
    </div>
  )
}

export default PageNotFound