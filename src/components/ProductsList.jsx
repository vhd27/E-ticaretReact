import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
import '../css/ProductsList.css'

function ProductsList() {
    const {products} = useSelector((state)=>state.products);

    return (
        <div id='productList'>
            {products.map((product)=>{
                return <Product key={product.id} product={product}/>
            })}
        </div>
    )
}

export default ProductsList