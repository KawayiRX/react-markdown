import React from "react";
import Loadable from "react-loadable";
import { Skeleton } from 'antd'

export default (loader: any) => {
  return Loadable({
    loader,
    loading() {
      return <Skeleton active round />;
    }
  });
};
