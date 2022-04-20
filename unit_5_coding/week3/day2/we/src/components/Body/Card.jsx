import { CartContext } from "../../Contexts/CartContext"
import { useContext } from "react"

export const Card = ()=>{

    const {handleChange} = useContext(CartContext);

    return <div style={{
        height:"300px",
        width:"300px",
        backgroundColor:"silver",
        }}>
        <button style={{
        fontSize:"30px",
        }}  onClick={()=>{handleChange(1)}} >Add To Cart</button>
    </div>
}