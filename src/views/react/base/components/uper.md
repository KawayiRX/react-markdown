- 通常，多个组件需要反映相同的 State，这时我们建议将共享状态提升到最近的共同父组件中去。

```jsx render=true
const Show = (props) => {
  return <Typography.Title>{`Props, value ${props.value}`}</Typography.Title>;
};

const Write = (props) => {
  return <Input onChange={props.handleChangeValue} value={props.value} />;
};

function BoilingVerdict() {
  const [value, setValue] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Write handleChangeValue={handleChangeValue} value={value} />
      <Show value={value} />
    </>
  );
}

render(<BoilingVerdict />);
```
