import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
    
const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  
  const getProducts = async() => {
    let url = `http://localhost:4000/products`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
    console.log(" data : " , data);
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col lg={3}>
              <ProductCard item={menu} key={index}/>
            </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
