* 通常，多个组件需要反映相同的State，这时我们建议将共享状态提升到最近的共同父组件中去。
```jsx render=true

const Show = props => {
    return <Typography.Text danger>{`Props message ${props.message}`}</Typography.Text>
}

const Write = props => {

    return <Input />
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

render(
    <BoilingVerdict />
)

```