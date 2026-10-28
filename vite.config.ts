import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/realtime-security-dashboard/',
  plugins: [react()],
  test: { environment: 'jsdom' },
});
