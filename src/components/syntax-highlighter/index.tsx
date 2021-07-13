import React from "react";
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps
} from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface HighlighterProps extends SyntaxHighlighterProps {
  theme?: typeof darcula;
  language: string;
}

const Highlighter: React.FC<HighlighterProps> = (props) => {
  const { language, children, theme, ...rest } = props;

  return (
    <SyntaxHighlighter
      style={theme || darcula}
      language={language}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      {...rest}
    />
  );
};
export default Highlighter;
