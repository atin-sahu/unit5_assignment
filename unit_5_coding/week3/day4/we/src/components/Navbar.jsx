import {Link} from "react-router-dom"
export const Navbar =()=>{

    const opt = [
        {title:"Home",to:"/"},
        {title:"About",to:"/about"},
        {title:"Contact",to:"/contact"},
        {title:"User",to:"/users"},
    ]

    return (
        <div>
            {opt.map((e,i)=>(
                <Link key={i} to={e.to} style={{margin:"5px"}}>{e.title}</Link>
            ))}

            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}
            
        </div>
    )
}