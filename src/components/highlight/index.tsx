import React from 'react'
import { Typography } from 'antd'
import { MDXProvider, Components } from '@mdx-js/react'
import Highlight from 'components/highlight/highlight'
import { Li, Td, Link, Em } from 'components/highlight/styles'

const { Title, Text } = Typography

const components: Components = {
  h1: (props) => <Title level={5} {...props} />,
  h2: (props) => <Title level={4} {...props} />,
  h3: (props) => <Title level={3} {...props} />,
  h4: (props) => <Title level={2} {...props} />,
  h5: (props) => <Title level={1} {...props} />,
  li: (props) => <Li {...props} />,
  p: (props) => <Text {...props} style={{ margin: '10px 0' }} />,
  code: (props: any) => <Highlight {...props} />,
  td: (props) => <Td {...props} />,
  a: (props) => <Link {...props} />,
  em: (props) => <Em {...props} />
}

const HighlightLayout: React.FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default HighlightLayout
