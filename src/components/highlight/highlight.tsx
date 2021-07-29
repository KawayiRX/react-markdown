import React, { useMemo } from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { mdx } from '@mdx-js/react';
import { LiveEditor } from 'react-live';
import provideTheme from 'prism-react-renderer/themes/github';
import Clipboard from 'clipboard';
import {
  Pre,
  Line,
  LineContent,
  LineNo,
  StyledEditor,
  StyledError,
  StyledPreview,
  StyledProvider,
  LiveWrapper,
  PreWrapper,
  Copy,
} from 'components/highlight/styles';
import * as AntDesign from './ant-design';

interface IHighlightProps {
  children?: string;
  className?: string;
  live?: boolean;
  render?: boolean;
  noInline?: boolean;
}

const IHighlight: React.FC<IHighlightProps> = (props) => {
  const {
    className = '', live, children = '', render, noInline = true,
  } = props;

  const lang: any = className.replace(/language-/, '');

  const CopyButton = useMemo(() => (
    <Copy
      className="copy"
      data-clipboard-text={children}
      onClick={() => {
        const clipboard = new Clipboard('.copy');
        clipboard.on('success', (e) => {
          AntDesign.message.success('复制成功');
          e.clearSelection();
          clipboard.destroy();
        });

        clipboard.on('error', () => {
          AntDesign.message.error('复制失败');
        });
      }}
    >
      {`${lang} 代码复制`}
    </Copy>
  ), [children]);

  if (live || render) {
    return (
      <StyledProvider
        theme={provideTheme}
        style={{ border: 'none' }}
        code={children.trim()}
        noInline={noInline}
        disabled={!!render}
        // transformCode={(code) => {
        //   try {
        //     const transformed = transform(code, {
        //       plugins: [
        //         require('@babel/plugin-syntax-jsx'),
        //         [
        //           require('@babel/plugin-proposal-class-properties'),
        //           { loose: true },
        //         ],
        //       ],
        //     })?.code;
        //     return transformed || '';
        //   } catch (error) {
        //     return '';
        //   }
        // }}
        scope={{
          mdx,
          styled,
          ...AntDesign,
          ...React,
        }}
      >
        <LiveWrapper>
          <StyledEditor>
            {CopyButton}
            <LiveEditor />
          </StyledEditor>
          <StyledPreview />
        </LiveWrapper>
        <StyledError />
      </StyledProvider>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={lang}
      theme={provideTheme}
    >
      {({
        className: classs,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Pre className={classs} style={style}>
          <PreWrapper>
            {tokens.slice(0, tokens.length - 1).map((line, i) => (
              <Line {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </PreWrapper>
          {CopyButton}
        </Pre>
      )}
    </Highlight>
  );
};
export default IHighlight;
