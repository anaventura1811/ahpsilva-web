import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
