import './css/App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Basket from './components/Basket'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCountProduct, updateBasketCount } from './features/products/productsSlicer'

function App() {
  const {countProducts } = useSelector((state)=>state.products);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(setCountProduct(JSON.parse(localStorage.getItem('countProducts'))));
    dispatch(updateBasketCount());
  },[])

  useEffect(()=>{
    dispatch(updateBasketCount());
    localStorage.setItem('countProducts',JSON.stringify(countProducts));
  },[countProducts])

  return (
    <div id='app'>
      <Routes>
          <Route path='/' element={<Home />}>
            <Route path='basket' element={<Basket />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
          <Route path='/product-detail/:id' element={<ProductDetail />}/>
      </Routes>
    </div>
  )
}

export default App
