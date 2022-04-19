import { useState } from 'react'
import './App.css'
// import { Button } from './components/Button'
import { Flex } from './components/flex'
import {Button} from "antd";

function App() {
  const [theme,setTheme] = useState("dark");

  return (
    <div className="App">
      <h1>theme : {theme}</h1>
      <Button type='primary'  onClick={()=>{setTheme(theme === "light" ? "dark" : "light")}}>change theme</Button>

      {/* <Button  children={"More"} onclick={()=>{alert("More")}}/> */}
      <Button  theme={theme} onClick={()=>{alert("Login")}}>Login</Button>
      <Button theme={theme} onClick={()=>{alert("Sign-up")}}>Sign</Button>
      <Button type='dashed' onClick={()=>{alert("CLick-Me")}}>Click-Me</Button>


      <Flex>
        <div>Atin</div>
        <div>Ritul</div>
        <div>Manjeet</div>
        <div>Ankush</div>
      </Flex>

      <div>
        <Button type='danger'>ANT DESIGN</Button>
      </div>
    </div>
  )
}

export default App
