// src/AddUserForm.js

import React, { useState } from 'react';

function AddUserForm() {
  // 1. 创建一个 state 来存储输入框的值，初始值为空字符串
  const [name, setName] = useState('');

  // 2. 创建一个事件处理函数来响应输入框的每次变化
  const handleNameChange = (event) => {
    // event.target.value 里包含了输入框的最新文本
    setName(event.target.value);
  };

  // 3. 创建一个处理表单提交的函数
  const handleSubmit = (event) => {
    // 阻止表单提交时的默认行为（即刷新页面）
    event.preventDefault(); 

    // 在这里，我们可以用 name state 里的数据做些事情
    // 现在只是简单地弹出一个提示
    alert(`一个新用户被添加了：${name}`);

    // 提交后清空输入框，提升用户体验
    setName('');
  };

  return (
    // 5. 将 handleSubmit 绑定到表单的 onSubmit 事件
    <form onSubmit={handleSubmit}>
      <h2>添加新用户</h2>
      <input 
        type="text" 
        placeholder="输入用户名"
        value={name}         // 4. 输入框的值完全由 name state 控制
        onChange={handleNameChange} // 每次输入变化都调用 handleNameChange
      />
      <button type="submit">添加</button>
    </form>
  );
}

export default AddUserForm;