import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// 1. Ini yang bikin bddgen jalan (Menghubungkan Feature & Steps)
const testDir = defineBddConfig({
  features: 'tests/features/*.feature',
  steps: 'tests/steps/*.ts',
});

export default defineConfig({
  testDir,
  
  /* --- TAMBAHKAN DUA BARIS INI --- */
  fullyParallel: false, // Biar gak balapan jalannya
  workers: 1,           // Biar cuma satu browser yang kebuka dalam satu waktu
  /* ------------------------------ */

  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on', // <--- WAJIB ADA ini biar gambarnya muncul di UI Mode
    screenshot: 'on',
    video: 'on',
    launchOptions: {
      slowMo: 1000, // Biar jalannya pelan dan enak ditonton
    },
  },
});