import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
// import codesandbox from 'remark-codesandbox'
import rehypeRaw from "rehype-raw";
import { SyntaxHighlighterProps } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Highlighter from "../syntax-highlighter";

interface BaseMarkdownProps {
  theme?: typeof tomorrow;
  source?: any;
  markdown: string;
}

const BaseMarkdown: React.FC<BaseMarkdownProps> = (props) => {
  const { markdown, theme = tomorrow } = props;
  const components = {
    code({
      node,
      inline,
      className,
      children,
      ...props
    }: SyntaxHighlighterProps) {
      const match = /language-(\w+)/.exec(className || "") || [];
      return (
        <Highlighter
          theme={theme}
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      );
    }
  };

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={components}
      children={markdown}
      rehypePlugins={[rehypeRaw]}
    />
  );
};

export default BaseMarkdown;
