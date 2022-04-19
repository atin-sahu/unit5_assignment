import { useState } from 'react'
import './App.css'
import {Button} from "antd";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button size='large' type='primary' onClick={()=>{alert("Primary Button")}} > Primary Button</Button>
      <Button size='large' onClick={()=>{alert("Default Button")}} > Primary Button</Button>
      <Button size='large' type='dashed' onClick={()=>{alert("Dashed Button")}} > Primary Button</Button>
      <Button size='large' type='text' onClick={()=>{alert("text Button")}} > Primary Button</Button>
      <Button size='large' type='link' onClick={()=>{alert("Link Button")}} > Primary Button</Button>
    </div>
  )
}

export default App
