import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router'


const ProductDetail = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const getProductDetail = async() => {
    //let url = ` https://my-json-server.typicode.com/product/${id}`
    let url = ` http://localhost:4000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();

    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[]);

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col className='product-info'>
          <div>{product?.title}</div>
          <div>{product?.price} 원</div>
          <div>{product?.choice == true ? "Conscious Choice" : ""}</div>
          <div>{product?.new == true ? "신제품" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              SIZE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className='w-100' variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
