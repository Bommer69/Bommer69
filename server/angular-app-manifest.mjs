
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/repo-name/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/repo-name/register",
    "route": "/repo-name"
  },
  {
    "renderMode": 2,
    "route": "/repo-name/login"
  },
  {
    "renderMode": 2,
    "route": "/repo-name/register"
  },
  {
    "renderMode": 2,
    "route": "/repo-name/welcome"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 758, hash: '0d1a6e231a036e3f945eafb8d1df1e31fc0ed91a8a2624e3a56d3e65a83d714b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1272, hash: 'c760d2d9412746559bfebd01a0a5d3e35b544e174fc8ed59723ab808ed9eea82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3488, hash: '7c1030f08dd534ff1ca3570679c2718232c591eec6ff6056779c95ab5d32895e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'welcome/index.html': {size: 12248, hash: '32e9fda560ac5c437f1848e6e379cbdffd02c7b4a85e4f6e64e03426f5532874', text: () => import('./assets-chunks/welcome_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 4473, hash: 'bbe9e3fb60f07223b4cf9f8e8828f090ea54b8ae3f1d62b6395c984b4233a4df', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
