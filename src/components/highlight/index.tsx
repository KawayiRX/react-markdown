import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight from 'components/highlight/highlight'
import { H1 } from 'components/highlight/styles'

const components = {
    h1: (props: any) => <H1 {...props} />,
    code: (props: any) => {
        return <Highlight {...props} />
    }
}

const HighlightLayout: React.FC = ({ children }) => {
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}

export default HighlightLayout