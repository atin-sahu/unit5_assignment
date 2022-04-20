
import './App.css'
import { Card } from './components/Body/Card'
import { Navbar } from './components/Navbar'
import { useContext } from 'react'
import { LangContext } from './Contexts/LangContext'

function App() {
  const {langChange} = useContext(LangContext);


  return (
    <>
    <button onClick={()=>{langChange()}}>toggle language</button>
      <Navbar></Navbar>
      <Card></Card>
    </>
  )
}

export default App
