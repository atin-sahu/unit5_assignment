import { useState } from "react";

export const Form = ()=>{
    const [formdata, setFormdata] = useState({
        username:"",
        mobile:""
    });

    const handleChange = (e)=>{
        const {id,value} = e.target;
        setFormdata({
            ...formdata,[id]:value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(formdata);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="enter name" id="username"></input>
            <input onChange={handleChange} type="number" placeholder="enter mobile" id="mobile"></input>
            <input type="submit" value="submit" ></input>
        </form>
    );
}