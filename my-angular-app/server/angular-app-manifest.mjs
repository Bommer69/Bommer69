
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/register",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/welcome"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 748, hash: 'a1186582c5b3226d9fd1586bf9f15e1100c7282b8dd4e600b73358cc9cb1b463', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1262, hash: 'ba4537d7960d4bd20655555246b164e0dfc7be94ee292e4c8699d49e6ad5ff54', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 4453, hash: '18833a4ee4d21132677f74bd5cff4beb392a6516d1fc75a4e6617078a2773db9', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 12238, hash: '2648342772b1fa95770a7ca1629f30c72c825d16d556223d0a2e03016e1a9d88', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3468, hash: 'a1d36dc37b5147e8d14cd9ac0edec5acd3bc7c7cae352f36797d3e9199f3cf65', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
