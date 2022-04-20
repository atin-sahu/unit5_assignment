import { createContext, useState } from "react"
export const CartContext = createContext();

export const CartContextProvider = ({ children })=>{
    const [cart,setCart] = useState(0);
    
     const handleChange = (prev)=>{
         setCart(prev+cart);
     };

    return <CartContext.Provider value={{cart, handleChange}}>{children}</CartContext.Provider>
};