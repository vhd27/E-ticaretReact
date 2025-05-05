import { useNavigate } from 'react-router';
import '../css/Basket.css'
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';
import BasketProduct from './BasketProduct';

function Basket() {
    const {products,countProducts} = useSelector((state)=>state.products)
    const navigate = useNavigate();

    const totalAmount = ()=>{
        let result = 0;
        products.map(product=>{
            return countProducts.map((countProduct)=>{   
                 if(product.id == countProduct.id && countProduct.count > 0){
                    result += product.price * countProduct.count;
                 }
             })
         })

        return Number(result).toFixed(2);
    }

  return (
    <div id='sideBasket'>
        <div id="basketHeader">
            <button id="close" onClick={()=>navigate('/')}><IoMdClose/></button>
            <h2 id="basketHead">Sepet</h2>
        </div>

        <div id='basketBody'>
        <div id='basketProducts'> 
            {products.map(product=>{
               return countProducts.map((countProduct)=>{   
                    if(product.id == countProduct.id && countProduct.count > 0){
                        return <BasketProduct key={product.id} product={product} count={countProduct.count}/>
                    }
                })
            })}  
        </div>
        <h3 id='totalAmount'>Toplam Tutar: {totalAmount()}</h3>
        </div>

    </div>
  )
}

export default Basket