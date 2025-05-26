
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Bommer69/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Bommer69/welcome",
    "route": "/Bommer69"
  },
  {
    "renderMode": 2,
    "route": "/Bommer69/login"
  },
  {
    "renderMode": 2,
    "route": "/Bommer69/register"
  },
  {
    "renderMode": 2,
    "route": "/Bommer69/welcome"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 784, hash: '86f24276355e7b811f50a1683dfc9852c1b378a4457a43393af65699bf306e54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1298, hash: 'b68b481e055383157b2b4cf8b15a42ea5d0b9f4edcbb1c0cc5a4ae9b9af3ded5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3514, hash: '6f813ab1044cd06b68e14e28f8e773c25a43fdec26a3a5fdf68c1a53e1b58704', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 4498, hash: '438bfefba1fcd84f9690bef4218a24638b4f3950c29c8f440d8aeb1ac329b63f', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 12453, hash: 'd4422822c3e4fb7e636cd9490b2202d98a0e092ddb61ff4c8a2b4263c1034bb8', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
