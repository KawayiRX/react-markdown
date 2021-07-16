import loadabled from "router/loadable";
import BlankLayout from "layout/blank-layout";
import BasicLayout from "layout/basic-layout";
// import SecurityLayout from "layout/security-layout";

export type RouteTypes = {
  name?: string;
  path: string;
  component?: any;
  redirect?: string;
  exact?: boolean;
  strict?: boolean;
  routes?: RouteTypes[];
};

export const routes: RouteTypes[] = [
  {
    path: "/",
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: BasicLayout,
        routes: [
          {
            path: "/npm",
            name: "npm",
            component: loadabled(() => import("views/npm")),
            routes: [
              {
                path: "/npm/base",
                name: "base",
                component: loadabled(() => import("views/npm/screen/base")),
              },
              { path: "/npm", exact: true, redirect: "/npm/base" },
            ]
          },
          {
            path: "/vue",
            name: "vue",
            component: loadabled(() => import("views/vue"))
          },
          {
            path: "/jenkins",
            name: "jenkins",
            component: loadabled(() => import("views/jenkins")),
            routes: [
              {
                path: "/jenkins/base",
                name: "安装",
                component: loadabled(() => import("views/jenkins/screen/base")),
              },
              { path: "/jenkins", exact: true, redirect: "/jenkins/base" },
            ]
          },
          { path: "/", exact: true, redirect: "/npm/base" },
          // { path: "*", exact: true, redirect: "/exception/404" }
        ],
      },
    ],
  }
];
