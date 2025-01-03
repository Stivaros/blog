import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:8000',
  },
  webServer: {
    command: 'npm run develop',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
  },
});
