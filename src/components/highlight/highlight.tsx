import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from "prism-react-renderer/themes/github";
import { Pre, Line, LineContent, LineNo } from 'components/highlight/styles'

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
            <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
                <LiveProvider
                    code={children.trim()}
                    transformCode={code => '/** @jsx mdx */' + code}
                >
                    <LivePreview />
                    <LiveEditor />
                    <LiveError />
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