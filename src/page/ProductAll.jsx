import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router';
    
const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {

    let searchQuery = query.get('q') || "";
    let url = `https://my-json-server.typicode.com/products?q=${searchQuery}`;
    //let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(" url : " , url);
    console.log(" data : " , data);
    console.log(" searchQuery : " , searchQuery);

    setProductList(data);
    setQuery();
  }

  useEffect(()=>{
    getProducts();
  },[query]);

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
