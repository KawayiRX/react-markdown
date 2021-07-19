# React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。

```jsx live=true noInline=true

const Wrapper = ({ children }) => (
  <div style={{
    width: '100%',
    padding: '2rem'
  }}>
    {children}
  </div>
)

const Title = () => (
  <h3 style={{ color: 'palevioletred' }}>
    Hello World!
  </h3>
)

render(
  <Wrapper>
    <Title />
    <Button type="primary">Button</Button>
  </Wrapper>
)

```