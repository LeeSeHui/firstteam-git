import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ← 이 줄 추가!
  plugins: [react()],
  server: {
    host: true,        // ✅ 이 줄 추가
    port: 5173         // (선택) 기본값: 5173, 원하면 고정 가능
  }
});