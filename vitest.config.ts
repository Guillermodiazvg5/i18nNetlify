import * as path from 'path';
import * as VitestConfig from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default VitestConfig.defineConfig({
  test: {
    // See the list of config options in the Config Reference:
    // https://vitest.dev/config/
    watch: false,
    environment: 'jsdom',
    globals: true,
    includeSource: ['app/**/*.{ts,tsx}'],
    exclude: ['node_modules', 'e2e'],
    coverage: {
      reporter: process.env.CI ? 'json' : 'html-spa',
    },
  },
  resolve: {
    alias: {
      '@mitimiti': path.resolve(__dirname, './app'),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
