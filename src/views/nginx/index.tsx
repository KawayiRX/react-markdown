import React from 'react';
import InnerLayout from 'layout/inner-layout';
import { RouteTypes } from 'config/routes';

interface JenkinsProps {
    route: RouteTypes
}

const Jenkins: React.FC<JenkinsProps> = (props) => {
  const { route, children } = props;

  return <InnerLayout route={route}>{children}</InnerLayout>;
};

export default Jenkins;
