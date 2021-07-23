import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight from 'components/highlight/highlight'
import { H2, Li, P } from 'components/highlight/styles'

const components = {
    h2: (props: any) => <H2 {...props} />,
    li: (props: any) => <Li {...props} />,
    P: (props: any) => <P {...props} />,
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