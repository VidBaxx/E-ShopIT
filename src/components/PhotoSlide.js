import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Slides() {
    const [data, setProduct] = useState([])
    const getProduct = () => {
        axios.get('https://backend-production-33e4.up.railway.app/products')
        .then(res => {
            console.log("Getting from :::::" ,res.data.products)
            setProduct(res.data.products)
        }).catch(err =>{
            console.log(err)
        })
    }
    useEffect(() => {
        getProduct();
       }, [])

       const arr = data.map((data,index) => {
        return(
            <div className="product">
            <img src="/images/iphone-12.jpg" alt="phone" /> 
            <h3>Item: {data.name}</h3>
            <h3>Desc: {data.description}</h3>
            <h3>Price:{data.price}</h3>
            <h3>id:{data.id}</h3>
            </div>
            
        )
       })

    return ( 
        <div className="flashSlide">
            <div className="title">
                <h1>title goes here</h1>
            </div>
            <div className="ShowSlide">
                {arr}
            </div>
           
        </div>
     );
}

 