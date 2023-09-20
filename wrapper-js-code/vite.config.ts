import { defineConfig } from 'vite';
import { readFileSync } from 'fs';

export default defineConfig({
    build: {
        target: 'esnext',
        
    },
    server: {
        origin: 'http://localhost:20001',
        port: 20001
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                // copied from "https://github.com/CodinGame/monaco-vscode-api/blob/run-ext-host-in-worker/demo/vite.config.ts"
                {
                    name: 'import.meta.url',
                    setup({ onLoad }) {
                        // Help vite that bundles/move files without touching `import.meta.url` which breaks asset urls
                        onLoad({ filter: /default-extensions\/.*\.js/, namespace: 'file' }, args => {
                            let code = readFileSync(args.path, 'utf8');
                            code = code.replace(
                                /\bimport\.meta\.url\b/g,
                                `new URL('/@fs/${args.path}', window.location.origin)`
                            );
                            return { contents: code };
                        });
                    }
                }]
        }
    }
});