import React from 'react'
import Card from'./Card'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"


const Product = () => {

  const data =[
    {
      image: image1,
      name: "Sampanna ",
      address: "Itahari",
      description: "fghhhhhhhiooo oooooggggggggg gggggggggggg ggggggggggg ",

    },
    {
      image: image2,
      name: "Ram",
      address: "Ktm",
      description : "gggggjuvuu kkkkkkkk kkkkkkkuuuuu uuvvtdddddddddddddd",
    },
    {
      image:image3,
      name: "Sita",
      address: "Ktm",
      description : "gggggkkkkkk kkkkkkkkk kkvvtddddddd dddddddddddd dddddddd",
    },
    {
      image: image4,
      name: "Hari",
      address: "Ktm",
      description : "kkkkkkkkkkkkkk kkkkkkk kkddddddd dddddd ddddddddddd",
    },
  ]
  return (
    <div  className='w-full p-8'>
        <div className='grid grid-cols-3 gap-2'>
          {
            data.map((item)=>{
                return(
                    
                           <Card img={item.image} name={item.name} address={item.address} des = {item.description}/>
                    
                )
            })
            }
           
            </div>
            </div>
  )
}

export default Product