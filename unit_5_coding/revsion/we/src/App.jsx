import { Route, Routes } from "react-router-dom"
import { Edit } from "./components/edit/Edit"
import { Home } from "./components/home/Home"
import { Sidebar } from "./components/sidebar/Sidebar"
import { Signin } from "./components/signin/Signin"
import { Signup } from "./components/signup/Signup"
import { Summary } from "./components/summary/Summary"


function App() {

  return (
    <div>

    <Sidebar></Sidebar>
    {/* <Home></Home> */}
    {/* <Summary></Summary> */}
    {/* <Edit></Edit> */}
    <Routes>
      <Route path="/" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/summary' element={<Summary></Summary>}></Route>
      <Route path='/edit' element={<Edit></Edit>}></Route>
    </Routes>
    </div>
  )
}

export default App
