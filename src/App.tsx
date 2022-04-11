import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signin';
import About from './pages/about';

function App() {
  return (
    <div className="App">
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
