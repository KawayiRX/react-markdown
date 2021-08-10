import React from 'react'
import InnerLayout from 'layout/inner-layout'
import { RouteTypes } from 'config/routes'

interface UtilsProps {
  route: RouteTypes
}

const Vue: React.FC<UtilsProps> = (props) => {
  const { route, children } = props

  return <InnerLayout route={route}>{children}</InnerLayout>
}

export default Vue
