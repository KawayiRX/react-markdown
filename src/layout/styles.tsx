import styled, { keyframes } from 'styled-components'
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

const move = keyframes`
0%,
  100%{
    background-position-x: left;
  }
  50%{
    background-position-x: right;
  }
`

export const CustomHeader = styled(Header)`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
  background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left center/400% 400%;
  font-weight: bold;
  font-size: 100px;
  color: #fff;
  animation: ${move} 10s infinite;
  .slider {
    background: transparent;
    border-bottom: none;
    height: 100%;
    .ant-menu-item-selected a {
      color: #fff;
    }
  }
`
