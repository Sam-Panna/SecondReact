import React from 'react'



const Table = ({number, name, price, des, img}) => {
    return (
        
           
                
                <tr className='border-2 border-black'>
                    <td>{number}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{des}</td>
                    <td><img className='h-[10rem]' src={img} alt="" /></td>
                    <td className=' justify-center gap-4 items-center h-full'>
                        <div className="flex gap-4">
                        <button className='bg-red-500'>Delete</button>
                        <button className='bg-green-500'>Edit</button>

                        </div>
                    </td>
                </tr>
                
                
            
    )
}

export default Table