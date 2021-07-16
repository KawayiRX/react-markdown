import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import image from 'remark-images'
import { SyntaxHighlighterProps } from "react-syntax-highlighter";

import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Highlighter from "../syntax-highlighter";

interface BaseMarkdownProps {
  theme?: typeof base16AteliersulphurpoolLight;
  source?: any;
  markdown: string;
}

const BaseMarkdown: React.FC<BaseMarkdownProps> = (props) => {
  const { markdown, theme = base16AteliersulphurpoolLight } = props;
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
      remarkPlugins={[gfm, image]}
      linkTarget="_blank"
      components={components}
      children={markdown}
      rehypePlugins={[rehypeRaw]}
    />
  );
};

export default BaseMarkdown;
