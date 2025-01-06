import React, { useEffect, useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0);
    

    const handleAdd = (add) => {
        console.log(add);
        // if(add === 'add')
            setCount(count+1);
        // else
        //  setCount(count-1);

        
    }

    const handleSub = () =>{
        setCount(count-1);

    }
    

    useEffect(() =>{
        printLog();

    },[count])


    const printLog = () =>{
        console.log("the number has been changed");
    }
    return (
        <>

            <div className='h-[100vh] flex justify-center items-center'>
               
                {
                    count === 0 ? <></>  : <button onClick={handleSub}  className='bg-red-300 border-red-500'>-</button> 
                
                    // !(count === 0) && <button onClick={handleSub}  className='bg-red-300 border-red-500'>-</button>
                }
                    
                <h1>{count}</h1>
                <button onClick={()=> handleAdd("add")} className='bg-blue-300 border-blue-500'>+</button>

            </div>
        </>

    )
}

export default Count