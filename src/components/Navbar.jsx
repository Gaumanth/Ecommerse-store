import React from 'react'
import './Navbar.css'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm" >
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href="#">Ecom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">NEW</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">WOMEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">MEN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ACCESSORIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SALE</a>
        </li>
       
      </ul>
      <div className="buttons">
        <a href="" className="btn btn-outline-dark">
           <AssignmentIndIcon/>
            Sign in</a>
            <a href="" className="btn btn-outline-dark ms-3">
            <ShoppingCartIcon/>
            Cart(0)</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar