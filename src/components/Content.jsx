import React from 'react'
import Table from './Table'
import image1 from "../images/flower.jpg"
import image2 from "../images/Handbag.jpg"
import image3 from "../images/Pen.jpg"
import image4 from "../images/Sweater.jpg"

const Content = () => {

    const data = [
        {
            number: 1,
            name: "Flower",
            price: "500",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
            image: image1,


        },
        {
            number: 2,
            name: "Handbag",
            price: "2000",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
            image: image2,
        },
        {
            number: 3,
            name: "Pen",
            price: "500",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
            image: image3,
        },
        {
            number: 4,
            name: "Sweater",
            price: "1000",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure est vel beatae enim tempore quae impedit in dolor? Accusamus beatae hic reiciendis ipsam laboriosam, sequi libero minus veritatis cumque. Unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit commodi blanditiis excepturi quas qui. Excepturi mollitia recusandae ullam dolores beatae quo libero ratione maiores possimus eligendi cum, sit temporibus. Illo.",
            image: image4,
        },
    ]

    return (
        <div >
             <table className='border-2 border-black'>
                <thead className='border-2 border-black'>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </thead>
                
            {

                data.map((item,index) => {
                    return (
                        <Table number={index+1} name={item.name} price={item.price} des={item.description} img={item.image} />
                    )

                })
            }
            </table>
        </div>
    )
}

export default Content