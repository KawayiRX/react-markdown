import React from 'react'
import { Layout } from 'antd'
import { RouteTypes } from 'config/routes'
import Slider from 'components/menu'
import { OuterContent, CustomHeader } from './styles'

interface BasicLayoutProps {
  route: RouteTypes
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, route } = props

  return (
    <Layout style={{ height: '100%' }}>
      <CustomHeader>
        <Slider routes={route.routes} />
      </CustomHeader>
      <Layout>
        <OuterContent>{children}</OuterContent>
      </Layout>
    </Layout>
  )
}
export default BasicLayout
