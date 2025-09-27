// src/App.js

import React from 'react';
import './App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <h1>从后端 API 获取数据</h1>
      <AddUserForm />
      <hr />
      <UserList />
    </div>
  );
}

export default App;