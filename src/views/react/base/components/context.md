* **在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的但是如果有一些全局共享状态如果逐层传递就很复杂。**
```jsx render=true
class App extends Component {
    render() {
        return <Toolbar theme="primary" />;
    }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button type={this.props.theme} />;
  }
}

render (
    <App />
)

```