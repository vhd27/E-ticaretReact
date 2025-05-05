import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlicer'

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
})