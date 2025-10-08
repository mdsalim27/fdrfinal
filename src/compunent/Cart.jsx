// // // // // import React from 'react'
// // // // // import Container from './Container'
// // // // // import { useDispatch, useSelector } from 'react-redux'
// // // // // import { increment } from './Slice/ProductSlice'

// // // // // const Cart = () => {
// // // // //   let data = useSelector((state) => state.Product.cartItem)
// // // // //   let dispatch = useDispatch()
// // // // //   return (
// // // // //     <Container>
// // // // //       <section className="bg-white  antialiased dark:bg-gray-900 md:py-16">
// // // // //         <div className="mx-auto flex items-start max-w-screen-xl px-4 2xl:px-0">
// // // // //           <div className=" md:gap-6  lg:items-start xl:gap-8">
// // // // //             {data.map((item, i) => (
// // // // //               <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
// // // // //                 <div className="space-y-6">
// // // // //                   <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
// // // // //                     <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
// // // // //                       <img src={item.thumbnail} alt="" />
// // // // //                       <label for="counter-input" className="sr-only">Choose quantity:</label>
// // // // //                       <div className=''>
// // // // //                         {item.title}
// // // // //                       </div>

// // // // //                       <div className="flex items-center justify-between md:order-3 md:justify-end">
// // // // //                         <div class="flex items-center">
// // // // //                           <button onClick={() => dispatch(decrement(i))} type="button" id="decrement-button-2" data-input-counter-decrement="counter-input-2" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
// // // // //                             <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
// // // // //                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
// // // // //                             </svg>
// // // // //                           </button>
// // // // //                           <input type="text" id="counter-input-2" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.qun} required />
// // // // //                           <button onClick={() => dispatch(increment(i))} type="button" id="increment-button-2" data-input-counter-increment="counter-input-2" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
// // // // //                             <svg class="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
// // // // //                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
// // // // //                             </svg>
// // // // //                           </button>
// // // // //                           <div className="text-end md:order-4 md:w-32">
// // // // //                             <p className="text-base font-bold text-gray-900 dark:text-white">${(item.price * item.qun).toFixed(2)}</p>
// // // // //                           </div>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                       <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
// // // // //                         {/* <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</a> */}

// // // // //                         {/* <div className="flex items-center gap-4">
// // // // //                           <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
// // // // //                             <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
// // // // //                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
// // // // //                             </svg>
// // // // //                             Add to Favorites
// // // // //                           </button>

// // // // //                           <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
// // // // //                             <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
// // // // //                               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
// // // // //                             </svg>
// // // // //                             Remove
// // // // //                           </button>
// // // // //                         </div> */}
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>      
// // // // //         </div>
// // // // //       </section>
// // // // //     </Container>
// // // // //   )
// // // // // }

// // // // // export default Cart


// // // // import React from 'react'
// // // // import Container from './Container'
// // // // import { useDispatch, useSelector } from 'react-redux'
// // // // import { increment, decrement } from './Slice/ProductSlice' // ✅ decrement যোগ করো

// // // // const Cart = () => {
// // // //   const data = useSelector((state) => state.Product.cartItem)
// // // //   const dispatch = useDispatch()

// // // //   return (
// // // //     <Container>
// // // //       <section className="bg-white antialiased dark:bg-gray-900 md:py-16">
// // // //         <div className="mx-auto flex items-start max-w-screen-xl px-4 2xl:px-0">
// // // //           <div className="md:gap-6 lg:items-start xl:gap-8">
// // // //             {data.map((item) => (
// // // //               <div key={item.id} className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
// // // //                 <div className="space-y-6">
// // // //                   <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
// // // //                     <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
// // // //                       <img src={item.thumbnail} alt="" className="w-20 h-20 object-cover rounded-md" />

// // // //                       <div className="font-medium text-gray-900">{item.title}</div>

// // // //                       <div className="flex items-center md:order-3 md:justify-end gap-2">
// // // //                         {/* ✅ এখানে index নয়, item.id পাঠাও */}
// // // //                         <button
// // // //                           onClick={() => dispatch(decrement(item.id))}
// // // //                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// // // //                         >
// // // //                           −
// // // //                         </button>

// // // //                         <input
// // // //                           type="text"
// // // //                           value={item.qun}
// // // //                           readOnly
// // // //                           className="w-10 text-center border-0 bg-transparent text-sm font-medium"
// // // //                         />

// // // //                         <button
// // // //                           onClick={() => dispatch(increment(item.id))}
// // // //                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// // // //                         >
// // // //                           +
// // // //                         </button>

// // // //                         <div className="text-base font-bold text-gray-900 ml-4">
// // // //                           ${(item.price * item.qun).toFixed(2)}
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </Container>
// // // //   )
// // // // }

// // // // export default Cart

// // // import React from 'react'
// // // import Container from './Container'
// // // import { useDispatch, useSelector } from 'react-redux'
// // // import { increment, decrement, removeFromCart } from './Slice/ProductSlice'

// // // const Cart = () => {
// // //   let data = useSelector((state) => state.Product.cartItem)
// // //   let dispatch = useDispatch()

// // //   return (
// // //     <Container>
// // //       <section className="bg-white antialiased dark:bg-gray-900 md:py-16">
// // //         <div className="mx-auto flex items-start max-w-screen-xl px-4 2xl:px-0">
// // //           <div className="md:gap-6 lg:items-start xl:gap-8">
// // //             {data.map((item, i) => (
// // //               <div
// // //                 key={item.id}
// // //                 className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl"
// // //               >
// // //                 <div className="space-y-6">
// // //                   <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
// // //                     <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
// // //                       <img src={item.thumbnail} alt="" className="w-24 rounded-md" />

// // //                       <div className="flex-1">
// // //                         <p className="font-semibold text-gray-900 dark:text-white">
// // //                           {item.title}
// // //                         </p>
// // //                       </div>

// // //                       <div className="flex items-center gap-2">
// // //                         <button
// // //                           onClick={() => dispatch(decrement(i))}
// // //                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// // //                         >
// // //                           -
// // //                         </button>

// // //                         <input
// // //                           type="text"
// // //                           readOnly
// // //                           value={item.qun}
// // //                           className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
// // //                         />

// // //                         <button
// // //                           onClick={() => dispatch(increment(i))}
// // //                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// // //                         >
// // //                           +
// // //                         </button>
// // //                       </div>

// // //                       <div className="text-end">
// // //                         <p className="text-base font-bold text-gray-900 dark:text-white">
// // //                           ${(item.price * item.qun).toFixed(2)}
// // //                         </p>
// // //                       </div>

// // //                       {/* ✅ Remove Button */}
// // //                       <button
// // //                         onClick={() => dispatch(removeFromCart(item.id))}
// // //                         className="text-sm font-medium text-red-600 hover:underline"
// // //                       >
// // //                         Remove
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </Container>
// // //   )
// // // }

// // // export default Cart


// // import React from 'react'
// // import Container from './Container'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { increment, decrement, removeFromCart } from './Slice/ProductSlice'

// // const Cart = () => {
// //   const data = useSelector((state) => state.Product.cartItem)
// //   const dispatch = useDispatch()

// //   return (
// //     <Container>
// //       <section className="bg-white antialiased dark:bg-gray-900 md:py-16">
// //         <div className="mx-auto flex items-start max-w-screen-xl px-4 2xl:px-0">
// //           <div className="md:gap-6 lg:items-start xl:gap-8 w-full">

// //             {/* ✅ যদি কার্ট খালি থাকে */}
// //             {data.length === 0 ? (
// //               <div className="flex flex-col items-center justify-center w-full py-20">
// //                 <img
// //                   src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
// //                   alt="Empty Cart"
// //                   className="w-32 mb-6 opacity-80"
// //                 />
// //                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
// //                   Your cart is empty 🛒
// //                 </h2>
// //                 <p className="text-gray-500 mt-2">Add some products to get started!</p>
// //               </div>
// //             ) : (
// //               /* ✅ যদি কার্টে প্রোডাক্ট থাকে */
// //               data.map((item, i) => (
// //                 <div
// //                   key={item.id}
// //                   className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl"
// //                 >
// //                   <div className="space-y-6">
// //                     <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
// //                       <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
// //                         <img
// //                           src={item.thumbnail}
// //                           alt={item.title}
// //                           className="w-24 rounded-md"
// //                         />

// //                         <div className="flex-1">
// //                           <p className="font-semibold text-gray-900 dark:text-white">
// //                             {item.title}
// //                           </p>
// //                         </div>

// //                         <div className="flex items-center gap-2">
// //                           <button
// //                             onClick={() => dispatch(decrement(i))}
// //                             className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// //                           >
// //                             -
// //                           </button>

// //                           <input
// //                             type="text"
// //                             readOnly
// //                             value={item.qun}
// //                             className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
// //                           />

// //                           <button
// //                             onClick={() => dispatch(increment(i))}
// //                             className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
// //                           >
// //                             +
// //                           </button>
// //                         </div>

// //                         <div className="text-end">
// //                           <p className="text-base font-bold text-gray-900 dark:text-white">
// //                             ${(item.price * item.qun).toFixed(2)}
// //                           </p>
// //                         </div>

// //                         {/* ❌ Remove Button */}
// //                         <button
// //                           onClick={() => dispatch(removeFromCart(item.id))}
// //                           className="text-sm font-medium text-red-600 hover:underline"
// //                         >
// //                           Remove
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </Container>
// //   )
// // }

// // export default Cart

// import React from 'react'
// import Container from './Container'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, removeFromCart } from './Slice/ProductSlice'
// import { Link } from 'react-router-dom'

// const Cart = () => {
//   const data = useSelector((state) => state.Product.cartItem)
//   const dispatch = useDispatch()

//   return (
//     <Container>
//       <section className="bg-white antialiased dark:bg-gray-900 md:py-16">
//         <div className="mx-auto flex items-start max-w-screen-xl px-4 2xl:px-0">
//           <div className="md:gap-6 lg:items-start xl:gap-8 w-full">

//             {/* ✅ যদি কার্ট খালি থাকে */}
//             {data.length === 0 ? (
//               <div className="flex flex-col items-center justify-center w-full py-20">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
//                   alt="Empty Cart"
//                   className="w-32 mb-6 opacity-80"
//                 />
//                 <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//                   Your cart is empty 🛒
//                 </h2>
//                 <p className="text-gray-500 mt-2 mb-6">
//                   Add some products to get started!
//                 </p>

//                 {/* 🛍️ Go to Shop Button */}
//                 <Link
//                   to="/shop"
//                   className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//                 >
//                   Go to Shop
//                 </Link>
//               </div>
//             ) : (
//               /* ✅ যদি কার্টে প্রোডাক্ট থাকে */
//               data.map((item, i) => (
//                 <div
//                   key={item.id}
//                   className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl"
//                 >
//                   <div className="space-y-6">
//                     <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
//                       <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-24 rounded-md"
//                         />

//                         <div className="flex-1">
//                           <p className="font-semibold text-gray-900 dark:text-white">
//                             {item.title}
//                           </p>
//                         </div>

//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => dispatch(decrement(item.id))}
//                             className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                           >
//                             -
//                           </button>

//                           <input
//                             type="text"
//                             readOnly
//                             value={item.qun}
//                             className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
//                           />

//                           <button
//                             onClick={() => dispatch(increment(item.id))}
//                             className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                           >
//                             +
//                           </button>
//                         </div>

//                         <div className="text-end">
//                           <p className="text-base font-bold text-gray-900 dark:text-white">
//                             ${(item.price * item.qun).toFixed(2)}
//                           </p>
//                         </div>

//                         {/* ❌ Remove Button */}
//                         <button
//                           onClick={() => dispatch(removeFromCart(item.id))}
//                           className="text-sm font-medium text-red-600 hover:underline"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </section>
//     </Container>
//   )
// }

// export default Cart



// import React from 'react'
// import Container from './Container'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, removeFromCart } from './Slice/ProductSlice'
// import { Link } from 'react-router-dom'

// const Cart = () => {
//   const data = useSelector((state) => state.Product.cartItem)
//   const dispatch = useDispatch()

//   // 🧮 মোট দাম হিসাব করো
//   const subtotal = data.reduce((total, item) => total + item.price * item.qun, 0)

//   return (
//     <Container>
//       <section className="bg-white dark:bg-gray-900 py-16">
//         <div className="mx-auto max-w-screen-xl px-4">
//           {/* ✅ যদি কার্ট খালি থাকে */}
//           {data.length === 0 ? (
//             <div className="flex flex-col items-center justify-center w-full py-20">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
//                 alt="Empty Cart"
//                 className="w-32 mb-6 opacity-80"
//               />
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//                 Your cart is empty 🛒
//               </h2>
//               <p className="text-gray-500 mt-2 mb-6">
//                 Add some products to get started!
//               </p>
//               <Link
//                 to="/shop"
//                 className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               >
//                 Go to Shop
//               </Link>
//             </div>
//           ) : (
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* 🛍️ কার্ট আইটেম লিস্ট */}
//               <div className="flex-1 space-y-6">
//                 {data.map((item) => (
//                   <div
//                     key={item.id}
//                     className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
//                   >
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-20 h-20 rounded-md object-cover"
//                         />
//                         <div>
//                           <p className="font-semibold text-gray-900 dark:text-white">
//                             {item.title}
//                           </p>
//                           <p className="text-sm text-gray-500 dark:text-gray-400">
//                             ${item.price.toFixed(2)} each
//                           </p>
//                         </div>
//                       </div>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => dispatch(decrement(item.id))}
//                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                         >
//                           -
//                         </button>
//                         <input
//                           type="text"
//                           readOnly
//                           value={item.qun}
//                           className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
//                         />
//                         <button
//                           onClick={() => dispatch(increment(item.id))}
//                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                         >
//                           +
//                         </button>
//                       </div>

//                       {/* Price */}
//                       <div className="text-end">
//                         <p className="text-base font-bold text-gray-900 dark:text-white">
//                           ${(item.price * item.qun).toFixed(2)}
//                         </p>
//                       </div>

//                       {/* ❌ Remove Button */}
//                       <button
//                         onClick={() => dispatch(decrement(item.id))}
//                         className="text-sm font-medium text-red-600 hover:underline"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* 💰 Cart Total Section */}
//               <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md h-fit">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
//                   Cart Total
//                 </h2>

//                 <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
//                   <span>Subtotal:</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">
//                   <span>Shipping:</span>
//                   <span className="font-medium">Free</span>
//                 </div>

//                 <hr className="my-3 border-gray-300 dark:border-gray-700" />

//                 <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-6">
//                   <span>Total:</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>

//                 <Link
//                   to="/checkout"
//                   className="w-full inline-block text-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </Container>
//   )
// }

// export default Cart




// import React from 'react'
// import Container from './Container'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, removeFromCart } from './Slice/ProductSlice'
// import { Link } from 'react-router-dom'

// const Cart = () => {
//   const data = useSelector((state) => state.Product.cartItem)
//   const dispatch = useDispatch()

//   // 🧮 মোট দাম হিসাব করো
//   const subtotal = data.reduce((total, item) => total + item.price * item.qun, 0)

//   return (
//     <Container>
//       <section className="bg-white dark:bg-gray-900 py-16">
//         <div className="mx-auto max-w-screen-xl px-4">
//           {/* ✅ যদি কার্ট খালি থাকে */}
//           {data.length === 0 ? (
//             <div className="flex flex-col items-center justify-center w-full py-20">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
//                 alt="Empty Cart"
//                 className="w-32 mb-6 opacity-80"
//               />
//               <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
//                 Your cart is empty 🛒
//               </h2>
//               <p className="text-gray-500 mt-2 mb-6">
//                 Add some products to get started!
//               </p>

//               {/* 🛍️ Go to Shop Button */}
//               <Link
//                 to="/shop"
//                 className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//               >
//                 Go to Shop
//               </Link>
//             </div>
//           ) : (
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* 🛍️ Cart Items */}
//               <div className="flex-1 space-y-6">
//                 {data.map((item) => (
//                   <div
//                     key={item.id}
//                     className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
//                   >
//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//                       <div className="flex items-center gap-4">
//                         <img
//                           src={item.thumbnail}
//                           alt={item.title}
//                           className="w-20 h-20 rounded-md object-cover"
//                         />
//                         <div>
//                           <p className="font-semibold text-gray-900 dark:text-white">
//                             {item.title}
//                           </p>
//                           <p className="text-sm text-gray-500 dark:text-gray-400">
//                             ${item.price.toFixed(2)} each
//                           </p>
//                         </div>
//                       </div>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => dispatch(decrement(item.id))}
//                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                         >
//                           -
//                         </button>
//                         <input
//                           type="text"
//                           readOnly
//                           value={item.qun}
//                           className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
//                         />
//                         <button
//                           onClick={() => dispatch(increment(item.id))}
//                           className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
//                         >
//                           +
//                         </button>
//                       </div>

//                       {/* Price */}
//                       <div className="text-end">
//                         <p className="text-base font-bold text-gray-900 dark:text-white">
//                           ${(item.price * item.qun).toFixed(2)}
//                         </p>
//                       </div>

//                       {/* ❌ Remove Button */}
//                       <button
//                         onClick={() => dispatch(removeFromCart(item.id))}
//                         className="text-sm font-medium text-red-600 hover:underline"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* 💰 Cart Total Section */}
//               <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md h-fit">
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
//                   Cart Total
//                 </h2>

//                 <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
//                   <span>Subtotal:</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">
//                   <span>Shipping:</span>
//                   <span className="font-medium">Free</span>
//                 </div>

//                 <hr className="my-3 border-gray-300 dark:border-gray-700" />

//                 <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-6">
//                   <span>Total:</span>
//                   <span>${subtotal.toFixed(2)}</span>
//                 </div>

//                 <Link
//                   to="/checkout"
//                   className="w-full inline-block text-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
//                 >
//                   Proceed to Checkout
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </Container>
//   )
// }

// export default Cart


import React from 'react'
import Container from './Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, removeFromCart } from './Slice/ProductSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const data = useSelector((state) => state.Product.cartItem)
  const dispatch = useDispatch()

  // 🧮 মোট দাম হিসাব করো
  const subtotal = data.reduce((total, item) => total + item.price * item.qun, 0)

  return (
    <Container>
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          {/* ✅ যদি কার্ট খালি থাকে */}
          {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center w-full py-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
                alt="Empty Cart"
                className="w-32 mb-6 opacity-80"
              />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Your cart is empty 🛒
              </h2>
              <p className="text-gray-500 mt-2 mb-6">
                Add some products to get started!
              </p>

              {/* 🛍️ Go to Shop Button */}
              <Link
                to="/shop"
                className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* 🛍️ Cart Items */}
              <div className="flex-1 space-y-6">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            ${item.price.toFixed(2)} each
                          </p>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decrement(item.id))}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          readOnly
                          value={item.qun}
                          className="w-10 text-center bg-transparent border-0 text-gray-900 font-medium"
                        />
                        <button
                          onClick={() => dispatch(increment(item.id))}
                          className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-end">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          ${(item.price * item.qun).toFixed(2)}
                        </p>
                      </div>

                      {/* ❌ Remove Button */}
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-sm font-medium text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 💰 Cart Total Section */}
              <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md h-fit">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Cart Total
                </h2>

                <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4 text-gray-700 dark:text-gray-300">
                  <span>Shipping:</span>
                  <span className="font-medium">Free</span>
                </div>

                <hr className="my-3 border-gray-300 dark:border-gray-700" />

                <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white mb-6">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="w-full inline-block text-center px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </Container>
  )
}

export default Cart
