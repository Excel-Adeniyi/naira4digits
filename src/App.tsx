import React from 'react';
import {BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';


import './App.css';
import Content from './component/content';
import Login from './component/login/login';



const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path={'/'} element={<Content/>} />
      <Route path={'/Login'} element={<Login/>} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
