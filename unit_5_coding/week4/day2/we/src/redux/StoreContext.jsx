import { createContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = ({children,store})=>{

    // const {dispatch,getState} = store;
    // const value = {dispatch,getState};
    

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}