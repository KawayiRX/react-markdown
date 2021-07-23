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
                return index === 1 ? <div key={item.toString()}>{`${2 + 2}表达式`}</div> : <div key={item.toString()}>{items}</div>
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