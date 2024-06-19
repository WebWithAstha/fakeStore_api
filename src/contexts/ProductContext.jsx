import React, { createContext} from 'react'
export const productcontext = createContext(null)

const ProductContext = ({children}) => {
  return (
    <productcontext.Provider value={"asd"}>
        {children}
    </productcontext.Provider>
  )
}

export default ProductContext