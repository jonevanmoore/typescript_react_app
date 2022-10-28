import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Counter from './component/Counter/Counter';

function App() {
  return (
    <BrowserRouter>
    <Home/>
   
      <Routes>

        <Route path='/counter' element={<Counter/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
