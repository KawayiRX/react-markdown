import loadabled from "router/loadable";
import BlankLayout from "layout/blank-layout";
import BasicLayout from "layout/basic-layout";
// import SecurityLayout from "layout/security-layout";

export type RouteTypes = {
  name?: string;
  path: string;
  key: string;
  component?: any;
  redirect?: string;
  exact?: boolean;
  strict?: boolean;
  routes?: RouteTypes[];
};

export const routes = [
  {
    path: "/",
    component: BlankLayout,
    key: "blank-layout",
    routes: [
      {
        path: "/",
        component: BasicLayout,
        key: "basic-layout",
        routes: [
          {
            path: "/npm",
            name: "npm",
            key: "npm",
            // component: loadabled(() => import("views/npm/base")),
            routes: [
              {
                path: "/npm/base",
                name: "npm-base",
                key: "npm-base",
                component: loadabled(() => import("views/npm/base")),
              }
            ]
          },
          {
            path: "/vue",
            name: "vue",
            key: "vue",
            exact: true,
            component: loadabled(() => import("views/vue"))
          }
        ]
      }
    ]
  }
];
