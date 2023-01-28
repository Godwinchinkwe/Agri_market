import React from 'react'
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div>
      <Router>
    <Header/>
    <Routes>
          <Route path='/' element={<Landing/>} />
          
          

        </Routes>
      </Router>
    </div>
  )
}

export default App