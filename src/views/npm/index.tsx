import React from 'react'
import BaseMarkdown from "components/base-markdown";

export default function App() {
  const markdown = `
  ### Here is some JavaScript code:

  `;

  return <BaseMarkdown markdown={markdown} />;
}
