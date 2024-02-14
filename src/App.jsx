import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Cart from './components/Cart'
import Login from './pages/Login'
import ProductDetail from './pages/productdetail'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Protected } from './components/Protected'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Protected><Home></Home></Protected>
  },
  {
    path: "signup",
    element: <Signup></Signup>
  },
  {
    path: "/product-detail/:pid",
    element: <Protected><ProductDetail></ProductDetail></Protected>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
