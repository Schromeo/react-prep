// src/App.js

import React from 'react';
import './App.css';
import UserList from './UserList'; // 导入 UserList 组件

function App() {
  return (
    <div className="App">
      <h1>从后端 API 获取数据</h1>
      <UserList />
    </div>
  );
}

export default App;