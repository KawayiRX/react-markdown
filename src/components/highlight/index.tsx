import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight from 'components/highlight/highlight'
import { H1, H2 } from 'components/highlight/styles'

const components = {
    h2: (props: any) => <H2 {...props} />,
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