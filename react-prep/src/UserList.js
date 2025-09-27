// src/UserList.js

import React from 'react';
import Greeting from './Greeting';

function UserList({ users }) {
  return (
    <div>
      <h2>用户列表</h2>
      {users.length === 0 ? (
        <p>没有用户数据,请在上面添加用户。</p>
      ) : (
        <ul>
          {/* 修正一和三 */}
          {users.map(user => (
            <li key={user.id}>
              {/* 把 Greeting 组件放在 li 内部来展示用户信息 */}
              <Greeting 
                name={user.name} 
                message={`ID: ${user.id}`} // 使用存在的数据 (id)，而不是不存在的 (username)
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;