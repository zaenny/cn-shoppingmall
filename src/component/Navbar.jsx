import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router';
import { Offcanvas } from 'react-bootstrap';

const Navbar = ({authenticate,setAuthenticate}) => {
    const [show, setShow] = useState(false);
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const goToLogin = () => {
      navigate('/login');
    }

    const search = (event) => {
      if(event.key === "Enter"){
        let keyword = event.target.value;
        
        navigate(`/?q=${keyword}`)
      }
    }

    return (
    <div>
      <div>
        {authenticate ? (
          <div className='login-button' onClick={() => {setAuthenticate(false)}}>
              <FontAwesomeIcon icon={faUser}  />
              <div>로그아웃</div>
          </div>
        ) : (
          <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}  />
            <div>로그인</div>
        </div>  
        )}  
      
      </div>
      <div className='nav-section'>
        <Link to="/">
          <img width={140} src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg'></img>
        </Link>
      </div>

      <div className='hamburger-menu' onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((item, index) =>(<li variant="outline-dark" key={index}>{item}</li>))}
        </ul>
        <div className='menu-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text' onKeyPress={(event)=>search(event)}/>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='sidebar-menu'>
            {menuList.map((item, index) => (
              <li key={index} onClick={handleClose}>{item}</li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Navbar
