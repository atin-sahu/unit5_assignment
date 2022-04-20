import { CartContext } from "../Contexts/CartContext"
import { LangContext } from "../Contexts/LangContext";
import { useContext } from "react"


export const Navbar = ()=>{
     const {cart} = useContext(CartContext);
     const {lang} = useContext(LangContext);
    return (
        <nav style={{
        border:"1px solid black",
        display:"flex",
        justifyContent:"end",
        fontSize:"25px",
        height:"50px",
        width:"100%"}}>{lang === "en" ? "cart" : "tokri" } :{cart} </nav>
    )
}