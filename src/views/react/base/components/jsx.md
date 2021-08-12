```jsx live=true noInline=true
class Demo2 extends Component {
  render() {
    return <h1>Hello, world!1</h1>
  }
}

render(
  <>
    {/* <Demo/>, */}
    <Demo2 />
  </>
)
```

# JSX (是 JavaScript 的语法扩展, 用来描述 UI, 具有 JavaScript 的全部功能)

```jsx render=true noInline=true
const Demo = () => {
  const hello = 'Hello, world!'

  // 嵌入表达式 可以是任意有效的
  const items = <h1>{hello}</h1>

  const arr = [1, 2, 3]
  return (
    <>
      {arr.map((item, index) =>
        index === 1 ? (
          <div key={item.toString()}>{`${2 + 2}表达式`}</div>
        ) : (
          <div key={item.toString()}>{items}</div>
        )
      )}
    </>
  )
}

render(<Demo />)
```

# 为什么使用 JSX？

- React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合
- 比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。
- React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为 “组件” 的松散耦合单元之中。

# JSX 特定属性

- 可以通过使用引号，来将属性值指定为字符串字面量：
- 也可以使用大括号，来在属性值中插入一个 JavaScript 表达式

```jsx
// 在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
const element = <div tabIndex="0"></div>
const element = <img src={user.avatarUrl}></img>
```

# JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>

// 编译：
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
// 如果没有子节点,可以自闭合
<div className="sidebar" />

// 编译：
React.createElement(
  'div',
  {className: 'sidebar'}
)
```

- **JSX 标签的第一部分指定了 React 元素的类型。**

  - 如果是自定义组件，首字母必须大写，因为这些标签会直接被编译为对应命名变量的对象引用。

- **React 必须在作用域内（React17 后 JSX 改为运行时编译可以省去这一步）**
- **在 JSX 类型中使用点语法**

```jsx
import React from 'react'

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />
}
```
