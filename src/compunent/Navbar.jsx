// import React, { useState } from 'react'
// import Container from './Container'
// import Logo from '../assets/logo.png'
// import { IoIosSearch } from 'react-icons/io'
// import { FaBars } from 'react-icons/fa'


// const Navbar = () => {


//   let [nave, setNave] = useState([])
//   let handelNave = () => {
//     console.log('ami');
//   }

//   let handleSearch = (e) => {
//      console.log('Search value:', e.target.value)
//   }

//   return (
//     <div>
//       <section className='mt-6'>
//         <Container>
//           <div className='lg:flex items-center'>
//             <div className='lg:w-1/6  flex justify-between px-5 lg:px-0 lg:items-center items-center'><img src={Logo} alt="" />
//               < FaBars onClick={handelNave} className='cursor-pointer lg:opacity-0 ' /> </div>

//             <div className='lg:w-3/6'>
//               <ui className="lg:flex list-none" >
//                 <li className='px-3'><a href="/">home </a></li>
//                 <li className='px-3'><a href="/pages">Pages</a></li>
//                 <li className='px-3'><a href="/products">Products</a></li>
//                 <li className='px-3'><a href="/blog">Blog </a></li>
//                 <li className='px-3'><a href="/shop">Shop</a></li>
//                 <li className='px-3'><a href="/contact">Contact</a></li>
//               </ui>
//             </div>

//             <div className='lg:w-2/6 flex items-center justify-end  '>
//               <div className='bg-[#D9D9D9] h-[100%] cursor-alias'>
//                 <input  onChange={handleSearch} className='py-3 px-3 '
//                   type="text" />
//               </div>
//               <div className='bg-amber-800 h-[100%] px-4 cursor-pointer'> <IoIosSearch className='mt-[50%]
//                transition-y-[-50%]  text-[30px] hover:text-[#FFFF] ' /></div>
//             </div>

//           </div>
//         </Container>

//       </section>
//     </div>
//   )
// }

// export default Navbar




// import React, { useContext, useState } from 'react';
// import Container from './Container';
// import Logo from '../assets/logo.png';
// import { IoIosSearch } from 'react-icons/io';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { ApiData } from './ContextApi';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const products = useContext(ApiData);
//   const navigate = useNavigate();

//   // ✅ Filter products safely
//   const filteredProducts = products.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Navigate to single product page
//   const handleSelectProduct = (item) => {
//     navigate(`/shop/${item.id}`);
//     setSearchTerm('');
//     setShowSuggestions(false);
//   };

//   return (
//     <nav className="shadow-md relative z-50 bg-white">
//       <section className="py-3 md:py-4">
//         <Container>
//           <div className="flex items-center justify-between gap-3">
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24" />
//             </div>

//             {/* Desktop Menu */}
//             <ul className="hidden lg:flex list-none gap-4 xl:gap-6 font-medium text-gray-700 text-sm md:text-base">
//               <li><a href="/" className="hover:text-amber-700 transition">Home</a></li>
//               <li><a href="/pages" className="hover:text-amber-700 transition">Pages</a></li>
//               <li><a href="/products" className="hover:text-amber-700 transition">Products</a></li>
//               <li><a href="/blog" className="hover:text-amber-700 transition">Blog</a></li>
//               <li><a href="/shop" className="hover:text-amber-700 transition">Shop</a></li>
//               <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
//             </ul>

//             {/* Search */}
//             <div className="hidden md:flex items-center gap-1 relative">
//               <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="Search product..."
//                   value={searchTerm}
//                   onFocus={() => setShowSuggestions(true)}
//                   onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="py-2 px-3 outline-none bg-transparent w-40 md:w-56 lg:w-72 text-sm md:text-base"
//                 />
//                 <div className="bg-amber-700 p-2 cursor-pointer hover:bg-amber-800 transition">
//                   <IoIosSearch className="text-[20px] md:text-[22px] text-white" />
//                 </div>
//               </div>

//               {/* Suggestion box */}
//               {showSuggestions && searchTerm && (
//                 <div className="absolute top-12 right-0 bg-white shadow-lg border w-72 sm:w-80 md:w-96 rounded-md overflow-hidden z-50 max-h-96 overflow-y-auto">
//                   {filteredProducts.length > 0 ? (
//                     filteredProducts.map((item) => (
//                       <div
//                         key={item.id}
//                         onClick={() => handleSelectProduct(item)}
//                         className="flex items-center gap-3 px-4 py-2 hover:bg-amber-100 cursor-pointer"
//                       >
//                         <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
//                         <div className="flex flex-col">
//                           <span className="text-sm md:text-base font-medium">{item.title}</span>
//                           <span className="text-xs md:text-sm text-gray-600">${item.price}</span>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="px-4 py-2 text-gray-500 text-sm md:text-base">No product found</p>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Icon */}
//             <div
//               className="lg:hidden text-2xl cursor-pointer p-2 rounded-md hover:bg-gray-100 transition"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[50%] sm:w-[50%] md:w-[50%] bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-50
//         ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//       >
//         <div className="p-4 flex justify-between items-center border-b">
//           <img src={Logo} alt="Logo" className="w-20 sm:w-24" />
//           <FaTimes className="text-xl cursor-pointer" onClick={() => setMenuOpen(false)} />
//         </div>

//         <ul className="flex flex-col gap-4 p-5 font-medium text-gray-700 text-sm sm:text-base">
//           <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
//           <li><a href="/pages" onClick={() => setMenuOpen(false)}>Pages</a></li>
//           <li><a href="/products" onClick={() => setMenuOpen(false)}>Products</a></li>
//           <li><a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
//           <li><a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
//           <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
//         </ul>
//       </div>

//       {/* Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from 'react';
import Container from './Container';
import Logo from '../assets/logo.png';
import { IoIosSearch } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ApiData } from './ContextApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const products = useContext(ApiData);
  const navigate = useNavigate();

  // Filter products only when suggestions are shown
  const filteredProducts = showSuggestions
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Navigate to single product page
  const handleSelectProduct = (item) => {
    navigate(`/shop/${item.id}`);
    setSearchTerm('');
    setShowSuggestions(false);
    setActiveIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions || filteredProducts.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredProducts.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0) {
        handleSelectProduct(filteredProducts[activeIndex]);
      }
    }
  };

  return (
    <nav className="shadow-md relative bg-white lg:pt-15 pt-40">
      <section className="py-3 md:py-4  ">
        <Container>
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-16 sm:w-20 md:w-24" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex list-none gap-4 xl:gap-6 font-medium text-gray-700 text-sm md:text-base">
              <li><a href="/" className="hover:text-amber-700 transition">Home</a></li>
              <li><a href="/pages" className="hover:text-amber-700 transition">Pages</a></li>
              <li><a href="/products" className="hover:text-amber-700 transition">Products</a></li>
              <li><a href="/blog" className="hover:text-amber-700 transition">Blog</a></li>
              <li><a href="/shop" className="hover:text-amber-700 transition">Shop</a></li>
              <li><a href="/contact" className="hover:text-amber-700 transition">Contact</a></li>
            </ul>

            {/* Search */}
            <div className="hidden md:flex items-center gap-1 relative">
              <div className="bg-gray-200 flex items-center rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search product..."
                  value={searchTerm}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="py-2 px-3 outline-none bg-transparent w-40 md:w-56 lg:w-72 text-sm md:text-base"
                />
                <div className="bg-amber-700 p-2 cursor-pointer hover:bg-amber-800 transition">
                  <IoIosSearch className="text-[20px] md:text-[22px] text-white" />
                </div>
              </div>

              {/* Suggestion box */}
              {showSuggestions && searchTerm && (
                <div className="absolute top-12 right-0 bg-white shadow-lg border w-72 sm:w-80 md:w-96 rounded-md overflow-hidden z-50 max-h-96 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item, index) => (
                      <div
                        key={item.id}
                        onClick={() => handleSelectProduct(item)}
                        className={`flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-amber-100
                          ${index === activeIndex ? 'bg-amber-200' : ''}`}
                      >
                        <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-cover rounded" />
                        <div className="flex flex-col">
                          <span className="text-sm md:text-base font-medium">{item.title}</span>
                          <span className="text-xs md:text-sm text-gray-600">${item.price}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-gray-500 text-sm md:text-base">No product found</p>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="lg:hidden text-2xl cursor-pointer p-2 rounded-md hover:bg-gray-100 transition z[101]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[50%] sm:w-[50%] md:w-[50%] bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-[200]
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 flex justify-between items-center border-b ]">
          <img src={Logo} alt="Logo" className="w-20 sm:w-24" />
          <FaTimes className="text-xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-4 p-5 font-medium text-gray-700 text-sm sm:text-base ">
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/pages" onClick={() => setMenuOpen(false)}>Pages</a></li>
          <li><a href="/products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
          <li><a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
