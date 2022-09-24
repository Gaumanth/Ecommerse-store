import React from 'react'
import './Navbar.css'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm" >
  <div className="container">
    <Link className="navbar-brand fw-bold fs-4" to="/">Ecom</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">PRODUCTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contact">CONTACT US</Link>
        </li>
       
      </ul>
      <div className="buttons">
        <Link href="" className="btn btn-outline-dark">
           <assignmentIndIcon/>
            Sign in</Link>
            <Link href="" className="btn btn-outline-dark ms-3">
           <assignmentIndIcon/>
            Sign Up</Link>
            <Link href="" className="btn btn-outline-dark ms-3">
            <ShoppingCartIcon/>
            Cart(0)</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar