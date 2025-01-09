import { useEffect, useState } from "react"
import Count from "./components/Count"
import Content from "./components/Content"
import Login from "./components/Login"
// import Card from "./components/Card"
import Product from "./components/Product"
import Table from "./components/Table"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
// import{Routes, Route} from "react-router-dom"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicePage from "./pages/ServicePage"
import ContactPage from "./pages/ContactPage"
import LoginPage from "./pages/LoginPage"
import SignPage from "./pages/SignPage"
import PageNotFound from "./pages/PageNotFound"

const App = () => {

  const Layout = () =>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      </>
    )
  }

  const routerPath = createBrowserRouter(
    [
      {
        path:"/",
        element: <Layout/>,
        children: [
          {
            path:"/",
            element: <HomePage/>,
          },
          {
            path:"/about",
            element:<AboutPage/>,
          },
          {
            path:"/service",
            element: <ServicePage/>,
          },
          {
            path: "/contact",
            element: <ContactPage/>,
          },
        ]
          },
          
            {
              path: "/login",
              element: <LoginPage/>,
            },
            {
              path: "/signup",
              element: <SignPage/>,
            },
            {
              path: "*",
              element: <PageNotFound/>,
            },
        ]
      
    
  )

  //UseState

  // const[click, setClick] = useState(true)

  // const handleClick = () => {
  //   setClick(!click);
  //   click ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white" 
  //   console.log(click);

  // }

  // const [text, setText] = useState('')

  // const handleChange = (event) => {
  //   setText(event.target.value);

  //   console.log(text);
  // }

  // const[seeMore, setSeeMore] = useState(false)

  // const handleClick = () => {
  //   setSeeMore(!seeMore);
    
  // }



  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count+1);

  // }
  // console.log(count);


  //Use Effect

  // const[text, setText] = useState('');
  // console.log(text, "text");

  // useEffect(() => {
  //   printLog();
  // },[text])

  // const printLog = () =>{
  //  console.log("hi", 57);
  // }

  // const handleChange = (event) => {
  //   setText(event.target.value);
  // }


  return (

    <>
    <RouterProvider router={routerPath}/>


    {/* Rounting */}

    {/* <Navbar/> 
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element = {<ServicePage/>} />
      <Route path="/contact" element = {<ContactPage/>} />
      <Route path="/signup" element = {<SignPage/>} />
      <Route path="/login" element = {<LoginPage/>} />
      <Route path="*" element = {<PageNotFound/>}/>

    </Routes> */}


      {/* <Count/> */}
      {/* <Model/> */}
     


      {/* <Product/> */}
      {/* <Content/> */}

      {/* <div className="w-full flex items-center gap-4 justify-center">
      
      <button onClick={handleClick} className="p-2 px-4 bg-blue-500 rounded-md">{click ? "ON" : "OFF"}</button>
    </div> */}
      {/* <form>

        <div className="h-[100vh] w-full flex items-center gap-4 justify-center flex-col ">
          <input type="text" onChange={handleChange}  className="border-2 border-black rounded-md" />
          <input type="text" className="border-2 border-black rounded-md" value={text} />


        </div>

      </form> */}

      
        {/* SEE MORE */}
        <div>
          {/* <textarea name="" id="" > <span onClick={handleClick}>{seeMore ? 'seeLess': 'seeMore'}</span></textarea> */}
          {/* <div>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus nisi hic error ea odit distinctio libero cupiditate enim atque cum quia, voluptatum expedita repellat laboriosam? Suscipit ea reprehenderit accusantium?".slice(0, 100) + "..."} <span onClick={handleClick}>{seeMore ? 'seeLess': 'seeMore'}</span></div> */}
        </div>




    </>

  )

}

export default App
