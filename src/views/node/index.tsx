import React from 'react';
import InnerLayout from 'layout/inner-layout';
import { RouteTypes } from 'config/routes';

interface NodeProps {
  route: RouteTypes
}

const Node: React.FC<NodeProps> = (props) => {
  const { route, children } = props;

  return <InnerLayout route={route}>{children}</InnerLayout>;
};

export default Node;
