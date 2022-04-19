import styled from 'styled-components';

// export const Button = ({children,onclick})=>{

//     return (
//         <button className="btn" onClick={onclick} >{children}</button>
//     )
// }

const Button = styled.button`
border: none;
border-radius: 4px;
background-color: ${(props)=>props.theme === "light" ? "white" : "red"};
color: ${(props)=>props.theme === "light" ? "red" : "white"};
margin: 10px;
font-size: larger;
padding: 10px;
&:hover {
    box-shadow:#02f523 0 3px 8px;
}
`;

export {Button};