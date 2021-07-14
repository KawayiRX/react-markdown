import BaseMarkdown from "components/base-markdown";

export default function App() {
  const markdown = `# Here is some JavaScript code:
  ~~~js
  npm
  ~~~
  `;

  return <BaseMarkdown markdown={markdown} />;
}
