import { defineConfig } from '@vben/vite-config';

import ElementPlus from 'unplugin-element-plus/vite';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      plugins: [
        ElementPlus({
          format: 'esm',
        }),
      ],
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => {
              const realPath = path.replace(/^\/api/, '');
              return realPath;
            },
            // mock代理目标地址
            target: 'http://127.0.0.1:8900/api',
            ws: true,
          },
        },
      },
    },
  };
});
