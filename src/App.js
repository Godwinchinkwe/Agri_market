import  { useState } from 'react'
import Header from './Components/Header/Header';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import MarketPlace from "./Components/MarketPlace/MarketPlace";
import Cart from "./Components/Cart/Cart"
// import SignUp from "./Components/Form/SignUp/SignUp"
import Login from "./Components/Form/Login/Login"
import Choose from './Components/Form/Decision/Choose';
import Password from './Components/Form/Password/Password';
import Resetpassword from './Components/Form/Password/Resetpassword';
import About from './Components/Landing/About/About';
import User from './Components/Form/Decision/User/User';
import Admin from './Components/Form/Decision/Admin/Admin'
import Dashboard from './Components/DashBoard/Dashboard';
import Addpage from './Components/DashBoard/Addpage';
import Detail from './Components/Details/Detail';
import Emptycart from './Components/Cart/Emptycart';
import Verify from './Components/Form/Decision/User/Verify';
import Subhead from './Components/Subhead/Subhead';
// import { ThemeContext } from "../src/Components/API/Context"


function App() {
  const  [display, setDisplay] = useState(true)

  const toggle = () => {
    setDisplay(false)
  }

   const changeToggle = ()=> {
    setDisplay(true)
   }
  return (
    <div className='App'>
      
      <Router>
      {display ? <Header /> : null}
      {/* <Header /> */}
    <Routes>
          <Route path='/' element={<Landing props={changeToggle}/>} />
          <Route path='/MarketPlace' element={<MarketPlace/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Login' element={<Login props={toggle}/>} />
          <Route path='/Choose' element={<Choose/>} />
          <Route path='/User' element={<User />}/>
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/Password' element={<Password/>} />
          <Route path='/Resetpassword' element={<Resetpassword/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Detail/:_id' element={<Detail/>} />
          <Route path='/Emptycart' element={<Emptycart/>} />
          <Route path='/Addpage' element={<Addpage/>} />
          <Route path='/Verify/:id' element={<Verify/>} />
          <Route path='/Subhead' element={<Subhead/>} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App