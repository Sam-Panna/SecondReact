import { useState } from "react"
import Content from "./components/Content"
import Login from "./components/Login"
// import Card from "./components/Card"
import Product from "./components/Product"
import Table from "./components/Table"

const App = () => {

  //UseState

  // const[click, setClick] = useState(true)

  // const handleClick = () => {
  //   setClick(!click);
  //   click ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white" 
  //   console.log(click);

  // }

  const [text, setText] = useState('')

  const handleChange = (event) => {
    setText(event.target.value);

    console.log(text);
  }



  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count+1);

  // }
  // console.log(count);

  return (

    <>


      {/* <Product/> */}
      {/* <Content/> */}

      {/* <div className="w-full flex items-center gap-4 justify-center">
      
      <button onClick={handleClick} className="p-2 px-4 bg-blue-500 rounded-md">{click ? "ON" : "OFF"}</button>
    </div> */}
      <form>

        <div className="h-[100vh] w-full flex items-center gap-4 justify-center flex-col ">
          <input type="text" onChange={handleChange}  className="border-2 border-black rounded-md" />
          <input type="text" className="border-2 border-black rounded-md" value={text} />


        </div>

      </form>





    </>

  )

}

export default App
