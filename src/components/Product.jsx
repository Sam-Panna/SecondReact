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
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",

    },
    {
      image: image2,
      name: "Ram",
      address: "Ktm",
      description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
    },
    {
      image:image3,
      name: "Sita",
      address: "Ktm",
      description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
    },
    {
      image: image4,
      name: "Hari",
      address: "Ktm",
      description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
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