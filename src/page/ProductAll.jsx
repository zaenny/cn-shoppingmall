import React, { useEffect } from 'react'
    
const ProductAll = () => {
  
  const getProducts = async() => {
    let url = `http://localhost:4000/products`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(" data : " , data);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div></div>
  )
}

export default ProductAll
