import React from 'react'
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import Detail from './Components/Details/Detail';


function App() {
  return (
    <div className='App'>
      
      <Router>
      <Header/>
    <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/MarketPlace' element={<MarketPlace/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Choose' element={<Choose/>} />
          <Route path='/User' element={<User />}/>
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/Password' element={<Password/>} />
          <Route path='/Resetpassword' element={<Resetpassword/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Detail:_id' element={<Detail/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App