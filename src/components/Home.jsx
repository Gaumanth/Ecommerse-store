import React from 'react'
import "./Home.css"
import Product from './Product'
const Home = () => {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
  <img src="/assets/banner.jpg" className="card-img" alt="background" width="100%"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
    </div>
  
  
  </div>
</div>
<Product/>
    </div>
  )
}

export default Home