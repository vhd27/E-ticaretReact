import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [{
      id: 1,
      image:'https://cdn.dsmcdn.com/ty1663/prod/QC/20250414/19/f7dd76fb-9f42-3e6f-8206-6a9a2e8fe952/1_org_zoom.jpg',
      name: 'Tudors Oversize Mevsimlik Keten Dokulu Bol Kalıp Uzun Kollu Rahat Kullanım Erkek Siyah Gömlek',
      price: 24.11
  },
  {
      id: 2,
      image:'https://cdn.dsmcdn.com/ty1660/prod/QC/20250405/20/7b2f2cb0-4097-302f-95fc-350a8e873635/1_org_zoom.jpg',
      name: 'Defacto %100 Pamuk Regular Fit Kısa Kollu Basic Düz Pike Kumaş Polo Tişört',
      price: 14.33
  },
  {
    id: 3,
    image:'https://cdn.dsmcdn.com/ty1409/product/media/images/prod/QC/20240708/09/a5f4b033-2553-3a91-848b-66542a66d763/1_org_zoom.jpg',
    name: 'Tudors Slim Fit Uzun Kollu Kolay Ütü Teri Emen Nefes Alan Doku Kravatlık Dört Mevsim Siyah Erkek Gömlek',
    price: 17.31
},{
  id: 4,
  image:'https://cdn.dsmcdn.com/ty1658/prod/QC/20250401/19/c29d63c4-8b8f-3db8-ba58-d42602c38c09/1_org_zoom.jpg',
  name: 'Etikmen Su Yeşili Slimfit Erkek Gömlek',
  price: 35.83
}
],
  isMode: true,
  basketCount: 0,
  countProducts:[]
}

export const productsSlicer = createSlice({
  name: 'products',
  initialState,
  reducers: {
      addCount(state,actions){
        const {id,method} = actions.payload;
        const countProduct = state.countProducts.find((countProduct)=>countProduct.id == id);

        if(countProduct === undefined && method === 'plus'){
          state.countProducts = [...state.countProducts,{id:id,count:1}]
        }else if(countProduct === undefined && method === 'minus'){
          state.countProducts = [...state.countProducts,{id:id,count:0}]
        }
        else if(method === 'minus' && countProduct.count > 0){
          state.basketCount--;
          countProduct.count--;
        }else if(method === 'plus'){
          state.basketCount++;
          countProduct.count++;
        }
      },
      updateBasketCount(state){
        state.basketCount = 0;
        state.countProducts.map((countProduct)=>{
          state.basketCount += countProduct.count;
        
        })
      },
      setCountProduct(state,actions){
        state.countProducts = actions.payload;
      }
  },
})

export const {addCount,updateBasketCount,setCountProduct} = productsSlicer.actions
export default productsSlicer.reducer