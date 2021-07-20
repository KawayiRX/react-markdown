import {Alert} from 'antd' 
import Copm from './components/comp.md'
import Event from './components/event.md'
import UperState from './components/uper.md'

# React 是一个用于构建用户界面的 JavaScript 库。（单项数据， 不可变数据）

* ## JSX 

```jsx live=true noInline=true

  class Demo2 extends Component {
    render () {

      return (
        <h1>Hello, world!</h1>
      )
    }
  }

  render (
    <>
      {/* <Demo/>, */}
      <Demo2/>
    </>
  )

```

* ## JSX (是JavaScript 的语法扩展, 用来描述UI, 具有 JavaScript 的全部功能)
``` jsx render=true noInline=true

    const Demo = () => {

      const hello = "Hello, world!"

      // 嵌入表达式 可以是任意有效的
      const items = <h1>{hello}</h1>;

      const arr = [1, 2, 3]
        return (
          <>
            {
              arr.map((item, index) => {
                return index === 1 ? <div>{`${2 + 2}表达式`}</div> : <div key={item.toString()}>{items}</div>
              })
            }
          </>
      )
    }

    render (
      <Demo />
    )

```

  * ## 为什么使用 JSX？
    * React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合 
    * 比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。
    * React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为 “组件” 的松散耦合单元之中。

  * ## JSX 特定属性
    * 可以通过使用引号，来将属性值指定为字符串字面量：
    * 也可以使用大括号，来在属性值中插入一个 JavaScript 表达式

```jsx
  // 在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
  const element = <div tabIndex="0"></div>;
  const element = <img src={user.avatarUrl}></img>;
```

  * ## JSX 表示对象
    * Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。  
```jsx
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  const element = React.createElement(
    'h1', // tag
    {className: 'greeting'}, // [rp[s]]
    'Hello, world!' // children
  );

  // React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象， 这是简化过的结构
  const element = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!'
    }
  };
```

# 元素渲染
 * 元素是构成React应用的最小单位, 描述了你在屏幕上想看到的内容
 * 与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。
```jsx
// 通过 ReactDOM渲染到页面
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```
 * ## 更新渲染
   * React元素遵循不可变原则, 只要创建就不会再改变。所以更新UI的唯一途径就是生成新的元素传入ReactDOM.render()
```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);  

```
  * **React的更新不会是全部进行更新而是只更新状态发生改变的部分。**

# 组件和Props
  * 组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

  <Alert
      message="注意： 组件名称必须以大写字母开头。"
      description="React 会将以小写字母开头的组件视为原生 DOM 标签。"
      type="warning"
      showIcon
  />


```jsx live=true noInline=true

const demo = () => {

  return (
    <div>Demo</div>
  )
}

render (
  <demo />
)

```

<Copm />

  * React中组件的Props属性是只读的，不能修改Props的属性（React数据流向是从上至下）
  * Props 的 默认值是**true**

# 事件处理

<Event />

# 状态提升

<UperState />