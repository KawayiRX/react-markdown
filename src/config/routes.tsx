import loadabled from 'router/loadable';
import BlankLayout from 'layout/blank-layout';
import BasicLayout from 'layout/basic-layout';
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
    path: '/',
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: BasicLayout,
        routes: [
          {
            path: '/react',
            name: 'react',
            component: loadabled(() => import('views/react')),
            routes: [
              {
                path: '/react/docs',
                name: 'Docs',
                component: loadabled(() => import('views/react/base/index.md')),
              },
              {
                path: '/react/typescript',
                name: 'Typescript',
                component: loadabled(() => import('views/react/typescript/index.md')),
              },
              {
                path: '/react/markdown',
                name: 'Markdown',
                component: loadabled(() => import('views/react/markdown/index.md')),
              },
              { path: '/react', exact: true, redirect: '/react/docs' },
            ],
          },
          {
            path: '/node',
            name: 'node',
            component: loadabled(() => import('views/node')),
            routes: [
              {
                path: '/node/npm',
                name: 'npm',
                component: loadabled(() => import('views/node/npm/index.md')),
              },
              {
                path: '/node/nginx',
                name: 'nginx',
                component: loadabled(() => import('views/node/nginx/index.md')),
              },
              { path: '/node', exact: true, redirect: '/node/npm' },
            ],
          },
          {
            path: '/utils',
            name: 'utils',
            component: loadabled(() => import('views/utils')),
            routes: [
              {
                name: 'Type',
                path: '/utils/type',
                component: loadabled(() => import('views/utils/type/index.md')),
              },
              {
                name: 'Array',
                path: '/utils/array',
                component: loadabled(() => import('views/utils/array/index.md')),
              },
              {
                name: 'Date',
                path: '/utils/date',
                component: loadabled(() => import('views/utils/date/index.md')),
              },
              {
                name: 'Dom',
                path: '/utils/dom',
                component: loadabled(() => import('views/utils/dom/index.md')),
              },
              {
                name: 'String',
                path: '/utils/string',
                component: loadabled(() => import('views/utils/string/index.md')),
              },
              {
                name: 'Object',
                path: '/utils/object',
                component: loadabled(() => import('views/utils/object/index.md')),
              },
              {
                name: 'Utils',
                path: '/utils/utils',
                component: loadabled(() => import('views/utils/utils/index.md')),
              },
              { path: '/utils', exact: true, redirect: '/utils/type' },
            ],
          },
          {
            path: '/vue',
            name: 'vue',
            component: loadabled(() => import('views/vue/index.md')),
          },
          { path: '/', exact: true, redirect: '/react/docs' },
          // { path: "*", exact: true, redirect: "/exception/404" }
        ],
      },
    ],
  },
];
