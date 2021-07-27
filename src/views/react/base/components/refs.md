import {Text} from 'components/styled'

** Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。**

- 在 react 的数据流中，<Text type="danger">Props</Text>是父子组件交互的唯一方式，要修改一个子组件需要使用新的<Text type="danger">Props</Text>去重新渲染它。 有时候需要修改 DOM 元素的时候可以用到 refs

- <Text type="danger" strong>需要操作 DOM 元素的时候再去使用 refs, 避免使用 refs 来做任何可以通过声明式实现来完成的事情。</Text>

  - 管理焦点，文本选择或媒体播放。
  - 触发强制动画。
  - 集成第三方 DOM 库。

```jsx render=true
class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.ref = createRef();
  }

  componentDidMount() {
    // 可以通过ref的current去访问DOM
    console.log(this.ref, "Sssssssssss");
  }

  render() {
    return <div ref={this.ref}>sss</div>;
  }
}

render(<RefsDemo />);
```

- ref 的值根据节点的类型而有所不同

  - 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
  - 当 ref 属性用于自定义 class 组件时，ref 对象接收组件的<Text type="warning" strong>挂载实例</Text>作为其 current 属性。
  - <Text type="danger">你不能在函数组件上使用 ref 属性，因为他们没有实例。</Text>

- <Text strong type="danger">React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。</Text>

- 在函数组件上使用 refs 需要 forwardRef 配合 useImperativeHandle
- <Text type="warning" strong>你可以在函数组件内部使用 ref 属性，只要它指向一个 DOM 元素或 class 组件：</Text>

```jsx render=true
const Func = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      addCount: () => setCount(count + 1),
    }),
    [count]
  );

  return <div ref={ref}>{count}</div>;
});

const App = () => {
  const func = useRef();

  return (
    <>
      <Func ref={func} />
      <Button onClick={() => func.current.addCount()}>add</Button>
    </>
  );
};

render(<App />);
```
