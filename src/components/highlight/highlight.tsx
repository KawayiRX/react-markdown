import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { mdx } from '@mdx-js/react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from "prism-react-renderer/themes/duotoneLight";
import provideTheme from 'prism-react-renderer/themes/palenight'
import { Pre, Line, LineContent, LineNo, Preview, Editor, PreviewContainer } from 'components/highlight/styles'

interface IHighlightProps {
    children?: string;
    className?: string;
    live?: boolean;
    render?: boolean;
}


const IHighlight: React.FC<IHighlightProps> = props => {

    const { className = '', live, children = "", render } = props;

    const lang: any = className.replace(/language-/, '')

    if (live) {
        return (
            <div style={{ marginTop: 20 }}>
                <LiveProvider
                    theme={provideTheme}
                    style={{ border: "none", scrollbarWidth: "none" }}
                    code={children.trim()}
                    transformCode={code => '/** @jsx mdx tsx*/' + code}
                    scope={{ mdx }}
                >
                    <PreviewContainer>
                        <Editor>
                            <LiveEditor />
                            <LiveError />
                        </Editor>
                        <Preview>
                            <LivePreview />
                        </Preview>
                    </PreviewContainer>
                </LiveProvider>
            </div>
        )
    }

    if (render) {
        return (
            <div style={{ marginTop: '40px' }}>
                <LiveProvider code={children}>
                    <LivePreview />
                </LiveProvider>
            </div>
        )
    }

    return (
        <Highlight {...defaultProps} code={children} language={lang} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.slice(0, tokens.length - 1).map((line, i) => {
                        return (
                            <Line {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </LineContent>
                            </Line>
                        )
                    })}
                </Pre>
            )}
        </Highlight>
    )
}
export default IHighlight