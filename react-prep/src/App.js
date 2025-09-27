// src/App.js

import React from 'react';
import './App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList';

function App() {

  const [users, setUsers] = React.useState([
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
  ]);

  const addUser = (userName) => {
    const newUser = {
      // id: Date.now(), // 使用时间戳作为简单的唯一 ID
      // id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // 确保 ID 唯一且递增
      id: Math.max(0, ...users.map(u => u.id)) + 1, // 确保 ID 唯一且递增
      name: userName
    };
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <h1>添加新用户</h1>
      <AddUserForm onAddUser={addUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;