import React from 'react'
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import MarketPlace from "./Components/MarketPlace/MarketPlace";
import Cart from "./Components/Cart/Cart"
import SignUp from "./Components/Form/SignUp/SignUp"
import Login from "./Components/Form/Login/Login"
import Choose from './Components/Form/Decision/Choose';

function App() {
  return (
    <div className='App'>
      
      <Router>
      <Header/>
    <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/MarketPlace' element={<MarketPlace/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Choose' element={<Choose/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App