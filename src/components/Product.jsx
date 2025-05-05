import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router';

function Product({product}) {
    const {id,image,name,price} = product;
    const navigate = useNavigate();

  return (
    <div className='product'>
        
        <img className='image' src={image}/>
        <div className='productData'>
            <h2 className='name'>{name}</h2>
            <p className='price'>{price} ₼</p>
        </div>
        <button className='detailButton' onClick={()=>navigate(`product-detail/${id}`)}>DETAYALARA GİT</button>
    </div>
  )
}

export default Product