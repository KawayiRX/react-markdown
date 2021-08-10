import {Alert, Typography} from 'antd'

- 组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

<Alert
message="注意： 组件名称必须以大写字母开头。"
description="React 会将以小写字母开头的组件视为原生 DOM 标签。"
type="warning"
showIcon
style={{width: "50%"}}
/>

```jsx live=true noInline=true
const Demo = () => {
  return <div>Demo</div>
}

render(<Demo />)
```

- React 中创建组件分为两种方式（class, function）
- 最初 16.8 以前创建组件的方式都是 class，因为函数组件没有自己的状态，通常函数组件都是作为 UI 组件被使用（修改 UI 通过 Props）。
- class 组件的状态挂载在 this 上
- 注意: class 上定义的函数默认 this 并没有指向当前组件需要手动绑定 this

```jsx render=true noInline=true
function Demo(props) {
  // 当前组件没有自身状态， props进行渲染
  return (
    <Button type="primary" onClick={() => props.clear()}>
      {props.count || 0}
    </Button>
  )
}

class ClassComponent extends React.Component {
  constructor() {
    state = {
      count: 0,
      timer: null
    }
  }

  // 即将弃用 组件即将渲染 16采用fiber架构后这个生命周期处于调和阶段，这个阶段的可以中断，也就是会执行多次这个生命周期
  /*
        react16 以后做了很大的改变，对 diff 算法进行了重写，从总体看，主要是把一次计算，改变为多次计算，在浏览器有高级任务时，暂停计算。
    */
  // UNSAFE_componentWillMount(){}
  // UNSAFE_componentWillUpdate(nextProps, nextState){}

  static getDerivedStateFromError(error) {
    // 当组件发生错误的时候调用 可以在这里处理错误逻辑一般用于错误页面展示
  }

  // 只有props改变的时候会调用 获取从props传入的值一般用于赋值state 16.8以后替换componentWillReceiveProps生命周期
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return {}
  }

  // constructor() {
  //     // 第三种  构造函数绑定this
  //     this.clear = this.clear.bind(this)
  // }

  // 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。 替换 componentWillUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return {}
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  clear() {
    console.log(this) // 当前this指向的事Demo组件 需要手动绑定this
    // 1. clear={this.clear.bind(this)}
    clearInterval(this.timer)
  }

  // 2.使用箭头函数
  // clear = () => {
  //     clearInterval(this.timer);
  // }

  render() {
    return <Demo count={this.state.count} clear={this.clear.bind(this)} />
  }
}

render(<ClassComponent />)
```

- 自 16.8React 新增 Hooks 特性之后函数组件随着成为主流（函数组件也可以通过 hooks 管理自己内部状态）。

```jsx render=true noInline=true
const HooksA = () => {
  const [message, setMessage] = useState('hello')

  return (
    <Button onClick={() => setMessage('world')} type="primary">
      {message}
    </Button>
  )
}

render(<HooksA />)
```

- 组件修改 state 只能通过 setState 这个方法去修改，不能直接去修改
- State 的更新是异步的, 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
- 注意：由于 props 和 state 的更新可能会异步进行， 所以不要依赖他们的值进行更新。
- State 的更新会被合并，React 会把修改的 state 进行合并然后统一更新，所以当修改多次同一属性可能只会更新一次 UI。

```jsx render=true
class Demo extends React.Component {
  constructor() {
    this.state = {
      count: 0
    }
  }

  handleChangeCount() {
    console.log(this.state)
    // 更新对象被合并 （类似于 {...{{count: this.state.count +1}, {count: this.state.count +1}, {count: this.state.count +1}}}）
    // 所以最终只会修改一次
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <Button onClick={this.handleChangeCount.bind(this)} type="primary">
        {this.state.count}
      </Button>
    )
  }
}

render(<Demo />)
```

- class 纯组件 PureComponent
  - 由于每次 react 渲染都会更新 UI 但是有些组件的 state 和 props 并没有发生改变所以它是不需要进行渲染
  - react 组件是否渲染需要开发者通过 shouldComponentUpdate 这个生命周期进行判断,默认情况下是只要 state 或者 props 更新就会重新渲染组件
  - 通过 PureComponent 组件就会对 props 进行浅比较，当 props 没有发生改变的时候不需要更新组件
  - 函数组件可以通过 memo 实现相同效果

```jsx live=true noInline=true
// child1只要父组件更新它也会更新
class Child1 extends Component {
  render() {
    console.log('child1, render')
    return <div>child1</div>
  }
}

// child2使用了PureComponent对传入props进行了浅比较， 它没有依赖props自身状态也没发生变化 所以不会重新进行渲染
class Child2 extends PureComponent {
  render() {
    console.log('child2, render')
    return <div>child2</div>
  }
}

const Child3 = memo(() => {
  console.log('child3, render')
  return <div>child3</div>
})

class Demo extends Component {
  constructor() {
    this.state = {
      message: 'hello'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 当返回了false那就无论如何也不会对UI进行更新
    return false
  }

  handleChangeMessage() {
    this.setState(
      {
        message: 'world'
      },
      () => {
        alert(this.state.message)
      }
    )
  }

  render() {
    const { message } = this.state

    return (
      <>
        <Button type="primary" onClick={this.handleChangeMessage.bind(this)}>
          {message}
        </Button>
        <Child1 />
        <Child2 />
        <Child3 />
      </>
    )
  }
}

render(<Demo />)
```

- 高阶组件(HOC)

  - 高阶组件是 React 受函数式编程影响而实现的一种组件逻辑复用的设计模式。
  - ** 高阶组件是参数为组件，返回值为新组件的函数。HOC 是一个纯函数，不会对传入的组件进行修改，只是透传 Props**

- <Typography.Text type="danger" strong>不要修改原始组件。使用组合去增加行为</Typography.Text>

```jsx
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function (prevProps) {
    console.log('Current props: ', this.props)
    console.log('Previous props: ', prevProps)
  }
  // 返回原始的 input 组件，暗示它已经被修改。
  return InputComponent
}

// 每次调用 logProps 时，增强组件都会有 log 输出。这样虽然可以实现，但是之后使用的相同生命周期会被覆盖。
const EnhancedComponent = logProps(InputComponent)

// 不应该直接对传入组件进行修改 而是使用组合x形成一个新的组件

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props)
      console.log('Previous props: ', prevProps)
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />
    }
  }
}
```

<Alert
message="注意： "
description="React 中组件的 Props 属性是只读的，不能修改 Props 的属性（React 数据流向是从上至下）, Props 的 默认值是 true"
type="warning"
showIcon
style={{width: "50%"}}
/>
