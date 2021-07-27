import React from 'react';
import Loadable from 'react-loadable';
import { Skeleton } from 'antd';

export default (loader: any) => Loadable({
  loader,
  loading() {
    return <Skeleton active round />;
  },
});
