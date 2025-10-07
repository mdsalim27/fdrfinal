import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './compunent/Slice/ProductSlice'

export default configureStore({
  reducer: {
    Product:ProductSlice
  }
})