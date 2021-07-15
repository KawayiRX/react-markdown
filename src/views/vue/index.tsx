import React from 'react'
import BaseMarkdown from "components/base-markdown";

export default function App() {
  const markdown = `##### Here is some JavaScript code:
  ~~~js
  vue
  ~~~
  `;

  return <BaseMarkdown markdown={markdown} />;
}
