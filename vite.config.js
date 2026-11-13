import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths: the build works at any URL — a GitHub Pages project
  // site (username.github.io/repo-name/), a user site or a custom domain.
  base: './',
});
