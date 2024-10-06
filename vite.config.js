import { defineConfig } from 'vite';

export default defineConfig({
    root: './', // Set root to project root
    build: {
        outDir: './dist', // Output directory for production builds
        rollupOptions: {
            input: {
                index: 'public/index.html', // Entry point for HTML
                demo: 'public/demo.html',    // Entry point for the demo HTML
                app: 'src/app.js', // Entry point for your main script
            },
        },
        emptyOutDir: true, // Allow Vite to empty the output directory
    },
    server: {
        open: true, // Open the browser automatically
        port: 3000, // Default port
    },
    base: '/Gekd/BalticAIHack2024/',
});