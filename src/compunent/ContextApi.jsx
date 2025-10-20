
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiData = createContext([])
const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([])
  let getData = () => {   
      axios.get("https://dummyjson.com/products?limit=100").then((responce) => {
      setInfo(responce.data.products);   
    })   
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <ApiData.Provider value={info}>{children}</ApiData.Provider>    
    </>
  )
}
export { ContextApi, ApiData }


// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";
// let ApiData = createContext([]);
// const ContextApi = ({ children }) => {
//   let [info, setInfo] = useState([]);
//   let [loading, setLoading] = useState(true);

//   let getData = async () => {
//     try {
//       let response = await axios.get(
//         "https://furniture-api.fly.dev/v1/products?limit=100&offset=0"
//       );
      
//       setInfo(response.data.data);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <ApiData.Provider value={{ info, loading }}>
//       {children}
//     </ApiData.Provider>
//   );
// };
// export { ContextApi, ApiData };
