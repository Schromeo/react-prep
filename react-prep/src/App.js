// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/users">用户管理</Link></li>
          </ul>
        </nav>

        <hr />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;