import React from 'react'
// import BaseMarkdown from "components/base-markdown";
import InnerLayout from 'layout/inner-layout'
import { RouteTypes } from 'config/routes';

interface NpmProps {
  route: RouteTypes
}

const Npm: React.FC<NpmProps> = props => {
  const { route, children } = props

  return <InnerLayout route={route}>{children}</InnerLayout>
}

export default Npm