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
              { path: "/nginx", exact: true, redirect: "/nginx/base" },
            ]
          },
          { path: "/", exact: true, redirect: "/npm/install" },
          // { path: "*", exact: true, redirect: "/exception/404" }
        ],
      },
    ],
  }
];
