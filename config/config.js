import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '标题',
  dva: {
    immer: true,
    hmr: false,
  },
  sass: {},
  fastRefresh: {},
  externals: {},
  publicPath: '/',
  base: '/',
  headScripts: [],
  // favicon: '/favicon.png',
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: false,
  }  
});
