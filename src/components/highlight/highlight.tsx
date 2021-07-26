import React from "react";
import styled from 'styled-components';
import Highlight, { defaultProps } from "prism-react-renderer";
import { transform } from '@babel/core'
import { mdx } from '@mdx-js/react'
import AntDesign from './ant-design'
import { LiveEditor } from 'react-live'
import provideTheme from 'prism-react-renderer/themes/palenight'
import { Pre, Line, LineContent, LineNo, StyledEditor, StyledError, StyledPreview, StyledProvider, LiveWrapper, PreWrapper } from 'components/highlight/styles'

interface IHighlightProps {
    children?: string;
    className?: string;
    live?: boolean;
    render?: boolean;
    noInline?: boolean;
}

const IHighlight: React.FC<IHighlightProps> = props => {

    const { className = '', live, children = "", render, noInline = true } = props;

    const lang = className.replace(/language-/, '')

    if (live || render) {
        return (
            <StyledProvider
                theme={provideTheme}
                style={{ border: "none" }}
                code={children.trim()}
                noInline={noInline}
                disabled={!!render}
                transformCode={code => {
                    try {
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
                    } catch (error) {
                        return ''
                    }
                }}
                scope={{ mdx, styled, ...AntDesign, ...React }}
            >
                <LiveWrapper>
                    <StyledEditor>
                        <LiveEditor />
                    </StyledEditor>
                    <StyledPreview />
                </LiveWrapper>

                <StyledError />
            </StyledProvider>
        )
    }

    return (
        <Highlight {...defaultProps} code={children} language={lang} theme={provideTheme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    <PreWrapper>
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
                    </PreWrapper>
                </Pre>
            )}
        </Highlight>
    )
}
export default IHighlight