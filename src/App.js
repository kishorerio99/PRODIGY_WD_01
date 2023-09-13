import React from 'react';
import './App.css';
import Header from '../src/components/header/header';
import Homepage from './pages/homepage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About/About';
function App() {
  return (
  <div>
    {/* <Homepage/> */}
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/about' element={<About/>} />
       </Routes>
    </BrowserRouter>
  </div>
     
  );
  
}

export default App;
