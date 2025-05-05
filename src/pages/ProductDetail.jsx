import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';
import Detail from '../components/Detail';

function ProductDetail() {
    const {id} = useParams();
    const {products} = useSelector((state)=>state.products);
  return (
    <div>
        <Header />
        {
            products.map((product)=>{
                if(product.id == id){
                    return <Detail key={id} product={product} />
                }
            })
        }
    </div>
  )
}

export default ProductDetail