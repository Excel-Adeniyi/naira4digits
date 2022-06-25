import React from 'react';
import {BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';


import './App.css';
import Content from './component/content';
import Dashboard from './component/dashboard/dashboard';
import Login from './component/login/login';



const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path={'/'} element={<Content/>} />
      <Route path={'/Login'} element={<Login/>} />
      <Route path={'/Dashboard'} element={<Dashboard/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
