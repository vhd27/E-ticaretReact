import React from 'react'
import '../css/BasketProduct.css'
import { useDispatch } from 'react-redux'
import { addCount } from '../features/products/productsSlicer';

function BasketProduct({product,count}) {
    const dispatch = useDispatch();
    
  return (
    <div className='basketProduct'>
        <img className='backetProductImage' src={product.image} />
        <h6 className='backetProductName'>{product.name}</h6>
        <h5 className='backetProductCount'>{count}x</h5>
        <h5 className='backetProductPrice'>{product.price}₼</h5>
        <button className='backetProductDelete' onClick={()=>dispatch(addCount({id:product.id,method:'minus'}))}>SİL</button>
        
    </div>
  )
}

export default BasketProduct