import styled from 'styled-components'
import { Layout } from 'antd'

const { Content, Sider, Header } = Layout

export const AnchorWrapper = styled.div`
  position: fixed;
  right: 5%;
  top: 20%;
`

export const CustomContent = styled(Content)`
  background: #fff;
  padding-left: 20px;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`

export const CustomSider = styled(Sider)`
  background: #fff;
`

export const OuterContent = styled(Content)`
  margin: 24px 16px;
  background: #fff;
  padding: 24;
  min-height: 280;
`

export const CustomHeader = styled(Header)`
  background: #fff;
`
