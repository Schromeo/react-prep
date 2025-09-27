// src/UserList.js

import React, { useState, useEffect } from 'react';
import Greeting from './Greeting';

function UserList() {
  // 1. 用 useState 创建一个 state 来存储用户列表，初始值为空数组
  const [users, setUsers] = useState([]);

  // 2. 用 useEffect 来执行获取数据的副作用
  useEffect(() => {
    // 3. 使用浏览器自带的 fetch 函数向 API 发送请求
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // 将返回的响应转换为 JSON 格式
      .then(data => {
        console.log(data); // 可以在浏览器控制台看到获取到的数据
        setUsers(data);    // 4. 将获取到的数据存入 state
      });
  }, []); // 5. 空数组表示这个 effect 只执行一次

  return (
    <div>
      <h2>用户列表</h2>
      <ul>
        {/* 6. 使用 .map() 方法遍历 users 数组并渲染列表 */}
        {users.map(user => (
          <React.Fragment key={user.id}>
            <Greeting name={user.name} message={`${user.name} - @${user.username}`} />
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default UserList;