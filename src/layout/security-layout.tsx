import React from 'react'
// import {Redirect} from 'react-router-dom';

type SecurityLayoutType = {}

const SecurityLayout: React.FC<SecurityLayoutType> = ({ children }) => (
  <div style={{ height: '100%' }}>{children}</div>
)

export default SecurityLayout
