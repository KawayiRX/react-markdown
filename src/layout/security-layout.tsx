import React from "react";
// import {Redirect} from 'react-router-dom';

type SecurityLayoutType = {};

const SecurityLayout: React.FC<SecurityLayoutType> = (props) => {
  // const isLogin = window.localStorage.getItem('login');
  // if (!isLogin) {
  //     return <Redirect to="/user"/>;
  // }
  console.log("object");
  return <div style={{ height: "100%" }}>{props.children}</div>;
};

export default SecurityLayout;
