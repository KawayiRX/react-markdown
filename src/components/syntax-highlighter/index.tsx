import React, { useEffect } from "react";
import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps
} from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import git from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/git';
import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx';

interface HighlighterProps extends SyntaxHighlighterProps {
  theme?: typeof darcula;
  language: string;
}

const Highlighter: React.FC<HighlighterProps> = (props) => {
  const { language, children, theme, ...rest } = props;
  console.log(language);

  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx)
    SyntaxHighlighter.registerLanguage('js', js)
    SyntaxHighlighter.registerLanguage('git', git)
    SyntaxHighlighter.registerLanguage('css', css)
    SyntaxHighlighter.registerLanguage('nginx', nginx)
  }, [])

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
