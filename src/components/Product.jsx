import React from 'react'
import Card from'./Card'
import image1 from "../images/Handbag.jpg"
import image2 from "../images/Pen.jpg"
import image3 from "../images/Sweater.jpg"
import image4 from "../images/flower.jpg"


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