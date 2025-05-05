import './css/App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'
import Basket from './components/Basket'
function App() {

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
