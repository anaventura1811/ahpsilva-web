import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
