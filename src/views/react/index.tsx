import React from 'react';
import InnerLayout from 'layout/inner-layout';
import { RouteTypes } from 'config/routes';

interface ReactProps {
    route: RouteTypes
}

const ReactPage: React.FC<ReactProps> = (props) => {
  const { route, children } = props;

  return <InnerLayout route={route}>{children}</InnerLayout>;
};

export default ReactPage;
