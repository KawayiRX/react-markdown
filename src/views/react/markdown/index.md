export const Lines = () => (
    <div style={{margin: 30}}></div>
)

# react集成markdown

* 插件
  - react-markdown [https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)

<Lines/>

* 语法高亮

```jsx
    import React, { useEffect } from "react";
    import {
    PrismLight as SyntaxHighlighter,
    SyntaxHighlighterProps
    } from "react-syntax-highlighter";
    import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
    import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
    import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
    import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
    import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
    import git from 'react-syntax-highlighter/dist/esm/languages/prism/css';
    import css from 'react-syntax-highlighter/dist/esm/languages/prism/git';
    import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx';
    import shell from 'react-syntax-highlighter/dist/esm/languages/prism/shell-session';

    interface HighlighterProps extends SyntaxHighlighterProps {
        theme?: typeof darcula;
        language: string;
    }

    const Highlighter: React.FC<HighlighterProps> = (props) => {
    const { language, children, theme, ...rest } = props;

    useEffect(() => {
        SyntaxHighlighter.registerLanguage('jsx', jsx)
        SyntaxHighlighter.registerLanguage('js', js)
        SyntaxHighlighter.registerLanguage('ts', ts)
        SyntaxHighlighter.registerLanguage('tsx', tsx)
        SyntaxHighlighter.registerLanguage('git', git)
        SyntaxHighlighter.registerLanguage('css', css)
        SyntaxHighlighter.registerLanguage('nginx', nginx)
        SyntaxHighlighter.registerLanguage('shell', shell)
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
```

<Lines/>

* markdow组件封装

```jsx
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
```

<Lines />

* 使用
```jsx
    import React from 'react'
    import BaseMarkdown from "components/base-markdown";
    import md from '../test.md'
    import { useMarkdown } from 'hooks';

    const BaseNpm = () => {
        const { markdown } = useMarkdown(md)
        return (
            <BaseMarkdown markdown={markdown} />
        )
    }

    export default BaseNpm
```