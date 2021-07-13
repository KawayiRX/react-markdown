import BaseMarkdown from "components/base-markdown";

export default function App() {
  const markdown = `# Here is some JavaScript code:
  ~~~js
  console.log('It works!')
  ~~~
  `;

  return <BaseMarkdown markdown={markdown} />;
}
