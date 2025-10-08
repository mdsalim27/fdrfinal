// // // import { createSlice } from '@reduxjs/toolkit'
// // // export const ProductSlice = createSlice({
// // //   name: 'Product',
// // //   initialState: {
// // //     cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
// // //   },
// // //   reducers: {
// // //     addToCart: (state, actions) => {
// // //       let FindProduct = state.cartItem.findIndex((item) => {
// // //         item.id == actions.payload.id
// // //       })
// // //       if (FindProduct !== -1) {
// // //         state.cartItem[FindProduct].qun += 1
// // //         localStorage.setItem("cart", JSON.stringify(state.cartItem))
// // //       }
// // //       else {
// // //         state.cartItem = [...state.cartItem, actions.payload]
// // //         localStorage.setItem("cart", JSON.stringify(state.cartItem))
// // //       }
// // //     },
// // //     increment: (state, actions) => {
// // //       state.cartItem[actions.payload].qun += 1
// // //       localStorage.setItem("cart", JSON.stringify(state.cartItem))
// // //     },
// // //     decrement: (state, actions) => {
// // //       state.cartItem[actions.payload].qun -= 1
// // //       localStorage.setItem("cart", JSON.stringify(state.cartItem))
// // //     },
// // //   },
// // // })
// // // export const { addToCart, increment, decrement } = ProductSlice.actions
// // // export default ProductSlice.reducer








// // import { createSlice } from '@reduxjs/toolkit'

// // export const ProductSlice = createSlice({
// //   name: 'Product',
// //   initialState: {
// //     cartItem: localStorage.getItem("cart")
// //       ? JSON.parse(localStorage.getItem("cart"))
// //       : [],
// //   },
// //   reducers: {
// //     addToCart: (state, actions) => {
// //       // ✅ return যোগ করো
// //       let FindProduct = state.cartItem.findIndex(
// //         (item) => item.id === actions.payload.id
// //       )

// //       if (FindProduct !== -1) {
// //         // quantity বাড়াও
// //         state.cartItem[FindProduct].qun += 1
// //       } else {
// //         // নতুন প্রোডাক্ট যোগ করো
// //         state.cartItem = [...state.cartItem, actions.payload]
// //       }

// //       // localStorage আপডেট করো
// //       localStorage.setItem("cart", JSON.stringify(state.cartItem))
// //     },

// //     increment: (state, actions) => {
// //       // state.cartItem[actions.payload].qun += 1
// //       state.cartItem.find(item => item.id === actions.payload).qun += 1
// //       localStorage.setItem("cart", JSON.stringify(state.cartItem))
// //     },

// //    decrement: (state, actions) => {
// //   const product = state.cartItem.find(item => item.id === actions.payload);
// //   if (product && product.qun > 1) {
// //     product.qun -= 1;
// //   }
// //   localStorage.setItem("cart", JSON.stringify(state.cartItem));
// // },

// //   },
// // })

// // export const { addToCart, increment, decrement } = ProductSlice.actions
// // export default ProductSlice.reducer


// import { createSlice } from '@reduxjs/toolkit'

// export const ProductSlice = createSlice({
//   name: 'Product',
//   initialState: {
//     cartItem: localStorage.getItem("cart")
//       ? JSON.parse(localStorage.getItem("cart"))
//       : [],
//   },
//   reducers: {
//     addToCart: (state, actions) => {
//       const index = state.cartItem.findIndex(item => item.id === actions.payload.id)
//       if (index !== -1) {
//         state.cartItem[index].qun += 1
//       } else {
//         state.cartItem.push({ ...actions.payload, qun: 1 })
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartItem))
//     },

//     increment: (state, actions) => {
//       const product = state.cartItem.find(item => item.id === actions.payload)
//       if (product) product.qun += 1
//       localStorage.setItem("cart", JSON.stringify(state.cartItem))
//     },

//     decrement: (state, actions) => {
//       const product = state.cartItem.find(item => item.id === actions.payload)
//       if (product && product.qun > 1) product.qun -= 1
//       localStorage.setItem("cart", JSON.stringify(state.cartItem))
//     },
//   },
// })

// export const { addToCart, increment, decrement } = ProductSlice.actions
// export default ProductSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'Product',
  initialState: {
    cartItem: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, actions) => {
      let FindProduct = state.cartItem.findIndex(
        (item) => item.id === actions.payload.id
      )

      if (FindProduct !== -1) {
        state.cartItem[FindProduct].qun += 1
      } else {
        state.cartItem = [...state.cartItem, actions.payload]
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    increment: (state, actions) => {
      const product = state.cartItem.find(item => item.id === actions.payload)
      if (product) {
        product.qun += 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },

    decrement: (state, actions) => {
      const product = state.cartItem.find(item => item.id === actions.payload)
      if (product && product.qun > 1) {
        product.qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },


    // ✅ নতুন ফাংশন: প্রোডাক্ট রিমুভ
    removeFromCart: (state, actions) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== actions.payload
      )
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
  },
})

export const { addToCart, increment, decrement, removeFromCart } =
  ProductSlice.actions
export default ProductSlice.reducer
