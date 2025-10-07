import { createSlice } from '@reduxjs/toolkit'
export const ProductSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addToCart: (state, actions) => {
        let FindProduct = state.cartItem.findIndex((item)=>{
            item.id == actions.payload.id
        })
    if(FindProduct !== -1){
        state.cartItem[FindProduct].qun += 1
    }
    else{
        state.cartItem = [...state.cartItem, actions.payload]
    }
    }, 
  },
})
export const { addToCart } = ProductSlice.actions
export default ProductSlice.reducer