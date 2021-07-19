import React from 'react'
import { Layout } from 'antd'
import Highlight from 'components/highlight'
import Menu from 'components/menu'
import { RouteTypes } from 'config/routes'
import './index.less'

const { Sider, Content } = Layout

interface InnerLayoutProps {
    route: RouteTypes
}

const InnerLayout: React.FC<InnerLayoutProps> = props => {

    const { children, route } = props

    return (
        <Layout>
            <Sider style={{ background: "#fff" }}>
                <Menu routes={route.routes} mode="inline" />
            </Sider>
            <Content style={{ background: "#fff", paddingLeft: 20 }} className="inner-layout">
                <Highlight {...props} />
            </Content>
        </Layout>
    )
}

export default InnerLayout