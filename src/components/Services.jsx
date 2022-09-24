import React from 'react'
import "./Services.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
const Services = () => {
  return (
    <div class="container services mb-3 ml-5">
        <div style={{marginLeft:"20px"}} className="pd-5">

<div class="row ser">
   <div className='col-sm-1'><LocalShippingOutlinedIcon/></div>
  <div class="col-sm-2">
  
     <h6>Free Worldwide Shipping</h6>
      <p>On all orders over  $100.00</p>
  </div>
  <div className='col-sm-1' ><PaidOutlinedIcon/></div>
  <div class="col-sm-2">
 
       <h6>Free Worldwide Shipping</h6>
        <p>On all orders over  $100.00</p>
  </div>
  <div className='col-sm-1' ><HeadsetOutlinedIcon/></div>
  <div class="col-sm-2">
  
       <h6>Free Worldwide Shipping</h6>
       <p>On all orders over  $100.00</p>
  </div>
  <div className='col-sm-1' ><ShieldOutlinedIcon/></div>
  <div class="col-sm-2">
 
  <h6>Free Worldwide Shipping</h6>
   <p>On all orders over  $100.00</p>
  </div>
</div>
        </div>
  
</div>
  )
}

export default Services