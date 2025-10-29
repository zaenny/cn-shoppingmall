import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {

    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];
    const navigate = useNavigate();
    const goToLogin = () => {
      navigate('/login');
    }

    return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser}  />
            <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img width={140} src='https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg'></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((item, index) =>(<li variant="outline-dark" key={index}>{item}</li>))}
        </ul>
        <div className='menu-search'>
            <FontAwesomeIcon icon={faSearch}/>
            <input type='text'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
