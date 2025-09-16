import React from 'react'

const ContextApi2 = () => {
    let ApiData1 = createContext()  
      let [info1, setInfo1] = useState([]) 
        let getData1 = () => {
          axios.get("https://dummyjson.com/products").then((responce) => {
            console.log(responce);     
          })
        }
         useEffect(() => {
    getData1()
  }, [])
  return (
    <div>
      <ApiData1.Provider value={info1}>{children}</ApiData1.Provider>
    </div>
  )
}
export  { ContextApi2, ApiData1 }

