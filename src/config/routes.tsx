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
            path: "/node",
            name: "node",
            component: loadabled(() => import("views/node")),
            routes: [
              {
                path: "/node/npm",
                name: "node",
                component: loadabled(() => import("views/node/npm")),
              },
              { path: "/node", exact: true, redirect: "/node/npm" },
            ]
          },
          {
            path: "/utils",
            name: "utils",
            component: loadabled(() => import("views/utils")),
            routes: [
              {
                name: "Type",
                path: "/utils/type",
                component: loadabled(() => import("views/utils/type")),
              },
              {
                name: "Array",
                path: "/utils/array",
                component: loadabled(() => import("views/utils/array")),
              },
              {
                name: "Date",
                path: "/utils/date",
                component: loadabled(() => import("views/utils/date")),
              },
              {
                name: "Dom",
                path: "/utils/dom",
                component: loadabled(() => import("views/utils/dom")),
              },
              {
                name: "String",
                path: "/utils/string",
                component: loadabled(() => import("views/utils/string")),
              },
              {
                name: "Object",
                path: "/utils/object",
                component: loadabled(() => import("views/utils/object")),
              },
              {
                name: "Utils",
                path: "/utils/utils",
                component: loadabled(() => import("views/utils/utils")),
              },
              { path: "/", exact: true, redirect: "/utils/array" },
            ]
          },
          {
            path: "/vue",
            name: "vue",
            component: loadabled(() => import("views/vue"))
          },
          {
            path: "/nginx",
            name: "nginx",
            component: loadabled(() => import("views/nginx")),
            routes: [
              {
                path: "/nginx/install",
                name: "install",
                component: loadabled(() => import("views/nginx/install")),
              },
              {
                path: "/nginx/simple",
                name: "simple",
                component: loadabled(() => import("views/nginx/simple")),
              },
              { path: "/nginx", exact: true, redirect: "/nginx/install" },
            ]
          },
          { path: "/", exact: true, redirect: "/node/npm" },
          // { path: "*", exact: true, redirect: "/exception/404" }
        ],
      },
    ],
  }
];
