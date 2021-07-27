** 也是 react 中一种逻辑复用方案 **

- 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。

```jsx render=true
const MouseTracker = (props) => {
  const [state, setState] = useState({});

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <h1>移动鼠标!</h1>
      {props.render(state)}
    </div>
  );
};

const Demo = () => {
  return (
    <MouseTracker
      render={(state) => {
        return (
          <p>
            当前的鼠标位置是 ({state.x}, {state.y})
          </p>
        );
      }}
    >
      sss
    </MouseTracker>
  );
};

render(<Demo />);
```
