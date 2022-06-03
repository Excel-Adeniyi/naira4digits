import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons'
import './index.css';
import App from './App';
import Navbar from './component/Navbar';
import BottomNav from './component/BottomNav';

library.add(
  fab, fas
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <BottomNav />
  </React.StrictMode>
);


