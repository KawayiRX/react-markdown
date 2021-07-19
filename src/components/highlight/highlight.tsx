import React from "react";
import styled from 'styled-components';
import Highlight, { defaultProps } from "prism-react-renderer";
import { transform } from '@babel/core'
import { mdx } from '@mdx-js/react'
import { Button } from 'antd'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import theme from "prism-react-renderer/themes/duotoneLight";
import provideTheme from 'prism-react-renderer/themes/palenight'
import { Pre, Line, LineContent, LineNo, Preview, Editor, PreviewContainer } from 'components/highlight/styles'

interface IHighlightProps {
    children?: string;
    className?: string;
    live?: boolean;
    render?: boolean;
    noInline?: boolean;
}

const IHighlight: React.FC<IHighlightProps> = props => {

    const { className = '', live, children = "", render, noInline } = props;

    const lang: any = className.replace(/language-/, '')

    if (live) {
        return (
            <div style={{ marginTop: 20 }}>
                <LiveProvider
                    theme={provideTheme}
                    style={{ border: "none", scrollbarWidth: "none" }}
                    code={children.trim()}
                    noInline={noInline}
                    transformCode={code => {
                        const transformed = transform(code, {
                            plugins: [
                                require('@babel/plugin-syntax-jsx'),
                                [
                                    require("@babel/plugin-proposal-class-properties"),
                                    { loose: true }
                                ]
                            ]
                        })?.code
                        return transformed || ''
                    }}
                    scope={{ mdx, styled, Button }}
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