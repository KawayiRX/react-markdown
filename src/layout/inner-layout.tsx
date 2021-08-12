import React from 'react'
import { useLocation } from 'react-router'
import { Layout } from 'antd'
import Highlight from 'components/highlight'
import Anchor from 'components/Anchor'
import Menu from 'components/menu'
import { RouteTypes } from 'config/routes'
import { anchor } from 'config/anchors'
import { AnchorWrapper, CustomContent, CustomSider } from './styles'

interface InnerLayoutProps {
  route: RouteTypes
}

const InnerLayout: React.FC<InnerLayoutProps> = (props) => {
  const { route } = props

  const local = useLocation()

  return (
    <Layout>
      <CustomSider>
        <Menu routes={route.routes} mode="inline" />
      </CustomSider>
      <CustomContent>
        <Highlight {...props} />
        <AnchorWrapper>
          <Anchor anchor={anchor[local.pathname]} />
        </AnchorWrapper>
      </CustomContent>
    </Layout>
  )
}

export default InnerLayout
