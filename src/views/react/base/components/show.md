- 元素是构成 React 应用的最小单位, 描述了你在屏幕上想看到的内容
- 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。

```jsx
// 通过 ReactDOM渲染到页面
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

- ## 更新渲染
  - React 元素遵循不可变原则, 只要创建就不会再改变。所以更新 UI 的唯一途径就是生成新的元素传入 ReactDOM.render()

```jsx
function tick() {
  const Demo = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(Demo, document.getElementById("root"));
}
setInterval(tick, 1000);
```

- **React 的更新不会是全部进行更新而是只更新状态发生改变的部分。**
