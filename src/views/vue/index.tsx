import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from 'components/highlight/highlight'
import HelloWorld from 'views/nginx/install/index.md'
const H1 = (props: any) => <h1 style={{ color: 'tomato' }} {...props} />

const Code = (props: any) => {
    return <CodeBlock {...props} />
}

const HighlightLayout = (props: any) => {
    console.log(props, "propspropsprops");
    return (
        <MDXProvider components={{ h1: H1, code: Code }}>
        </MDXProvider>
    )
}

export default HighlightLayout