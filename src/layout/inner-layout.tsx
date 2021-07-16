import React from 'react'
import { Layout } from 'antd'
import Menu from 'components/menu'
import { RouteTypes } from 'config/routes'

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
            <Content style={{ background: "#fff" }}>{children}</Content>
        </Layout>
    )
}

export default InnerLayout