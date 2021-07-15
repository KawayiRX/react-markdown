import React from 'react'
import BaseMarkdown from "components/base-markdown";
import md from './test.md'
import { useMarkdown } from 'hooks';

export default function App() {
  const { markdown } = useMarkdown(md)

  return <BaseMarkdown markdown={markdown} />;
}
