import React from 'react';
import {BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';


import './App.css';
import Content from './component/content';
import Dashboard from './component/dashboard/dashboard';
import { GiftCard } from './component/Interface';
import Login from './component/login/login';



const App: React.FC = () => {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path={'/'} element={<Content/>} />
      <Route path={'/Login'} element={<Login/>} />
      <Route path={'/Dashboard'} element={<Dashboard/>}/>
      <Route path={ '/GiftCard' } element={<GiftCard/>} />
      </Routes>
     </Router>

    </div>
  );
}

export default App;
