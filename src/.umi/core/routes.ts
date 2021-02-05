// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/quang/Home/work/react_base/ReactBase/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/',
      exact: true,
      component: require('@/pages/index.tsx').default,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
