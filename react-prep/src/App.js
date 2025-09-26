
import './App.css';
import Greeting from './Greeting'; // 导入我们新建的 Greeting 组件
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>我的第一个组件化应用</h1>
      <Greeting name="Schromeo" message="这是通过 Props 传递过来的消息！" />
      <Greeting name="Cisco" message="祝你面试顺利！" />
      <Counter /> {/* 使用 Counter 组件 */}
      <Counter /> {/* 使用 Counter 组件 */}
    </div>
  );
}


export default App;
