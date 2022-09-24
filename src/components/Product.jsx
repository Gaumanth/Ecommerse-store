import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Product.css"
// import {axios} from "axios"
const Product = () => {
    const [data,setData] = useState([]);
    const [filter,setFilter] = useState(data);
    const [loading,setLoading] = useState(false);

 
    let compoundMounted =true;
    useEffect(()=>{
      const getProducts = async ()=>{
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response)
        if(compoundMounted){
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false)
        }
        return ()=>{
            compoundMounted=false;
        }
      }
      getProducts();
    },[])

    const Loading =()=>{
        return(
            <>
            Loading...
            </>
        )
    }
    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=> x.category === cat)
        setFilter(updatedList);
    }
    const ShowProduct=()=>{
        return(
            <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Mens Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
            <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")} >Jwellery</button>
            <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("electronics")}>Electronics</button>
            
        </div>
        {filter.map((product)=>{
                return(
                    <>
            <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={product.id}>
                         <img className="card-img-top" src={product.image} alt={product.title} height="250px"/>
                    <div className="card-body">
                        <h5 className='card-title mb-0'>{product.title.substring(0,12)}...</h5>
                        <p className='card-text lead fw-bold'>${product.price}</p>
                        <a href='#' className='btn btn-outline-dark'>Add To Cart</a>
                    </div>
                  </div>
            </div>
                    </>
                )
             })}
            </>
        )
        
    }
  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                </div>
            </div>
            <div className="row justify-content-center">
               <ShowProduct/>
            </div>
        </div>
    </div>
  )
}

export default Product