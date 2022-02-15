// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { Routes ,Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Box2 from './components/Middle';
import News from "./components/News";
import Homepage from './components/Homepage';

const PageNOtFound = () =>(
  <div> 404!</div>
)

function App() {
  return (
    <div className='box1'>
     <Router>
        <Routes>

          <Route path="Homepage" element={<Homepage />} />
          <Route path="News" element={<News />} />

        </Routes>
        
      </Router>
      {/* <Header /> */}
      
    </div>
  ) 
};

export default App;

