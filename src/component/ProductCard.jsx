import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
      <img width="300px" src={item?.img}/>
      <div>{item?.choice == true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price+"원"}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
