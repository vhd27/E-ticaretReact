import React, { useEffect } from 'react'
import '../css/Detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCount, updateBasketCount } from '../features/products/productsSlicer';
import { useNavigate } from 'react-router';

function Detail({product}) {
    const {id,image,name,price} = product;
    const dispatch = useDispatch();
    const {countProducts} = useSelector((state)=>state.products);
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(updateBasketCount())
    },[countProducts])

  return (
    <div id='detail'>
        <div id='leftSide'>
            <div id='detailImage'>
                <img src={image}/>
            </div>
        </div>
        <div id='rightSide'>
            <div id='detailData'>
                <h2 className='detailName'>{name}</h2>
                <p className='detailPrice'>{price} ₼</p>
            </div>
            <div id='basketCount'>
                <div id='detailRightTool'>
                    <div>
                        <button className='addCountButton' onClick={()=>dispatch(addCount({id:id,method:'plus'}))}>+</button>
                        <p>
                            {countProducts.find((countProduct)=>countProduct.id == id)?.count||0}
                         </p>
                        <button className='addCountButton' onClick={()=>dispatch(addCount({id:id,method:'minus'}))}>-</button>
                    </div>
                    <button id='goBasket' onClick={()=>navigate('/basket')}>Sepete Git</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail