
import './App.css'
import { About } from './components/About'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import {Routes, Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { User } from './components/User'
import { Singleusr } from './components/Singleusr'
import { Allowlogin } from './components/Allowlogin'
import { Login } from './components/Login'

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route path={"/users"} element={<User/>}></Route>
        <Route path={"/users/:id"} element={<Allowlogin><Singleusr/></Allowlogin>}></Route>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
