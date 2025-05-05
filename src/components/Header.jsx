import React from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import '../css/Header.css'
import Logo from '../assets/vlogo.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


function Header() {
    const {isMode,basketCount} = useSelector((state)=>state.products);

    console.log(basketCount)

  return (
    <div id='header'>
        <div id='brand'>
            <Link id='brandLink' to={'/'}>
                <img src={Logo} alt="Logo" id='logo'/>
                <h1 id='brandName'>VB SHOP</h1>
            </Link>
        </div>
        <div id='tools'>
            <input type="text" id='searcInput' placeholder='Ürün Ara'/>
            <div id='mode'>
                {isMode ?  <CiLight /> : <CiDark />}
            </div>
            <div id='basket'>
                <Link id='baskeLink' to={'/basket'}>
                    <SlBasket />
                    <sup id='count'>{basketCount!==0&&basketCount}</sup>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header